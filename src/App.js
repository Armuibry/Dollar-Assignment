import React,{useState} from "react";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import ShowItems from "./components/ShowItems";
import Slider from "./components/Slider";
import appContext from "./context/appContext";
import data from './data.json'
import SignIn from "./SignnIn-SignUp/SignIn";
import SignUp from "./SignnIn-SignUp/SignUp";

function App() {
  const [dropdown, setDropdown] = useState(false);
    const [cat , setCat] = useState(false);
    const [subCat , setSubCat] = useState(false);
    const [itemCat, setItemCat] = useState("");
    const [itemSubCat, setItemSubCat] = useState("");
  return ( 
    <appContext.Provider  value={{
      setDropdown:setDropdown,
      setCat:setCat,
      setSubCat:setSubCat,
      setItemCat:setItemCat,
      setItemSubCat:setItemSubCat,
      data:data,
      cat:cat,
      subCat:subCat,
      dropdown:dropdown,
      itemCat:itemCat,
      itemSubCat:itemSubCat
    }}>
      <div className="App">
        <NavBar />
        <Categories />
        <Slider />
        <ShowItems />
        <SignIn/>
        <SignUp/>

      </div>
    </appContext.Provider>
  );
}

export default App;
