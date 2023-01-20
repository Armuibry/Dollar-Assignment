import React from 'react'
import ProductCard from './ProductCard'
import ProductRow from './ProductRow'

const ShowItems = () => {
    return (
        <>
            <div className="show">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="show">
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </div>
            <div className="show">
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </div>
        </>

    )
}

// const mystyle = {
//     display:"flex",
//     flexDirection:"row",
//     justifyContent:"center",
//     width:"100%",
//     alignItems:"center",
//     overflowX:"auto"
// }

export default ShowItems