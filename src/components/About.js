import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>
//         This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
//       </p>
//       <Profile name={"Akshay"} />
//       <ProfileClass name={"Akshay"} xyz={"pqr"}/>
//     </div>
//   );
// };

import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("Parent -> constructor");
  }

  componentDidMount() {
    // best place to make an api call
    // this.timer = setInterval(()=>{
    //   console.log("NAMASTE REACT OP!");
    // }, 1000);
    console.log("Parent -> componentDidMount");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("Component Will Unmount");
  }

  render() {
    console.log("Parent -> render");
    return (
      <div>
        <h1>About Us Page</h1>
        <p>
          This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
        </p>
        {/* <Profile name={"Akshay"} /> */}
        <ProfileClass name={"First Child"} xyz={"pqr"} />
        {/* <ProfileClass name={"Second Child"} xyz={"pqr"} /> */}
      </div>
    );
  }
}

export default About;


/* Parent Constructor 
    - Child1 Constructor
    - Child1 Render
    - Child2 Constructor
    - Child2 Render
    - Child1 ComponentDidMount
    - Child2 ComponentDidMount
  Parent ComponentDidMount
*/
