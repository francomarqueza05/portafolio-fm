from rembg import remove
from PIL import Image

input_path = "public/foto.jpeg"
output_path = "public/foto_rmbg.png"

input = Image.open(input_path)
output = remove(input)
output.save(output_path)
print("Background removed successfully!")
