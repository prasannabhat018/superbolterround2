import React from 'react'

class HomeModel extends React.Component{
    render(){
        return(
            <div>
                <div className="home-image">
                <div className="home-text">
                    <h1 className='fon'>DLF Westend Heights</h1>
                    <h3 className='fon1'>5BHK - 5865 sqft</h3>
                </div>
                <div className="bottomHomeCard">
                    <h1 className="bottom-text">My Office</h1>
                </div>
                </div>
                
                { !this.props.dso  &&  <button onClick={()=>this.props.handleClick(this.props.id)} type="button" class="btn btn-outline-danger">See {this.props.no} designs</button>}
                { this.props.dso  &&  <button onClick={()=>this.props.handleClick(this.props.id)} type="button" class="btn btn-outline-danger">Close</button>}
            </div>
        )
    }
}

export default HomeModel 