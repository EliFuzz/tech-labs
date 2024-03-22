import numpy as np
from PIL import Image

def compute_energy(image):
    grayscale_image = image.convert("L")
    grayscale_array = np.array(grayscale_image)

    sobel_x = np.array([[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]])
    sobel_y = np.array([[-1, -2, -1], [0, 0, 0], [1, 2, 1]])

    dx = signal.convolve2d(grayscale_array, sobel_x, mode="same", boundary="symm")
    dy = signal.convolve2d(grayscale_array, sobel_y, mode="same", boundary="symm")

    energy = np.sqrt(dx**2 + dy**2)
    return energy

def find_vertical_seam(energy):
    height, width = energy.shape
    cumulative_energy = energy.copy()

    for i in range(1, height):
        for j in range(width):
            if j == 0:
                cumulative_energy[i, j] += min(cumulative_energy[i-1, j], cumulative_energy[i-1, j+1])
            elif j == width - 1:
                cumulative_energy[i, j] += min(cumulative_energy[i-1, j-1], cumulative_energy[i-1, j])
            else:
                cumulative_energy[i, j] += min(cumulative_energy[i-1, j-1], cumulative_energy[i-1, j], cumulative_energy[i-1, j+1])

    seam = []
    j = np.argmin(cumulative_energy[-1])
    seam.append(j)

    for i in range(height - 2, -1, -1):
        if j == 0:
            j = np.argmin(cumulative_energy[i, j:j+2])
        elif j == width - 1:
            j = np.argmin(cumulative_energy[i, j-1:j+1]) + j - 1
        else:
            j = np.argmin(cumulative_energy[i, j-1:j+2]) + j - 1
        seam.append(j)

    seam.reverse()
    return seam

def remove_vertical_seam(image, seam):
    height, width = image.shape[:2]
    new_image = np.zeros((height, width - 1, 3), dtype=np.uint8)

    for i in range(height):
        j = seam[i]
        new_image[i, :, 0] = np.delete(image[i, :, 0], j)
        new_image[i, :, 1] = np.delete(image[i, :, 1], j)
        new_image[i, :, 2] = np.delete(image[i, :, 2], j)

    return new_image

def seam_carving(input_image_path, output_image_path, new_width):
    image = np.array(Image.open(input_image_path))

    for _ in range(image.shape[1] - new_width):
        energy = compute_energy(Image.fromarray(image))
        seam = find_vertical_seam(energy)
        image = remove_vertical_seam(image, seam)

    Image.fromarray(image).save(output_image_path)
    print("Image resized successfully!")
