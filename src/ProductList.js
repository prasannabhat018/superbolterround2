import React from 'react'
import Product from './Product'
import productData from './productData'

class ProductList extends React.Component{
    render(){
        const productComponents=productData.map(product=><Product key={product.id} obj={product}/>)
        return(
            <div className="ProductList">
                <div className="Product-top">
                <br/>
                <h3>Showing Product For Design</h3>
                </div>
                <div className="Product-flex">
                    {productComponents}
                </div>
            </div>
        )
    }
}

export default ProductList