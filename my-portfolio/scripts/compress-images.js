import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imgDir = path.join(__dirname, '../public/assets/img');
const MAX_WIDTH = 1920;  // 最大宽度
const MAX_HEIGHT = 1080; // 最大高度
const JPEG_QUALITY = 80; // JPEG质量
const PNG_QUALITY = 80;  // PNG质量

async function compressImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const stats = fs.statSync(filePath);
    const fileSizeKB = stats.size / 1024;
    
    // 跳过小于100KB的文件
    if (fileSizeKB < 100) {
      console.log(`跳过小文件: ${filePath} (${fileSizeKB.toFixed(1)}KB)`);
      return;
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    let pipeline = image;
    
    // 调整尺寸（如果图片太大）
    if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
      pipeline = pipeline.resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }
    
    // 根据格式进行压缩
    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
    } else if (ext === '.png') {
      pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
    }
    
    const outputBuffer = await pipeline.toBuffer();
    
    // 只有压缩后更小才保存
    if (outputBuffer.length < stats.size) {
      fs.writeFileSync(filePath, outputBuffer);
      const newSizeKB = outputBuffer.length / 1024;
      const savedPercent = ((1 - outputBuffer.length / stats.size) * 100).toFixed(1);
      console.log(`✓ 压缩: ${path.basename(filePath)} (${fileSizeKB.toFixed(1)}KB → ${newSizeKB.toFixed(1)}KB, 节省${savedPercent}%)`);
    } else {
      console.log(`- 保持: ${path.basename(filePath)} (已优化)`);
    }
  } catch (error) {
    console.error(`✗ 错误: ${filePath}`, error.message);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  const imageFiles = [];
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      imageFiles.push(...await walkDir(filePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        imageFiles.push(filePath);
      }
    }
  }
  
  return imageFiles;
}

async function main() {
  console.log('🖼️  开始压缩图片...\n');
  
  const imageFiles = await walkDir(imgDir);
  console.log(`找到 ${imageFiles.length} 个图片文件\n`);
  
  for (const file of imageFiles) {
    await compressImage(file);
  }
  
  console.log('\n✅ 图片压缩完成!');
}

main();
