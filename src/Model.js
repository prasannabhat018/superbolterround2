import React from 'react'

class Model extends React.Component{
    render(){
        var x=this.props.src
        const styles={
            backgroundImage:"url("+x+")",
            backgroundColor:"#f2f2f2",
            height:"220px",
            width: "220px",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
            position: "relative"
        };
        return (
            <div style={styles}>
                <div className="bottomHomeCard" style={{backgroundColor:"white",width:"210px"}}>
                    <h1 className="bottom-text" style={{color:"gray"}} >Design {this.props.id} </h1>
                </div>
            </div>
        )
    }
}

export default Model