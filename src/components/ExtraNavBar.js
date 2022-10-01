import React, { Component } from 'react'

class ExtraNavBar extends Component {
    constructor (props) {
        super(props);
        this.state ={}
    }

    render() {
        return (
        <div className="ExtraNavBar">
            <div className="pp">
                <div className="div-7-1">


                    <div className="div-7-2 ss">
                        <p className="p-7-1">SOULOTION</p>
                        <p className="p-7-2">For Brands</p>
                        <p className="p-7-2">For Agencies</p>
                    </div>

                        <div className="div-7-3 ss">
                        <p className="p-7-1">USE CASESES</p>
                        <p className="p-7-2">Influencer Discovery</p>
                        <p className="p-7-2">Influencer Vetting</p>
                        <p className="p-7-2">Brand Safety</p>
                        <p className="p-7-2">Campaign Management</p>

                    </div>

                        <div className="div-7-4 ss">
                        <p><br /></p>
                        <p className="p-7-2">Budget Optimization</p>
                        <p className="p-7-2">Program Management</p>
                        <p className="p-7-2">Market Benchmarking</p>
                        <p className="p-7-2">Relationship Management</p>

                    </div>

                </div>
            </div>
        </div>
        )
    }
}
export default ExtraNavBar;