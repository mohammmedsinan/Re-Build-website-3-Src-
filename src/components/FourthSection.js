import React, { Component } from 'react'
import img41 from '../Img/img-4-1.jpg'
import img42 from '../Img/img-4-2.jpg'
import img43 from '../Img/img-4-3.jpg'

const FourthSection =() => {

   return (
      <div className="FourthSection">
         <div className="div-p-i">
              <h1 className="header-4">Customer Stories</h1>
              <p className="sm-header">More than twenty of the top global advertisers and hundreds of emerging brands and agencies depend on Traackr everyday to make smarter influencer marketing decisions.</p>
            </div>
            <div className="class-main">

                        
          

               <div className="cou-main">
                  <div className="main-i">
                  <a href="#" className="ror">
                     <div className="card-i">
                       <img src={img42} className="main-im"/>
                     </div>
                     </a>
                  </div>
                     <div className="div-p-i">
                        <h1 className="h1-i">Revlon x Wonder Woman 1984</h1>
                           <p className="p-i">Michelin utilized Traackr to transform its early influencer marketing efforts into a streamlined, high-performing machine.</p>
                     </div>
               </div>

               
               <div className="cou-main">
                  <div className="main-i">
                  <a href="#" className="ror">
                     <div className="card-i">
                       <img src={img43} className="main-im"/>
                     </div>
                     </a>
                  </div>
                     <div className="div-p-i">
                        <h1 className="h1-i">Revlon x Wonder Woman 1984</h1>
                           <p className="p-i">Learn how Revlon delivered extraordinary results for its collection with the support of Traackr.</p>
                     </div>
               </div>

               <div className="cou-main">
                  <div className="main-i">
                     <a href="#" className="ror">
                     <div className="card-i">
                       <img src={img41} className="main-im"/>
                     </div>
                     </a>
                  </div>
                     <div className="div-p-i">
                        <h1 className="h1-i">Revlon x Wonder Woman 1984</h1>
                           <p className="p-i">Explore how Michelin used Traackr to successfully launch a brand awareness campaign with influencers despite COVID-19 roadblocks.</p>
                     </div>
               </div>

            </div>
            <button className="button-of-clints">Click Here</button>
      </div>
   )
}
export default FourthSection;