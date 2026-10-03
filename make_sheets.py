import json
from PIL import Image, ImageDraw, ImageFont

with open('public/catalog.json') as f:
    catalog = json.load(f)

# Contact sheet parameters: 3 cols x 6 rows = 18 images per sheet
thumb_w, thumb_h = 360, 270
cols, rows = 3, 6
per_sheet = cols * rows

total = len(catalog)
sheet_idx = 0

for start in range(0, total, per_sheet):
    sheet_idx += 1
    chunk = catalog[start:start+per_sheet]
    sheet = Image.new('RGB', (cols * thumb_w, rows * thumb_h), (25, 25, 30))
    draw = ImageDraw.Draw(sheet)
    
    for i, item in enumerate(chunk):
        r = i // cols
        c = i % cols
        x = c * thumb_w
        y = r * thumb_h
        
        im_path = 'public' + item['url']
        try:
            im = Image.open(im_path)
            im.thumbnail((thumb_w - 20, thumb_h - 40))
            # paste centered
            px = x + 10 + (thumb_w - 20 - im.width) // 2
            py = y + 30 + (thumb_h - 40 - im.height) // 2
            sheet.paste(im, (px, py))
        except Exception as e:
            print("Error loading", im_path, e)
            
        # Draw label
        label = f"#{item['id']} ({item['name']})"
        draw.rectangle([x + 5, y + 5, x + thumb_w - 5, y + 26], fill=(0, 0, 0))
        draw.text((x + 12, y + 8), label, fill=(255, 220, 100))
        
    out_path = f"public/contact_sheet_{sheet_idx}.jpg"
    sheet.save(out_path, quality=85)
    print(f"Saved {out_path}")
