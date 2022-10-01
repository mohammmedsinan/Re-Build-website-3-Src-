import React, { Component } from 'react'
import first  from '../Img/first.jpg'
import seconed  from '../Img/seconed.jpg'
import thierd  from '../Img/thierd.jpg'
import forth  from '../Img/forth.jpg'


class FirstSection extends Component {
constructor(props) {
    super(props);
    this.state = {

        firstPerson:true,
        secondPerson:false,
        thierdPerson:false,
        forthPerson:false,


    }
}
render () {
const CheckIfHeOnTheImg = (e) => {
    if (this.state.firstPerson ===true) {
        return(
            <div className="div-of-clints">

                    <div className ="div-p-1">
                             <img src={first} className="img-of-clints img-of-clints1"/>
                             <h1 className="h1-of-clints">We were looking for a platform that was essentially a CRM for influencer management that also allowed us to aggregate our campaign analytics and access the insights we need to properly evaluate influencers. We spent more than six months researching and testing every platform out there and found Traackr fits exactly what we needed.</h1>

                    </div>
                <div className="flex">
                    <p className="p-of-clints">Chelsea Riggs:</p> <p className="p-of-clints-2">Brand President, amika</p>
                    </div>
                </div>
        )
    }else if (this.state.secondPerson ===true) {
        return(
            <div className="div-of-clints">
                <div className ="div-p-1">
                         <img src={seconed} className="img-of-clints img-of-clints2"/>
                         <h1 className="h1-of-clints">We chose Traackr to be the backbone of our influencer program because of its product completeness, unparalleled depth of data and global presence.</h1>
                </div>
                <div className="flex">
                <p className="p-of-clints">Santiago Garcia Solimei:</p> <p className="p-of-clints-2">Global Director of Social Media, <br />Meliá Hotels International</p>
                </div>
            </div>
        )
    }
    else if (this.state.thierdPerson ===true) {
        return(
            <div className="div-of-clints">
                <div className ="div-p-1">
                            <img src={thierd} className="img-of-clints img-of-clints3"/>
                            <h1 className="h1-of-clints">Traackr’s data quality and breadth of its database are unrivaled. It’s been essential in our work to find the perfect influencers for our clients and prospects – whether we are working on a complex proposal with the creation of custom KPIs or on the day-to-day influencer relationships.</h1>
                </div>
                <div className="flex">
                <p className="p-of-clints">Chelsea Riggs:</p> <p className="p-of-clints-2">Brand President, amika</p>
                </div>
            </div>
        )
    }
    else if (this.state.forthPerson ===true) {
        return(
            <div className="div-of-clints">
                <div className ="div-p-1">
                          <img src={forth} className="img-of-clints img-of-clints4"/>
                          <h1 className="h1-of-clints">We know that programs and content typically generate 2-4X greater return than if we were to run that same campaign without an influencer partnership.</h1>
                </div>
                <div className="flex">
                <p className="p-of-clints">Chelsea Riggs:</p> <p className="p-of-clints-2">Brand President, amika</p>
                </div>
            </div>
        )
    }
}



const op1 = () => {
    let img11 = document.getElementById('img-1-1');
    img11.classList.toggle("border");   
    let img12 = document.getElementById('img-1-2');
    img12.classList.remove("border");   
    let img13 = document.getElementById('img-1-3');
    img13.classList.remove("border");   
    let img14 = document.getElementById('img-1-4');
    img14.classList.remove("border");   
        this.setState({firstPerson:true})
        this.setState({secondPerson:false})
        this.setState({thierdPerson:false})
        this.setState({forthPerson:false})

}



const op2 = () => {
    let img11 = document.getElementById('img-1-1');
    img11.classList.remove("border");   

    let img12 = document.getElementById('img-1-2');
    img12.classList.toggle("border");   
    let img13 = document.getElementById('img-1-3');
    img13.classList.remove("border");   
    let img14 = document.getElementById('img-1-4');
    img14.classList.remove("border");   
    this.setState({firstPerson:false})
    this.setState({secondPerson:true})
    this.setState({thierdPerson:false})
    this.setState({forthPerson:false})
}


const op3 = () => {
    let img11 = document.getElementById('img-1-1');
    img11.classList.remove("border");   

    let img12 = document.getElementById('img-1-2');
    img12.classList.remove("border");   
    let img13 = document.getElementById('img-1-3');
    img13.classList.toggle("border");   
    let img14 = document.getElementById('img-1-4');
    img14.classList.remove("border");   

    this.setState({firstPerson:false})
    this.setState({secondPerson:false})
    this.setState({thierdPerson:true})
    this.setState({forthPerson:false})
}

const op4 = () => {
    let img11 = document.getElementById('img-1-1');
    img11.classList.remove("border");   

    let img12 = document.getElementById('img-1-2');
    img12.classList.remove("border");   
    let img13 = document.getElementById('img-1-3');
    img13.classList.remove("border");   
    let img14 = document.getElementById('img-1-4');
    img14.classList.toggle("border");   
    this.setState({firstPerson:false})
    this.setState({secondPerson:false})
    this.setState({thierdPerson:false})
    this.setState({forthPerson:true})

}

    return (
<div className="FirstSection">
<div className="countener-first">
<h1 className="h1-of-firstSection">Trusted by Leading Brands {`&`} Innovative Marketers</h1>
<div className="div-imges-1">


<img src={first} id="img-1-1"className="img-1 border" onClick={()=> {op1()}} />



<img src={seconed} className="img-1" id="img-1-2" onClick={()=> {op2()}} />



<img src={thierd} className="img-1" id="img-1-3" onClick={()=> {op3()}} />



<img src={forth} className="img-1" id="img-1-4" onClick={()=> {op4()}} />

</div>


</div>
{CheckIfHeOnTheImg()}
<button className="button-of-clints">Meet Our Customers</button>

</div>
    )
}
}
export default FirstSection