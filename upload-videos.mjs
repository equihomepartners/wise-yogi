import { getStore } from '@netlify/blobs';
import fs from 'fs';
import path from 'path';

async function uploadVideos() {
  const store = getStore({
    name: 'videos',
    siteID: '440a91a3-adf0-40b3-9f3b-9c28c5420d4f',
    token: 'nfp_tofPzWdZ3c5ANGnAsokSMSbUdtE5U9ho0a00'
  });
  
  // List of videos to upload
  const videos = [
    'AdobeStock_679597740.mov',
    'AdobeStock_688777865.mp4'
  ];

  for (const video of videos) {
    console.log(`Uploading ${video}...`);
    const videoPath = path.join('public', 'images', video);
    const videoData = fs.readFileSync(videoPath);
    await store.set(video, videoData);
    console.log(`Successfully uploaded ${video}`);
  }
}

uploadVideos().catch(console.error); 