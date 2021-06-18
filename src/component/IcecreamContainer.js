import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

function IcecreamContainer() {
  const numberOfIcecreams = useSelector(
    ({ icecream }) => icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Number of Icecreams: {numberOfIcecreams}</h3>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  );
}

export default IcecreamContainer;
