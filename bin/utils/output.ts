import * as fs from 'fs';
import * as path from 'path';

export const certainlyCreateFile = (filePath: string, data: any): {isComplete: boolean, message: string} => {
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
  }

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, data);
    return {
      isComplete: false,
      message: `EXISTS: ${filePath}`
    }
  }
  return {
    isComplete: true,
    message: `DONE: ${filePath}`,
  }
}