/***
 *
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatble with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 *
 * Transitive Dependencies
 */

import React from "react";
import ReactDOM from "react-dom/client";
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "Heading1"
);
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
  },
  "Heading2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    hello: "namaste", // we can declare any custom attributes as well => props in react
  },
  [heading1, heading2]
);

// console.log(heading1);
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(container);
// heading will only be rendered, all other things will be replaced/overwritten by this
