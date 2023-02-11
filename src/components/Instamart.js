import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (<><button className="cursor-pointer underline" onClick={() => setIsVisible(false)}>Hide</button>
      <p>{description}</p></>) : 
      (<button className="cursor-pointer underline" onClick={() => setIsVisible(true)}>Show</button>)}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("team");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptas tenetur tempore officiis praesentium architecto eos inventore officia voluptate aliquid reprehenderit vero harum rerum earum quod totam sit facere cum. Consectetur obcaecati eligendi nulla vel, qui quidem minus, natus reiciendis molestiae, dicta iusto sunt. Explicabo, vel aut neque libero porro ipsum quia nisi modi fugiat ea velit sit beatae, officiis quae laborum fugit ipsam repellendus voluptatum nihil omnis mollitia quasi laboriosam nesciunt dolorum. Sunt doloremque expedita, nisi accusantium qui laboriosam dolorem necessitatibus iure id incidunt, error repellat beatae reprehenderit corrupti iusto voluptatum esse. Iste error voluptatem explicabo distinctio, atque vitae animi iure cumque corporis esse consequuntur saepe. Illum quis saepe at quae voluptate accusantium veniam. Nam, alias adipisci quas debitis aperiam ad eum, facere voluptatem odit quibusdam doloribus earum soluta!"
        }
        isVisible={visibleSection === "about"}
        setIsVisible={(flag) => flag ? setIsVisibleSection("about") : setIsVisibleSection("")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptas tenetur tempore officiis praesentium architecto eos inventore officia voluptate aliquid reprehenderit vero harum rerum earum quod totam sit facere cum. Consectetur obcaecati eligendi nulla vel, qui quidem minus, natus reiciendis molestiae, dicta iusto sunt. Explicabo, vel aut neque libero porro ipsum quia nisi modi fugiat ea velit sit beatae, officiis quae laborum fugit ipsam repellendus voluptatum nihil omnis mollitia quasi laboriosam nesciunt dolorum. Sunt doloremque expedita, nisi accusantium qui laboriosam dolorem necessitatibus iure id incidunt, error repellat beatae reprehenderit corrupti iusto voluptatum esse. Iste error voluptatem explicabo distinctio, atque vitae animi iure cumque corporis esse consequuntur saepe. Illum quis saepe at quae voluptate accusantium veniam. Nam, alias adipisci quas debitis aperiam ad eum, facere voluptatem odit quibusdam doloribus earum soluta!"
        }
        isVisible={visibleSection === "team"}
        setIsVisible={(flag) => flag ? setIsVisibleSection("team") : setIsVisibleSection("")}
      />
      <Section
        title={"Careers  Instamart"}
        description={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, voluptas tenetur tempore officiis praesentium architecto eos inventore officia voluptate aliquid reprehenderit vero harum rerum earum quod totam sit facere cum. Consectetur obcaecati eligendi nulla vel, qui quidem minus, natus reiciendis molestiae, dicta iusto sunt. Explicabo, vel aut neque libero porro ipsum quia nisi modi fugiat ea velit sit beatae, officiis quae laborum fugit ipsam repellendus voluptatum nihil omnis mollitia quasi laboriosam nesciunt dolorum. Sunt doloremque expedita, nisi accusantium qui laboriosam dolorem necessitatibus iure id incidunt, error repellat beatae reprehenderit corrupti iusto voluptatum esse. Iste error voluptatem explicabo distinctio, atque vitae animi iure cumque corporis esse consequuntur saepe. Illum quis saepe at quae voluptate accusantium veniam. Nam, alias adipisci quas debitis aperiam ad eum, facere voluptatem odit quibusdam doloribus earum soluta!"
        }
        isVisible={visibleSection === "careers"}
        setIsVisible={(flag) => flag ? setIsVisibleSection("careers") : setIsVisibleSection("")}
      />
    </div>
  );
};

export default Instamart;
