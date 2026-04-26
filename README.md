# Personal Website Essam

## What did we use in the project?
### 1- [React Js](https://react.dev/learn/installation)
### 2- [React Bootstrap](https://react-bootstrap.netlify.app/)
### 3- [React Bootstrap Icons](https://icons.getbootstrap.com/) - [npm](https://www.npmjs.com/package/react-bootstrap-icons)
### 4- [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel)
### 5- [Eepurl](http://www.eepurl.com/) | [New Eepurl](https://mailchimp.com/)
### 6- [Animate.css](https://animate.style/)


- my new portfolio using React Js `Soon`
- npx create-react-app my-app
- npm install react-bootstrap bootstrap
- npm i bootstrap-icons
- npm install react-bootstrap-icons --save
- npm i react-multi-carousel
- npm i nodemailer
- npm i express-cors
- [npm i react-mailchimp-subscribe](https://www.npmjs.com/package/react-mailchimp-subscribe)
- npm install animate.css --save
- npm i react-on-screen

## Publish A React App To GitHub Pages [react-gh-pages](https://github.com/x39OME/react-gh-pages?tab=readme-ov-file#3-install-the-gh-pages-npm-package)
- npm install gh-pages --save-dev
- package.json add
  ```
  "homepage":"https://x39ome.github.io/essam",
  "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build",
     "start": "react-scripts start",
     "build": "react-scripts build",        
- git init
- git remote add origin https://github.com/x39OME/essam.git
- npm run deploy


## Important!! How to Update the Projects:
- git init
- git add .
- git commit -m "Update my website with new features"
  ```
  git config --global user.email "myEmaill@example.com"
  git config --global user.name "Your Name"

- git commit -m "Update my website with new features"
- git push
- git push origin main # or # git push --set-upstream origin master
  ```
   تم رفع الملفات على فرع master
  لابد من دمجها ونقلها الى gh-pages 

```
💡 نصيحة للمستقبل:

الآن بعد أن ربطت الفروع ببعضها، في المرة القادمة التي تعدل فيها الكود، ستحتاج فقط لتنفيذ هذه الأوامر الثلاثة بالترتيب في فرع master:

    git add .

    git commit -m "Update"

    git push origin master

ثم تعود لفرع gh-pages وتعمل له merge كما فعلنا اليوم.
```

- git checkout master
- git fetch origin
- git checkout gh-pages
- git checkout -b gh-pages origin/gh-pages
- git checkout -b gh-pages
- git pull origin gh-pages
- git merge master
- git push origin gh-pages
  
  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
