
# <center>Assignment1</center>
## <center>Theory</center>
---
### **What is emmet ?**
1. the essential toolkit for web developers
2. provides short forms/ways for 
    1. html boilerplate code
    2. creating nested structures
    3. assigning class/ids and custom attributes

[*_cheatsheet_*](https://docs.emmet.io/cheat-sheet/)

---
### **Difference between a Library and Framework?**
1. Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
2. A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.

**_Analogy_** : -

A library is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.

A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

**jQuery, React** => Libraries 

**Vue** => Framework

---
### **What is CDN? Why do we use it?**
a geographically distributed network of servers around the globe which work together to provide fast delivery of Internet content. 

this is done in order to maintain customer satisfaction, experience and company profits high.

A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos. The popularity of CDN services continues to grow, and today the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

#### Benefits : 
1. Improving website load times
2. Reducing bandwidth costs
3. Increasing content availability and redundancy 
4. Improving website security

A properly configured CDN may also help protect websites against some common malicious attacks, such as _Distributed Denial of Service (DDOS) attacks_.

[*CDN Links*](https://reactjs.org/docs/cdn-links.html#gatsby-focus-wrapper)

By including CDN Links for REACT and REACT_DOM, we get access to REACT GLOBAL VARIABLE

REACT-DOM : specific for web 

---

### **Why is React known as React?**

Because : -
_***Reactive updates are dead simple!***_

In Vanilla JS, we need to look at what data changed and imperatively make changes to the DOM to keep it up-to-date.

React takes a different approach. Whenever any component is initialized, the `render` method is called, and this generates a lightweight representation of what the DOM should look like. The markup contained in this representation is injected in the document. 

Whenever the data changes, the `render` method is called again.

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called **_reconciliation_**.

![virtualDOM](https://i2.wp.com/programmingwithmosh.com/wp-content/uploads/2018/11/lnrn_0201.png?ssl=1 "virtual dom in react")

---
### **What is crossorigin in script tag?**

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

`Access-Control-Allow-Origin: *` HTTP header. For a better error handling experience in React >= 16.

---
### **What is diference between React and ReactDOM**

React => a global variable for building of ui such as `React.createElement()`

ReactDOM => for rendering the components in the browser by injecting them inside the root of DOM, `root.render()`

---
### **What is difference between react.development.js and react.production.js files via CDN?**

react.development.js => only for development purposes not suitable for production

react.production.js => Minified and optimized production versions of React

---
### **What is async and defer? - see my Youtube video ;)**

[Async And Defer](https://www.youtube.com/watch?v=IrHmpdORLu8)

![concept](https://i.stack.imgur.com/pI1Wn.png "async vs defer")

---
### Nesting Using React In Coding Assignment
```
    const root = ReactDOM.createRoot(document.getElementById("root"));
    const name = React.createElement("h1", {id: "name"}, "Akshay Saini");
    const designation = React.createElement("h2", {id: "teacher"}, "Teacher");
    const profilePic = React.createElement("img", {src: "https://yt3.ggpht.com/ytc/AMLnZu-cSoO0e2Shro4sYkaKYCumlgllLCTYYNf7bk7G_g=s900-c-k-c0x00ffffff-no-rj"}, null);
    const work = React.createElement("p", {id: "work"}, "Creator of Namaste JS");
    const about = React.createElement("div", {id: "about"}, [profilePic, work]);
    const info = React.createElement("div", {id: "info"}, [designation, about]);
    const container = React.createElement("div", {id: "container"}, [name, info]);
    root.render(container);
```

![Output](output.png "codeOutput")
