const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');

async function extractTailwind() {
  const url = 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2EwYWQ3MWE3ODU3ZTQ3ZmNhNjhkMzFiNGU2MDc2NjM0EgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086';
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);
  const scriptContent = $('#tailwind-config').html();
  
  // Find everything from tailwind.config = { ... }
  const configMatch = scriptContent.match(/tailwind\.config\s*=\s*([\s\S]*?);?\s*$/);
  
  if (configMatch && configMatch[1]) {
    let configStr = configMatch[1];
    
    const finalConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ...${configStr},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}`;

    fs.writeFileSync('tailwind.config.js', finalConfig);
    console.log('Successfully wrote tailwind.config.js');
  } else {
    console.log('Failed to extract config');
  }
}

extractTailwind();
