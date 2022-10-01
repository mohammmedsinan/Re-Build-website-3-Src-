import React, { Component } from 'react'
import main  from '../Img/main.svg'

 class NavRes extends Component {
constructor (props) {
    super(props);
    this.state = {}
}

render () {

    return(
    
    <div className="NavRes">


        <div className="Nav-Bar-Pr">
            <div className="div-Nav-flex">
            <img src={main} alt="Img" className="logo li-ii"/>
            <h1 className="h1-p-p">X</h1>
            </div>

            
            <div className="Nav-Src">
                <p className="Nav-Ele">Product</p>
                <p className="Nav-Ele">The Traaker Defnder</p>
                <p className="Nav-Ele">Custumrs</p>
                <p className="Nav-Ele">About Us</p>
                <p className="Nav-Ele">Blog</p>
                <p className="Nav-Ele">Resourses</p>
            </div>


            <div className="Btn-Sec-Nav">
                <button className="btn-pr2">Talk To Us</button>
                <button className="btn-pr3">Log In</button>
            </div>

        </div>






        <div className="count-div">
            <nav className="nav-img1">
                <div>
                    <img src={main} alt="Img" className="logo li-ii ooo"/>
                    </div>
                    <div>
                        <h1 className="nan-click">sdad</h1>
                    </div>
            </nav>
    </div>
    </div>
    
    )
}
 }
 export default NavRes