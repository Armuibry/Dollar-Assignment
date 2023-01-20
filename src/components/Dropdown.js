import React from 'react'
import './Dropdown.css'


function Dropdown({listItem,handlehover}) {

  return (
    <div className='dropdown' >
        <ul>
          {
            listItem[0].series.map((item, index) => {
              return <li key={index} onMouseOver={(e)=> handlehover(e)}>{item.title}</li>
            })
          }
        </ul>
    </div>
  )
}

export default Dropdown