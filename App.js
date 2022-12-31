const heading1 = React.createElement("h1", 
    {
        id: "title",
    }, 
    "Heading1");
    const heading2 = React.createElement("h2", 
    {
        id: "title",
    }, 
    "Heading2");

    const container = React.createElement("div", 
    {
        id: "container",
    }, 
    [heading1, heading2]);

    // console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // passing a react element inside the root
    root.render(container);
    // heading will only be rendered, all other things will be replaced/overwritten by this