[Windows.Media.Ocr.OcrEngine, Windows.Foundation, ContentType = WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
if (-not $engine) {
    Write-Output "No OCR engine available"
    exit
}

$images = Get-Content -Raw "unique_images.json" | ConvertFrom-Json
$results = @()

foreach ($item in $images) {
    $fullPath = Join-Path (Get-Location) "allimages\$($item.file)"
    $fileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($fullPath)
    $file = $fileTask.GetAwaiter().GetResult()
    
    $streamTask = $file.OpenAsync([Windows.Storage.FileAccessMode]::Read)
    $stream = $streamTask.GetAwaiter().GetResult()
    
    $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = $decoderTask.GetAwaiter().GetResult()
    
    $bitmapTask = $decoder.GetSoftwareBitmapAsync()
    $bitmap = $bitmapTask.GetAwaiter().GetResult()
    
    $ocrTask = $engine.RecognizeAsync($bitmap)
    $ocrResult = $ocrTask.GetAwaiter().GetResult()
    
    $text = ($ocrResult.Lines | ForEach-Object { $_.Text }) -join " "
    
    $results += [PSCustomObject]@{
        file = $item.file
        text = $text
        width = $decoder.PixelWidth
        height = $decoder.PixelHeight
    }
}

$results | ConvertTo-Json -Depth 3 | Set-Content "ocr_results.json"
Write-Output "OCR finished for $($results.Count) images"
