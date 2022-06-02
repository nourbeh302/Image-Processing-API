import sharp from "sharp" /* Image Processing API */

export const createImage = async (width: number, height: number, src: string, destination: string) => {
  await sharp(src)
    .resize(width, height)
    .toFile(destination)
}