import { getStore } from '@netlify/blobs';

async function testVideos() {
  const store = getStore({
    name: 'videos',
    siteID: '440a91a3-adf0-40b3-9f3b-9c28c5420d4f',
    token: 'nfp_tofPzWdZ3c5ANGnAsokSMSbUdtE5U9ho0a00'
  });
  
  const videos = [
    'AdobeStock_679597740.mov',
    'AdobeStock_688777865.mp4'
  ];

  for (const video of videos) {
    try {
      const exists = await store.has(video);
      console.log(`Video ${video} exists: ${exists}`);
      if (exists) {
        const url = await store.getUrl(video);
        console.log(`URL for ${video}: ${url}`);
      }
    } catch (error) {
      console.error(`Error checking ${video}:`, error);
    }
  }
}

testVideos().catch(console.error); 