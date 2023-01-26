const Shimmer = () => {
  return (
    // <div className="restaurantList">
    //   {...Array(10).fill(
    //     <div className="shimmer-card"></div>
    //   )}
    // </div>
    <div className="restaurantList">
    {Array(10).fill("").map((e, index) => <div key={index} className="shimmer-card"></div>)}
    </div>
  );
};

export default Shimmer;
