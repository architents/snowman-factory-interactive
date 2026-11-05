import pymupdf
import os
from PIL import Image

pdf_path = r"C:\Users\snow\.gemini\antigravity\brain\fcd84a43-702f-426b-9597-138b288b8b1d\.user_uploaded\media_1793754088922_26051068.pdf"
doc = pymupdf.open(pdf_path)
page = doc[17] # P.18
print("Rect:", page.rect)

# 300 DPI 렌더링
pix = page.get_pixmap(dpi=300)
img_path = r"a:\snowman_factory_interactive\assets\project_01\page_18_full.png"
pix.save(img_path)

im = Image.open(img_path)
w, h = im.size
print("Image size:", w, h)

# P.18 레이아웃 크롭 (비율 기반)
# 1. 현장 사진 (Site Photo): x: 27.5% ~ 59.5%, y: 9.8% ~ 38.0%
site_photo = im.crop((int(w * 0.275), int(h * 0.098), int(w * 0.598), int(h * 0.385)))
site_photo.save(r"a:\snowman_factory_interactive\assets\project_01\site_photo.png")

# 2. MEP BIM 투시도: x: 62.0% ~ 93.5%, y: 9.8% ~ 38.5%
mep_bim = im.crop((int(w * 0.620), int(h * 0.098), int(w * 0.938), int(h * 0.385)))
mep_bim.save(r"a:\snowman_factory_interactive\assets\project_01\mep_bim.png")

# 3. LiDAR 점군 데이터 조감도: x: 27.5% ~ 93.8%, y: 40.0% ~ 93.5%
point_cloud = im.crop((int(w * 0.275), int(h * 0.400), int(w * 0.938), int(h * 0.935)))
point_cloud.save(r"a:\snowman_factory_interactive\assets\project_01\point_cloud.png")

print("All 3 project visual assets cropped successfully!")

