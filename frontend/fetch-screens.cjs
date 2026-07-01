const fs = require('fs');
const path = require('path');
const axios = require('axios');
const cheerio = require('cheerio');
const HTMLtoJSX = require('htmltojsx');

// Initialize the converter (createClass false to just get JSX output)
const converter = new HTMLtoJSX({ createClass: false });

const screens = [
  { name: 'OTPVerification', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2EwYWQ3MWE3ODU3ZTQ3ZmNhNjhkMzFiNGU2MDc2NjM0EgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'Login', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzliN2FiY2FmNjM2OTQyMTFiZGE3NDI4YjdhNzNkZmIzEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'FoodExpressHomepage', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwN2JjNDBiZDY0MTQ2OWE5NjVjOTg1YmJiMWYwMTk0EgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'AdminDashboard', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2I4NjA1N2E1ZGUxMTQxNjVhMWMyMWIxOGUwMDAxMDJmEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'MyOrders', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2JlM2ZlZDEzMDI3YTQ5MmViYTBjZWYwZDk1YWQxZDMyEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'LoadingResults', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1NTkwYWRhN2EyNGQwMzM4NWM3MjEzMGE1NWI4EgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'NoResults', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAzNGZiOWY2NzQ2NTRhNTc4ODUyY2IwMzYwMWQ4MTdhEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'OrderTracking', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YzN2I0NGVjY2E1ZjQ1N2U5Mzc5MDU3NGU3NDk3MDUzEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'RestaurantDetail', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzRlZWFjMzI1OTVmMzQ4YThiYTg4NDA2YWU3OGQ1MmViEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'SignUp', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzNjYWVkZGNlNTAxNDQ3NjNiNjI1OGYzYzA5NjA0YTk0EgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'RestaurantSearchResults', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzMyOWIzOTA2YmIyNDRjZGE4NzYwMDRlOTZjZTBhNDljEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' },
  { name: 'Checkout', url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2JiOWEyZDFjZWM0ZTRhNmZiODU3OTIzMjMzYTk1NDhiEgsSBxCnu_6b0xEYAZIBIwoKcHJvamVjdF9pZBIVQhM1NTMxMjM5MDUzMzY2MTcwNTM5&filename=&opi=89354086' }
];

async function run() {
  const pagesDir = path.join(__dirname, 'src', 'pages');
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }

  for (const screen of screens) {
    try {
      console.log(`Fetching ${screen.name}...`);
      const { data } = await axios.get(screen.url);
      const $ = cheerio.load(data);
      
      // The content is inside the body tag
      const bodyHtml = $('body').html();
      
      // Extract tailwind config from the first screen
      if (screen.name === 'OTPVerification') {
         const tailwindConfigScript = $('#tailwind-config').html();
         if (tailwindConfigScript) {
           const match = tailwindConfigScript.match(/tailwind\.config\s*=\s*(\{[\s\S]*\});/);
           if (match && match[1]) {
             const configContent = `/** @type {import('tailwindcss').Config} */\nexport default ${match[1]}`;
             fs.writeFileSync(path.join(__dirname, 'tailwind.config.js'), configContent);
             console.log('Saved tailwind.config.js');
           }
         }
      }
      
      let jsx = converter.convert(bodyHtml || '');
      
      // Sometimes htmltojsx leaves 'class=' or HTML comments. Fix any remaining issues.
      jsx = jsx.replace(/class=/g, 'className=');
      jsx = jsx.replace(/for=/g, 'htmlFor=');
      // Wrap in a React component
      const componentCode = `import React from 'react';\n\nexport default function ${screen.name}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
      
      fs.writeFileSync(path.join(pagesDir, `${screen.name}.jsx`), componentCode);
      console.log(`Saved ${screen.name}.jsx`);
      
    } catch (err) {
      console.error(`Failed to process ${screen.name}:`, err.message);
    }
  }
}

run();
