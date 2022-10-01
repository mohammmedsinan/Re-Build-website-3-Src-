import React, { Component } from 'react'
import i1 from '../Img/logo-1'
import i2 from '../Img/logo-2.png'
import i3 from '../Img/logo-3.png'
import i4 from '../Img/logo-4.png'

class ThirdSection extends Component {
constructor (props) {
    super(props);
    this.state ={}
}
render () {

    return(
    <div className="ThirdSection">
                    <h1 className="h1-3-1">Traackr in the Press</h1>

        <div className="The-Countener-Of-ThirdSection">
            <div id="Countener-Of-Div">
                <div className="div-3-1">
                    <img src={i1} className="i-1-1"/>
                    <div className="Countener-P">
                    <p className="p-3-1">December 16, 2020</p>
                    <p className="p-3-2">The top 27 software companies serving the public relations industry</p>
                    <p className="p-3-3">Business Insider</p>
                    </div>
                </div>
                

                <div className="div-3-1">
                    <div id="dev-img-3-2"></div>
                    <img src={i1} className="i-1-1"/>

                    <div className="Countener-P">
                    <p className="p-3-1">December 14, 2020</p>
                    <p className="p-3-2">IN 2020, GENERATION Z WAS DOING IT FOR THEMSELVES</p>
                    <p className="p-3-3">Fashionista</p>
                    </div>
                </div>

                <div className="div-3-1">
                    <div id="dev-img-3-3"></div>
                    <img src={i1} className="i-1-1"/>

                    <div className="Countener-P">
                    <p className="p-3-1">November 30, 2020</p>
                    <p className="p-3-2">Influencing the Masses with Traackr’s CEO Pierre-Loic Assayag</p>
                    <p className="p-3-3">Marketing Trends</p>
                    </div>
                </div>

                <div className="div-3-1">
                    <div id="dev-img-3-4"></div>
                    <img src={i1} className="i-1-1"/>

                    <div className="Countener-P">
                    <p className="p-3-1">November 27, 2020</p>
                    <p className="p-3-2">Brands Should Pivot to Nano-Influencers, New Data Suggests</p>
                    <p className="p-3-3">Stylus</p>
                    </div>
                </div>

            </div>
            <button className="button-of-clints">See Who’s Talking About Us</button>

        </div>
    </div>)
}

}

export default ThirdSection;
