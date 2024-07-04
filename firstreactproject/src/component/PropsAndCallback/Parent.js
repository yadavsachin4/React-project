
/// Parent.js

import React from "react";
import Child from "./Child";
import ChildTwo from "./ChildTwo";

function Parent(props) {
  let initialState = props.count;
  const [count, setCount] = React.useState(initialState);

  let object = {
    name: "John",
    age: 20,
  };

  let objectTwo = {
    name: "Smith",
    age: 20,
  };

  return (
    <div className="">
      <div>Parent</div>
      <div>{count}</div>
      <div>
        <Child object={object} count={count} setCount={setCount} />
      </div>
      <div>
        <ChildTwo count={count} setCount={setCount} propsObject={objectTwo} />
      </div>
    </div>
  );
}

export default Parent;
