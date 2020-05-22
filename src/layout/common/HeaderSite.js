import React from 'react'
import logo from '../photos/city_services_logo.png'

export const HeaderSite = () => {
    return (
        <div>
            <div className="well-xs text-md-center row justify-content-between">
                    <div className="brand col">
                        <img src={logo} alt="City Services Logo" />
                    </div>
                    <div className="contact-info col" style={{color: "#373833"}}>
                        <div className="row justify-content-between">
                            <div className="box col">
                            <div className="box_left">
                                <span className="icon fa-phone"></span>
                            </div>
                            <div className="box_cnt">
                                <dl>
                                    <dt>Τηλέφωνο</dt>
                                    <dd><a href="callto:+302107664676">+30 210 76 64 676</a><br /><a href="callto:+302107664677">+30 210 76 64 677</a></dd>
                                </dl>
                            </div>
                        </div>
                        <div className="box col">
                            <div className="box_left">
                                <span className="icon fa-map-marker"></span>
                            </div>
                            <div className="box_cnt">
                                <dl>
                                    <dt>Διεύθυνση</dt>
                                    <dd>Νικ. Αρώνη 34<br/>16231, Βύρωνας</dd>
                                </dl>
                            </div>
                        </div>
                        <div className="box offer csbut col">
                            <div className="box_cnt">
                                <a className="modal-link btn btn-default" data-modal="" data-target="#myModal" data-toggle="modal" href="/Offer">ΠΡΟΣΦΟΡΑ</a>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
    )
}
