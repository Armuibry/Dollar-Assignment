import React, { useState, useEffect } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './Slider.css'
const Slider = () => {
    const [image, setImage] = useState(0);

    const slides = [
        "https://st1.bgr.in/wp-content/uploads/2022/03/iQOO-Z6.jpg",
        "https://1.bp.blogspot.com/-JIVikHwkMjw/Xt-CDBOubLI/AAAAAAAAV8Q/9Vanw1ykBqMbGz_gos4Cw5PnTQDdTpXCwCLcBGAsYHQ/s1600/xiaomi-mi-10-series-5g.png",
        "https://www.vivoglobal.ph/wp-content/uploads/2020/08/transfer-phone-data-feature-image.jpg",
        "https://1.bp.blogspot.com/-pbDffAW9Ays/YbHJLuVnRPI/AAAAAAAAaFw/NGhGhgeL98UV3Cq5h5aSfhScE4GA8EuDgCNcBGAsYHQ/s900/mobail-banner-design_900.jpg",
        "https://trbahadurpur.com/wp-content/uploads/2022/01/saikrupa-graphics-74-scaled.jpg"
    ]

    useEffect(()=> {
        setTimeout(() => {
            if(image < slides.length-1){
                setImage(image + 1);
            }else if(image >= slides.length-1){
                setImage(0);
            }
        }, 3000);
    },[image])

    return (
        <div className='slider'>
            <div className="left" onClick={()=>{image === 0 ?setImage(slides.length-1):setImage(image - 1)}}><ArrowBackIosNewIcon style={{color:"#fff",fontSize:"3rem"}}/></div>
            <div className="img">
                <img src={slides[image]} alt="slide Images" />
            </div>
            <div className="right" onClick={()=> {image === slides.length-1 ?setImage(0):setImage(image+1)}}><ArrowForwardIosIcon style={{color:"#fff",fontSize:"3rem"}}/></div>
        </div>
    )
}

export default Slider