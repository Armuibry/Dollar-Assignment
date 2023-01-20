import React, { useContext } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import appContext from '../context/appContext';

import './Categories.css';
import Dropdown from './Dropdown';
import DropdownMain from './DropdownMain';

function Categories() {

    const myContext = useContext(appContext);
    const { setCat, setDropdown, setSubCat, cat, dropdown, subCat, itemCat, itemSubCat, setItemSubCat } = myContext;

    const handleCatFunction = (e) => {
        setSubCat(true);
        setItemSubCat(itemCat[0].series.filter(item => item.title === e.target.innerHTML));
    }

    const handleSucFunction = () => {
        setCat(true);
    }
    return (
        <>
            <div className='categories' onClick={() => {
                setDropdown(false);
                setCat(false);
                setSubCat(false);
            }}>
                <div className='brand'>
                    <div className="cat"><img src="images/mi.jpg" alt="XIOMI" /></div>
                    <div className="cat"><img src="images/realme.png" alt="REALME" /></div>
                    <div className="cat"><img src="images/poco.png" alt="POCO" /></div>
                    <div className="cat"><img src="images/oppo.webp" alt="OPPO" /></div>
                    <div className="cat"><img src="images/vivo.jpg" alt="VIVO" /></div>
                    <div className="cat"><img src="images/iqoo.jpg" alt="IQOO" /></div>
                </div>
                <div className="menuDiv">
                    <div className="menu" onMouseOver={() => {
                        setDropdown(true);
                    }}>
                        <div>Select Phone</div> <ArrowDropDownIcon style={{ fontSize: "2.5rem" }} />
                    </div>
                    <div className='select'>
                        {
                            dropdown ? <div className="drop">
                                <DropdownMain setCat={setCat} setSubCat={setSubCat} setDropdown={setDropdown} />
                            </div> : ""
                        }
                        {
                            cat ? <Dropdown setSubCat={setSubCat} listItem={itemCat} handlehover={handleCatFunction} /> : ""
                        }


                        {
                            subCat ? <Dropdown setSubCat={setSubCat} listItem={itemSubCat} handlehover={handleSucFunction} /> : ""
                        }

                    </div>
                </div>


            </div>

        </>
    )
}

export default Categories