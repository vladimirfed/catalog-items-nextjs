 # Test assignment
 
  - Created 1 'Catalog' page powered by Next & written in js.
 Used Hooks. 
  - For styling i don't use 'Styled Components', everything i made in  scss. 
  - For price slider i used 'Material UI Range Slider', so please be sure that all dependencies has been installed. All you can find in 'package.json'.
  - For uniq key to render the catalog's items i used 'name' parameter, cause usually there should be some IDs on the server side. In real-life project if there are no IDs from the server -  for making IDs on the client side i'll defenetly use kind of [uuidv4](https://www.npmjs.com/package/uuidv4) or similar.
 - I had some problem with Next's ```<Image />```, even when i made width/height parameters and  made  a config for 'next.config.js' that allow to get the pictures from the
  ```  ['d35xwkx70uaomf.cloudfront.net'] ```
 - Made a breakpoint on 400px for mobile.

## How to run the project

Install dependencies:

```bash
npm install
# or
yarn install
```

Dev will run on  port 3000 with following commands:

```bash
npm run dev
# or
yarn dev
```
