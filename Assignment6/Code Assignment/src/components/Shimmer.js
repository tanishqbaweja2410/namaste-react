const Shimmer = () => {
  return (
    <div class="cardListShimmer">
      {...Array(10).fill(
        <div class="cardShimmer is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shimmer;
