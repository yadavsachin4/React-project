/// App.js
import FirstComponent from "./component/FirstComponent";
import Secondcomponent from "./component/Secondcomponent";
import Parent from "./component/PropsAndCallback/Parent";
import ContextPovider from "./component/context/ContextPovider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./RouterComponents/Layout";
import PageOne from "./RouterComponents/PageOne";
import PageTwo from "./RouterComponents/PageTwo";

function App() {
  let count = 50;
  let object = {
    name: "John",
    age: 20,
  };
 
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route state={object} path="/firstcomponent" element={<PageOne />} />
          <Route state={object} path="/secondComponent" element={<PageTwo />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
