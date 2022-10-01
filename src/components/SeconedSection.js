import React from 'react'
import f1 from "../Img/imgOfwallpaper1.png"
import f2 from "../Img/imgOfwallpaper2.png"
import f3 from "../Img/imgOfwallpaper3.png"
import f4 from "../Img/imgOfwallpaper4.png"


const SeconedSection = () => {
    return (
        <div className="SeconedSection">
                <div className="con-div-sec f f1">
                    <div className="div-co-p">
                        <p className="Header-p">UNRIVALED INFLUENCER DISCOVERY</p>
                        <h1 className="font-big">Access the Largest Global Influencer Data Set</h1>
                        <p className="des-p">Traackr provides rich insights for more than 6M vetted profiles including audience demographics, brand affinity, fraud detection, and historical performance indicators.</p>
                        <p className="point-p">
                            Search bios, captions, and content on 13 social platforms<br />
                            Discover influencers in 50 countries and 26 languages<br />
                            Identify top performing influencers across all tiers<br />
                            Filter by 22 audience and influencer criteria
                        </p>
                    </div>
                    <img src={f1} className="img-s-2"/>
                </div> 


                <div className="con-div-sec f f2">
                    <div className="div-co-p">
                        <p className="Header-p">STREAMLINED WORKFLOWS</p>
                        <h1 className="font-big">Intelligence {`&`} Tools to Manage Campaigns</h1>
                        <p className="des-p">Run impactful campaigns with customizable workflows and influencer insights for all types of activations including organic advocacy, events, product gifting, and paid partnerships.</p>
                        <p className="point-p">
                        Simplify workflows for all types of campaigns<br />
                        Manage and track communications in one place<br />
                        Reduce time spent on manual work<br />
                        Optimize budgets with our predictive calculator

                        </p>
                    </div>
                    <img src={f2} className="img-s-2"/>
                </div> 

                <div className="con-div-sec f f3">
                    <div className="div-co-p">
                        <p className="Header-p">POWERFUL PERFORMANCE INSIGHTS</p>
                        <h1 className="font-big">Invest Your Budget Where It Drives Results</h1>
                        <p className="des-p">Report on influencer, campaign, and program resultsTrack the return on your investmentsUse competitive intelligence to shape your strategyBenchmark your brand's performance in a given market</p>
                        <p className="point-p">
                        Demonstrate impact and optimize influencer investments<br />
                        with actionable performance reporting. Traackr provides<br />
                        investment insights at the influencer, campaign, program,<br />
                        and market level.
                        </p>
                    </div>
                    <img src={f3} className="img-s-2"/>
                </div> 
                
                <div className="con-div-sec f f4">
                    <div className="div-co-p">
                        <p className="Header-p">ENTERPRISE-GRADE SCALABILITY</p>
                        <h1 className="font-big">Built to Scale with Global Organizations</h1>
                        <p className="des-p">Standardize influencer management across brand, brand affinity, portfolios and regions. We provide global teams with the  technology and expertise to manage large-scale programs.</p>
                        <p className="point-p">
                        Manage complex programs spanning large brand portfolios<br />
                        Unite regional teams with one system of record<br />
                        Access world-class customer support and strategy services
                        </p>
                    </div>
                    <img src={f4} className="img-s-2"/>
                </div> 
        </div>
    )
}

export default SeconedSection