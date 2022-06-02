import { Router, Request, Response } from 'express'
import { existsSync } from 'fs';
import path from 'path';

import { createImage } from "../utils/createImage"

const routes: Router = Router()

routes.get('/images', async (req: Request, res: Response) => {
  const { width, height, filename } = req.query
  if(!(width && height && filename)) {
    res.status(400).json({ message: 'The file name, width, and height must be provided' })
  }
  else {
    try {
      const fullFolder = path.resolve('./assets/full')
      const thumbnailsFolder = path.resolve('./assets/thumbnails')
      const fileBySize = `${filename}_${width}_${height}.png`.replace('.png_', '_')
      
      const isFileExists = existsSync(path.join(thumbnailsFolder, fileBySize))
      if (isFileExists) {
        res.sendFile(path.join(thumbnailsFolder, fileBySize))
      }
      else {
        await createImage(
          + (width as string), 
          + (height as string), 
          path.join(fullFolder, filename as string),
          path.join(thumbnailsFolder, fileBySize)
        )
        res.status(201).sendFile(path.join(thumbnailsFolder, fileBySize))
      }
    
    } catch (error) {
      res.status(400).json('The file should exist in the full folder to be resized')
    }
  }
  
})

export default routes