import { writeFileSync, readFileSync } from 'fs';

import { FileSystemRepository } from './ports/fileSystemRepository';

export class FileSystem implements FileSystemRepository {
  writeraFile(fileName: string, content: string) {
    return new Promise((resolve, reject) => {
      resolve(writeFileSync(fileName, content));
    });
  }
  readerAfile(fileName: string) {
    return 'any_content';
  }
}
