import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";

const CakeContainer = ({ numOfCakes, buy }) => {
  console.log("Cake container called");
  return (
    <div>
      <h3>Number of cakes: {numOfCakes}</h3>
      <button onClick={buy}>Buy Cake</button>
    </div>
  );
};

// This can be called as selector and in different files.
const mapStateToProps = ({ cake }) => {
  return {
    numOfCakes: cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buy: () => dispatch(buyCake()),
  };
};

// connect the components to the function
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
