import React from 'react'

class Product extends React.Component{
    render(){
        const styles={
            height:"140px",
            width:"100px",
            backgroundColor:"#526275",
            borderRadius:"20px 0px 0px 20px"
        }
    return    (
    <div className="Product-Main">
            {this.props.obj.id==1 && <div className="home-image qwe" style={styles}></div>}
            {this.props.obj.id==2 && <div className="home-image asd" style={styles}></div>}
            {this.props.obj.id==3 && <div className="home-image zxc" style={styles}></div>}
                <div className="Product-Card">
                    <div>
                        <h3 style={{fontSize:"20px",fontWeight:"bold",textIndent:"10px"}}>{this.props.obj.name}</h3>
                        <h3 style={{fontSize:"20px" ,textAlign:"center",textIndent:"10px"}}>Rs{this.props.obj.price}</h3>
                    </div>
                    <div className="button-flex">
                        <div>
                            <button type="button" class="btn btn-primary btn-xs" style={{fontSize:"8px"}}>Add To Cart</button>
                        </div>
                    </div>
                </div> 
        </div>)
    }
}

export default Product