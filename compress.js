import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imgDir = 'public/assets/img/';

function compressImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const outputPath = filePath; // overwrite

  if (ext === '.jpg' || ext === '.jpeg') {
    return sharp(filePath)
      .jpeg({ quality: 80 })
      .toFile(outputPath + '.tmp')
      .then(() => fs.renameSync(outputPath + '.tmp', outputPath));
  } else if (ext === '.png') {
    return sharp(filePath)
      .png({ compressionLevel: 9 })
      .toFile(outputPath + '.tmp')
      .then(() => fs.renameSync(outputPath + '.tmp', outputPath));
  }
}

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())) {
      callback(filePath);
    }
  });
}

console.log('Compressing images...');
walkDir(imgDir, (file) => {
  console.log(`Compressing ${file}`);
  compressImage(file).catch(err => console.error(`Error compressing ${file}:`, err));
});
console.log('Compression complete.');