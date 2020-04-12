import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import HomeModel from './HomeModel'
import Design from './Design'



class App extends Component {
  constructor(){
    super()
    this.state={
      designOpen1:false,
      designOpen2:false,
    }
    this.handleClick=this.handleClick.bind(this)
    this.handleClick1=this.handleClick1.bind(this)

  }


  handleClick1(){
    this.setState(s=>{
      return(
        {designOpen1:false,
         designOpen2:false
        })})
  }

  handleClick(id){
    this.setState(s=>{
      if(id==1){
        return(
          {
            designOpen1:!s.designOpen1,
            designOpen2:false,
          }
        )
      }
      else{
        return(
          {
            designOpen1:false,
            designOpen2:!s.designOpen2,
          }
        )
      }
    }
    )
  }




  render() {
    return (
      <div className="App">
        
        <Navbar/>
        <div className="header">
        <div><h1 style={{fontSize:"60px",fontFamily:"Geneva",textAlign:"left",marginLeft:"70px"}}>My Home  </h1></div>
        <div><h3 style={{color:"gray",fontSize:"20px",textAlign:"left"}}>      (2 Projects)</h3></div>
        </div>
        <div className="home-model-flex">

             <HomeModel key={1} id={1} dso={this.state.designOpen1} no={3} handleClick={this.handleClick}/>
             <HomeModel key={2} id={2} dso={this.state.designOpen2} no={1} handleClick={this.handleClick}/>
        </div>
        
        { (this.state.designOpen1||this.state.designOpen2) && <Design key={1} handleClick1={this.handleClick1}/> }
        
      </div>
    )
  }
}

export default App;
