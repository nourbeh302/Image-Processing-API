import supertest from 'supertest';
import app from '../index';
import path from 'path';

import { createImage } from '../utils/createImage';

const request = supertest(app);

describe('Index spec', () => {
  
  describe('Sharp.js module', () => {
    it('tests the image processing module', async () => {
      expect(async () => {
        
        const fullFolder: string = path.resolve('./assets/full')
        const thumbnailsFolder: string = path.resolve('./assets/thumbnails')
        
        const width: number = 200, height: number = 400
        const filename: string = path.join(fullFolder, `leaves.png`)
        const fileBySize: string = path.join(thumbnailsFolder, `leaves_${width}_${height}.png`)

        await createImage(width, height, filename, fileBySize) 
      }).not.toThrow() 
    });
  })

  describe('Express.js module', () => {
    it('gets the endpoint with invalid query parameters', async () => {
      const response = await request.get('/api/images?filename=leaves.png&height=200');
      expect(response.status).toBe(400);
    });
    
    it('gets the endpoint with non-existing file name', async () => {
      const response = await request.get('/api/images?filename=mouse.png&width=400&height=200');
      expect(response.status).toBe(400);
    });
  })
  
});
