# <center> Assignment3 </center>

## <center> Laying The Foundation </center>

---

> ### **What is JSX ?**

1. Implementing Nesting Structures Using `React.createElement()` is a **_cumbersome task_**.
2. So, in order to simplify the process, fb developers build a _**`html like syntax`**_ known as JSX.
3. Note That **`JSX is Not html inside js`**.
4. React.createElement() -> Object -> HTML(DOM)
5. JSX -> React.createElement() -> Object -> HTML(DOM)
6. JSX enhances the `readability` of the code.
7. The html like syntax gets converted to React.createElement() behind the scenes with the help of Babel.
8. Babel is the `compiler for Modern JS `and converts it into a format understandable by browsers.
9. `next-gen JS => browser-compatible JS`
10. Babel uses `Abstract Syntax Trees `for this conversion.
11. Babel compiles JSX down to React.createElement() calls.
12. All tags self close in JSX like <br /> and <h1></h1>

---

> ### **Superpowers Of JSX**

1. `Syntactic Sugar` in React as developers `must write code` which is `understandable to HUMANS`.
2. There could be `only one parent element`.
3. We can `run any piece of JS code` `inside JSX` by just using `{Any JS Code}`.
4. JSX is `secure` and performs `Sanitization` on the data/code received inside {}, so that it could `save our app` from `any malicious code injection practices` done by hackers.
   Prevents from `XSS attacks`.
5. Most Important is the Develop Experience which is extremely enhanced due to amazing `Readability`.
6. Act as a `javascript expression`.
7. Uses `camelCasing` for attributes.
8. Since class and for are reserved keywords in JS, therefore we have `className` and `labelFor` in JSX.
9. similarly, we have `tabIndex`.

---

> ### **Role Of Type Attribute in Script Tag**

1. The `<script>` html element is use to embed a piece of code(typically Javascript).
2. Permitted content : Dynamic script such as text/javascript.
3. `Type attribute` indicates the `type of script` represente.
4. It can take the following values :-
5. Attribute not set(Default), Empty String : _`"classic script"`_
6. _`type = 'module'`_ => code treated as a JavaScript module.
7. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.
8. Splitting of JS programs into separate modules, so that one could import modules as per the required features.
9. *_`modern browsers have started to support module functionality natively`_*
10. browsers can `optimize loading of modules`, making it more efficient than having to use a library and do all of that extra client-side processing and extra round trips.

---

>`{TitleComponent}` vs `{<TitleComponent/>}` vs 
`{<TitleComponent></TitleComponent>}`

`{TitleComponent}` :- _**Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.
    at div
    at HeaderComponent**_

`{<TitleComponent/>}` and `{<TitleComponent></TitleComponent>}` : these two are used to display the TitleComponent.

---

> ### **Code Assignment**

![Header](Header.png "header-component")

---

Code for the Concepts Taught In Class3 : -

```
// ------------------ Why JSX ? ------------------------------->
// Pain of React.createElement to implement nested structures
{/* <div>
  <h1>Namaste Dev</h1>
  <ul>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Home</li>
  </ul>
</div>;  */}

// const navBar = React.createElement("div", {}, [
//   React.createElement("h1", { id: "nd" }, "Namaste Dev"),
//   React.createElement("ul", { id: "ndul" }, [
//     React.createElement("li", { id: "au" }, "About Us"),
//     React.createElement("li", { id: "cu" }, "Contact Us"),
//     React.createElement("li", { id: "h" }, "Home"),
//   ]),
// ]);
// to avoid getting into such a mess, we use JSX!

// ------------------ Flow ------------------------------->
// React.createElement => Object => HTML(DOM)
// JSX => React.createElement => Object => HTML(DOM)
// JSX uses React.createElement behind the scenes by Babel

// ------------------ Image Tag Using JSX ------------------------------->
const teacherProfile = (
  <img
    className="styleImage"
    src="https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s900-c-k-c0x00ffffff-no-rj"
    alt="Akshay Saini"
  />
);

.styleImage {
    width: 500px;
    height: 400px;
}


// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(teacherProfile);
// heading will only be rendered, all other things will be replaced/overwritten by this

// ------------------ React Component ------------------------------->

const Title = () => (
  <h2 id="title" key="h2">
    Namaste React!!! From A React Element
  </h2>
);

// Everything is a component in React
// - Functional Component - NEW
// - Class Based Component - OLD

// Functional Component is nothing but a JS Function
// it just returns some piece of JSX code or ReactElement
const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      <h1>Namaste React!!! From A Functional Component</h1>
      <h2>By Akshay Saini</h2>
    </div>
  );
};

// const HeaderComponent = () => (
//   <div>
//     <h1>Namaste React Functional Component</h1>
//     <h2>By Akshay Saini</h2>
//   </div>
// );

// ------------------ Rendering Components ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<HeaderComponent />);
// heading will only be rendered, all other things will be replaced/overwritten by this

```

![Output](output.png "JSX-ImgTag")

### Date : 04 Jan 2023
