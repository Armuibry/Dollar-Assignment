import React,{useContext} from 'react'
import data from '../data.json';
import './Dropdown.css'
import appContext from '../context/appContext';

function DropdownMain({setCat,setSubCat, setDropdown}) {
  const myContext = useContext(appContext)
  const {setItemCat,itemCat,data} = myContext;


    const handleDropdown = (e) => {
        // const value = e.target.innerHTML;
        setItemCat(data.filter(item => item.title === e.target.innerHTML ));
        console.log(itemCat);
        setCat(true);
        setSubCat(false);
    }

  return (
    <div className='dropdown'>

        <ul>
          {
            data.map((item,index) => {
              return <li key={index} onMouseOver={handleDropdown}>{item.title}</li>
            })
          }
        </ul>
    </div>
  )
}

export default DropdownMain