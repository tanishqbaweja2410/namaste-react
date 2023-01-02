
# <center>`Assignment2`</center>
## <center>`Theory`</center>
---
### **What is `NPM`?**
1. Not Just A `Node Package Manager`
2. Infact, npm uses a lot of expansions which are visible on the header of their website. Some examples include `"No Pants, Mom"`, `"Never Push to Master"`, `"Null Pointer Missing"`.

---
### **What is `Parcel/Webpack`? Why do we need it?**
Parcel and Webpack are types of Module Bundlers.

Module Bundlers :-
1. development tool to `combine all files` and their `dependencies` into a `single file `
2. `minifies` the code
3. generates a `dependency graph`
4. persformance optimization => `code splitting`, `hot module replacement`
5. `robust error loging`


**_Parcel vs Webpack_** : -
1. Parcel is the `Beast!` It comes with `zero configurations support`. Although, nowadays webpack also provides zero config support but then it limits its capabilities.
2. `Handling Preprocessors` and `Directives` is much `easier` in Parcel bcoz it `does not require configurations` whereas Webpack requires configurations.
3. Talking about the speed of the build, `Parcel` has `higher initial build` time which `reduces significantly` in the `subsequent` builds. On the other hand, `Webpack` has a much `faster intial build`.
4. Webpack is the `Best!` when it comes to `customizations`
5. Due to its customizations, Webpack has a `large community `and `support`

`Conclusions` :-

Parcel is `best suited` for `small-scale applications` whereas it would be much better to go with Webpack if you have `enterprise level applications` like an `eCommerce app`.

---
### **What is `.parcel-cache`?**
1. Parcel `jo kuchh bhi build` karta hai usko `disk mein cache` kar leta hai.
2. Isse kya hota hai na `jab bhi hum server ko restart karte` hai toh `sirf vo files hi rebuild` hoti hai `jinmein kuchh changes huye` hote hai.
3. Ab sawal ye uthta hai ki `parcel ko kaise pata chala ki kuchh change hua hai`, toh iske liye parcel ki superpower `File Watching Algorithms`(`C++` mein likhi gayi) prakat hoti hai aur parcel ko ye shakti pradaan karti hai.
4. Jo `source files` in `changed files pe dependent` hai vo bhi rebuild hoti hai
5. Ye cached files .parcel-cache folder mein present hoti hai. Hume iss folder ko ```.gitignore``` file mein rakhna chahiye aur apni repo mein push nhi karna chahiye.

_Reason_ : When the parcel server starts, it `gets automatically generated` at the `project root`.

---

### **What is `npx` ?**

execute the package from entry point
```
    npx parcel index.html
    npx parcel build index.html
```
---

### **What is difference between `dependencies` vs `devDependencies`?**

| `dependencies` | `devDependencies` |
| -------------  |  ---------------- |
| an `object` containing the `library` which our project `requires` for `proper functioning of production environment` | all those `packages` which are required in the `dev env` for `dev purposes only` |
| `required` while `testing` and `running` on localhost | `required only` during the `development phase` |
|||
```
// dependencies
npm install react
npm install react-dom
``` 
```
// dev dependencies
npm install -D parcel
```

---
### **What is Tree Shaking?**

_`shaking the tree to leave dead leaves`_

similarly, in the `production builds`, parcel `keeps an eye`(statically analyzes) on the `imports and exports of each module`(all types of modules included be it commonJS, ES, CSS) and `removes everything which is not used`.

i.e. **`Dead Code Removal`**

Parcel also implement [`Scope Hoisting`](https://parceljs.org/features/scope-hoisting/) for better tree shaking.

_`index.js:`_
```
import {add} from './math';
console.log(add(2, 3));
```
_`math.js:`_
```
export function add(a, b) {
  return a + b;
}
export function square(a) {
  return a * a;
}
```
_Compiles to something like:_
```
function $fa6943ce8a6b29$add(a, b) {
  return a + b;
}
console.log($fa6943ce8a6b29$add(2, 3));
```

---
### **What is `Hot Module Replacement`?**

1. any `change` in code => `automatic update` at `runtime`
2. `without reloading` the web page
3. due to presence of `File Watcher Algorithms` which are written in C++
4. `CSS changes` also supported 
5. updates `in-place`
6. Parcel integrates with `React Fast Refresh` and the `Vue Hot Reloading API` => automatically `preserve application state` between updates.

---
### **List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.**

>Zero Configuration Required

>Minification
1. `Parcel includes minifiers for JavaScript, CSS, HTML, and SVG out of the box! `
2. `Just run parcel build index.html, and your whole application will be built and optimized automatically.`

>Code Splitting

>Content Hashing
1. `automatically includes content hashes in the names of all output files.`
2. `enables long-term browser caching because the output is guaranteed not to change unless the name does.`
>Beautiful Diagonostics
1. `syntax highlighted code frame` 
2. `points exact location where error occurred`
3. `hints to fix the issue`
4. `documentation links`

---
### **What is `.gitignore`? What should we add and not add into it?**

.gitignore is file which contains all those files which we don't want to push to our repo.
Basically all those things which could be regenerated at server aren't required to be 
pushed to git. 

things to be pushed to git
1. source code files 
2. package.json 
3. package-lock.json

things to be added to .gitignore
1. node modules
2. bundler cache
3. dist
4. .DS_STORE(generated by mac)

---
### **What is the difference between `package.json` and `package-lock.json`?**

`package.json` the amazing configuration which npm needs to run itself. Contains info about main, scripts, author, isc, etc.

`package-lock.json` an important file which tells us the exact version of packages being used at production.
To avoid uncertainities wherein the version used at devopment differs from that at production, package-lock.json locks the exact version of packages. Keeps a snapshot of which version your project is using.

1. Never ever put `package-lock.json` in `.gitignore`
2. Also `stores hash` of modules to maintain `integrity`.
3. This ensures that the version used at production is same as that used at development.

---
### **Why should I not modify `package-lock.json`?**

it contains the exact details of packages used at the time of development and therefore we use it to generate the exact node modules at server.

So modifying anything can cause difference between dev and prod env and can therefore might lead to the crashing of our app. 

`Problem : It works fine on my system but not in the production.`

---
### **What is `node_modules` ? Is it a good idea to push that on git?**

node_modules => node packages which are used for various superpowers which we want in our app(apart from the ones contributed by React).

No, as it gets auto generated on the server by using `package.json` and `package-lock.json`.

---
### **What is the `dist` folder?**

dist folder => the directory which stores the minified code generated by bundlers like parcel after every run and build command.

---
### **What is `browserlists`?**

A node package which comes along the way with parcel and is responsible to make our app compatible with old browsers.

It provides the ability to write customized queries for including support for various browsers and make our app accessible to a larger audience.

---
### **Project Assignment:**

-> In your existing project :-

● - intialize `npm` into your repo
  ```
  npm init 
  <!-- creates a package.json file -->
  ```
● - install `react` and `react-dom`
  ```
  <!-- various possible ways -->
  npm install react
  npm install react-dom
  npm install react react-dom
  npm i react react-dom
  ```

● - remove CDN links of react
```
<!-- Remove them  -->
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
● - install parcel
```
<!-- installing parcel as a dev dependency, therefore, -D flag is used -->
npm install -D parcel
```

● - ignite your app with parcel
```
npx parcel index.html
```
● - add scripts for “start” and “build” with parcel commands
```
<!-- in package.json file -->
"scripts": {
  "start" : "parcel index.html",
  "build" : "parcel build index.html"
  "test" : "jest"
}
```
● - add `.gitignore` file

simply make a new file with name .gitignore

```
# Node artifact files
node_modules/
dist/

# Generated by MacOS
.DS_Store

.parcel-cache
```

● - add `browserlists`
```
<!-- add support for specific browsers -->
<!-- to make our app accessible to a larger audience -->
"browserslist": [
    "last 2 Chrome versions"
  ]
```

● - build a production version of your code using `parcel build`
```
npx parcel build index.html
```

Whenever we install a package from npm registry like react, react-dom or parcel, so a package-lock.json file is created along with node modules directory.
### Date : 01 Jan 2023
