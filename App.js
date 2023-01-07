import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h2 id="title" key="h2">
    Namaste React!!! From A React Element
  </h2>
);

const teacherProfile = (
  <img
    className="styleImage"
    src="https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s900-c-k-c0x00ffffff-no-rj"
    alt="Akshay Saini"
  />
);

// ------------------ React Component ------------------------------->
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

// ------------------ Rendering ------------------------------->
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing a react element inside the root
root.render(<HeaderComponent />);
// heading will only be rendered, all other things will be replaced/overwritten by this
