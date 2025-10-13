const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Your website URL
const siteUrl = 'https://pokum.id';

// List of your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Add more routes as needed
];

async function generateSitemap() {
  // Create a stream to write to
  const sitemap = new SitemapStream({ hostname: siteUrl });
  const writeStream = fs.createWriteStream(path.resolve('./public/sitemap.xml'));
  const pipeline = sitemap.pipe(createGzip()).pipe(writeStream);

  // Add each route to the sitemap
  routes.forEach(route => {
    sitemap.write(route);
  });

  sitemap.end();

  // Wait for the sitemap to be written
  await new Promise(resolve => writeStream.on('finish', resolve));
  
  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(console.error);
