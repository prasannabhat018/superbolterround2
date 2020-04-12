import React from 'react'
import data from './data'
import Model from './Model'
import ProductList from './ProductList'

class Design extends React.Component{

    render(){
        const designComponents=data.map(d=><Model key={d.id} id={d.id} src={d.src}/>)
        return(
            <div>
                <div className="Design-buttons">
                    <div>
                        <button onClick={()=>this.props.handleClick1()} style={{marginLeft:"30px"}} type="button" class="btn btn-outline-dark">Close</button>
                    </div>
                    <div>    
                        <p style={{fontWeight:"bold",marginTop:"30px",fontSize:"30px"}}>Showing Designs For My House</p>
                    </div>
                </div>
                <div className="Design-flex">
                    {designComponents}
                </div>
                <div className="triangle-up"></div>
                <ProductList/>
            </div>
        )
    }
}

export default Design