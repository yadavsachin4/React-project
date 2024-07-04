
/// ChildTwo.js

import React from "react";

function ChildTwo(props) {
  console.log("object from props", props.propsObject);

  const handleSecondChange = () => {
    props.setCount(props.count - 5);
  };

  return (
    <div>
      <div>Child Two</div>

      <div>
        <button
          onClick={() => { 
            handleSecondChange();
          }}
          type="button"
        >
          Modify Second
        </button>
      </div>
    </div>
  );
}

export default ChildTwo;
