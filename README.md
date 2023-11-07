# Astro + React Example

Write your React components as `.jsx` or `.tsx` files in your project.

# Note:

Example Boilerplate without React Router

```sh
npm create astro@latest -- --template framework-react
```

# Tips: 
You can use node inbuilt packages (ds, path, etc) you just need to prefix them with node:
```javascript
import fs from 'node:fs';
import path from 'node:path';
 
const __dirname = path.resolve();
const BLOG_PATH = path.join(__dirname, 'content/blog');
const directories = fs
    .readdirSync(BLOG_PATH)
    .filter((element) => fs.lstatSync(`${BLOG_PATH}/${element}`).isDirectory());
```
