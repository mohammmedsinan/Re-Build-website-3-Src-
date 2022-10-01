import React, { Component } from 'react'
import main  from '../Img/main.svg'
import ExtraNavBar from './ExtraNavBar';
import NavRes from './NavRes'
class NavBar extends Component {
  
constructor(props){
super(props);
this.state ={
        show:false,
        slideBarButton:false,
}
}

        render(){
         const op = () => {
                window.addEventListener('scroll' ,  () => {
                        let header = document.getElementById("nav-div")
                        header.classList.toggle("oo",window.scrollY);  }) 
         }


         
    return(
        <div className="NavBar">

        <header className="headerOfNav"> 
                <div className="maindiv">
                        <div className="nav-div" id="nav-div">
                                <nav className="nav">
                                           <img src={main} alt="Img" className="logo li-ii"/>    
                                                  <div className="ul-div">
                                                <ul className="ul-nav">
                                                        <li className="li-ii i i3"><a href="#1"><ExtraNavBar />Proudect</a></li>
                                                        <li className="li-ii i"><a href="#2">Why trucker</a></li>
                                                        <li className="li-ii i"><a href="#3">Blog</a></li>
                                                        <li className="li-ii i"><a href="#4">resouces</a></li>
                                             <div className="div-ml">
                                            
                                        </div>
                                                </ul>
                                         </div>
                                         <div className="div-outsider">
                                                                 <li><a href="#5" className="out-sider">Login</a></li>
                                                                 <li><a href="#6" className="out-sider talk-to-us">Talk To us</a></li>
                                              </div>
                                                <div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="ham-m bi bi-list" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                                        </svg>
                                                </div>
                                </nav>
                        </div>
                </div>
        </header>




<div className="h1-div">    
     <h1 className="h1-style">We Power the Largest Influencer Programs  in the World</h1>
    <h6 className="h6-style">Traackr is the system of record for data-driven influencer<br /> marketing that marketers use to invest in the right <br /> strategies, streamline campaigns, and scale programs.</h6>
    <div className="button-div" onMouseOver={()=> {this.setState({show:true})}} onMouseLeave={()=> {this.setState({show:false})}}>
  

    <button className="Discover" >Discover Tracker 
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-arrow-down-square d" viewBox="1 0 16 17">
    <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg>
    </button>

    {this.state.show ?  
    <div>
    <button className="Discover1" onMouseOver={()=>  this.setState({show:true}) ,console.log("fdfjndsfjlnds") }>Discover Tracker</button>
    <button className="Discover1">Discover Tracker</button>
    </div>
     :null}
      </div>{op()} </div>




    





        </div>
    );

}
}
export default NavBar;