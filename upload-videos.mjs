import { getStore } from '@netlify/blobs';
import fs from 'fs';
import path from 'path';

async function uploadVideos() {
  try {
    const store = getStore({
      name: 'videos',
      siteID: '440a91a3-adf0-40b3-9f3b-9c28c5420d4f',
      token: process.env.NETLIFY_BLOBS_TOKEN || 'nfp_tofPzWdZ3c5ANGnAsokSMSbUdtE5U9ho0a00'
    });
    
    // List of videos to upload
    const videos = [
      'AdobeStock_679597740.mov',
      'AdobeStock_688777865.mp4'
    ];

    for (const video of videos) {
      try {
        console.log(`Checking if ${video} exists in public/images...`);
        const videoPath = path.join('public', 'images', video);
        
        if (!fs.existsSync(videoPath)) {
          console.error(`Video file ${videoPath} not found!`);
          continue;
        }

        console.log(`Reading ${video}...`);
        const videoData = fs.readFileSync(videoPath);
        console.log(`Uploading ${video} (${videoData.length} bytes)...`);
        
        await store.set(video, videoData);
        console.log(`Successfully uploaded ${video}`);
        
        // Try to get the URL to verify upload
        const url = await store.getUrl(video);
        console.log(`Video URL: ${url}`);
      } catch (error) {
        console.error(`Error processing ${video}:`, error);
      }
    }
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

uploadVideos().catch(console.error); 