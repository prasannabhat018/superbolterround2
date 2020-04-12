import React from 'react'

class Navbar extends React.Component{
    render(){
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                <img src="/Images/original.png" width="250" height="60" alt=""/>
                </a>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="#">Design</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li>
                    <p class="nav-link" style={{color:'#002db3'}}>  your house will be ready in 4 Hrs  </p>
                    </li>
                    <li>
                    <a class="nav-link" href="#">  Playground  </a>
                    </li>
                    <li>
                    <a class="nav-link" href="#">  My Home  </a>
                    </li>
                    <li>
                    <img href="#" src="/Images/bell-notification.svg" width="50" height="50"/>
                    </li>
                    <img href="#" src="/Images/User.png" width="50" height="50"/>
                </ul>
            </nav>
        )
    }
}


export default Navbar;