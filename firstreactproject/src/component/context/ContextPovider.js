import React, { createContext, useState } from "react";
import ChildOne from "./ChildOne";

export const GlobaslContext = createContext();

function ContextPovider() {
  const [isVisiable, setisVisible] = useState(true);
  return (
    <GlobaslContext.Provider value={{ isVisiable, setisVisible }}>
      <div>
        <div>
          <ChildOne />
        </div>
        {isVisiable && <div>Visible</div>}
      </div>
    </GlobaslContext.Provider>
  );
}

export default ContextPovider;
