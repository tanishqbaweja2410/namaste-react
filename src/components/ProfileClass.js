import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    // this.state = {
    //   count: 0,
    //   count2: 0,
    // };

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
        avatar_url: "Dummy URL",
      },
    };
    console.log("Child -> constructor " + this.props.name);
  }

  async componentDidMount() {
    console.log("Child -> componentDidMount " + this.props.name);
    // API Calls
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    // yes, we can destructure as well
    const { count, count2 } = this.state;
    console.log("Child -> render " + this.props.name);
    return (
      <div>
        <h1>ProfileClass Component</h1>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
        {/* <h2>count: {count}</h2> */}
        {/* <h2>count2: {count2}</h2> */}
        {/* <button
          onClick={() => {
            // this.state.count = 1; => Not Correct
            this.setState({
              count: 1,
            });
          }}
        >
          Count
        </button> */}
      </div>
    );
  }
}

export default ProfileClass;


/* Seeing Order of Lifecycle of Both Parent & Child
*  Parent Constructor
*  Parent Render
*  Child Constructor
*  Child Render
   // since child component did mount is async, therefore
*  Parent componentDidMount
*  Json Data
*  Child componentDidMount
*  Child Render // rerendering bcoz of state change
*/

/* Seeing Order of Lifecycle of Child Only
*  Child Constructor
*  Child Render
*  // DOM GETS UPDATED
*  // API Call is made
*  // the child is already mounted to the dom before making the api call
*  JSON Data is Logged into the Console
*  State is set
*  // Now due to setState(), UPDATING PHASE STARTS
*  Child Render // rerendering bcoz of state change
*  Child ComponentDidUpdate
*/


