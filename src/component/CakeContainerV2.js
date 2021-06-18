import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function CakeContainerV2() {
  const numberOfCakes = useSelector(({ cake }) => cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of cakes: {numberOfCakes}</h3>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainerV2;
