import * as fs from 'fs';
import * as path from 'path';

export const certainlyCreateFile = (filePath: string, data: any): Promise<NodeJS.ErrnoException | null> => {
  return new Promise((resolve, reject) => {
    fs.mkdir(path.dirname(filePath), (err) => {
      if (err != null) reject(err);
      fs.writeFile(filePath, data, (err) => {
        if (err != null) reject(err);
        resolve(null);
      })
    });
  })
  
}