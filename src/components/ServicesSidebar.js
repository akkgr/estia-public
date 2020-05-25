import React from 'react'
import { Link } from 'react-router-dom'
import ete from '../layout/photos/ete.png'


export const ServicesSidebar = () => {
    return (
        <>
             <div className="col-md-3 col-sm-6 txtalign srctxt text-center ">
                        <div className="box">
                            <div className="box_left">
                                <span className="icon icon-primary icon-lg fa fa-calendar"></span>
                            </div>
                            <div className="box_cnt">
                                    <a className="link-primary" href="/services/koinoxrista" style={{color:"#ff4d4f"}}><h5>Έκδοση<br />Κοινοχρήστων</h5></a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_left">
                                <span className="icon icon-primary icon-lg fa fa-building-o"></span>
                            </div>
                            <div className="box_cnt">
                                <Link to={"/services/managebuilding"}> <h5 style={{color:"#ff4d4f"}}>Διαχειρίσεις<br />Κτιρίων</h5></Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_left">
                                <span className="icon icon-primary icon-lg fa fa-trash"></span>
                            </div>
                            <div className="box_cnt">
                                <Link to={"/services/cleaning"}> <h5 style={{color:"#ff4d4f"}}>Καθαρισμοί</h5></Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_left">
                                <span className="icon icon-primary icon-lg fa fa-fire-extinguisher"></span>
                            </div>
                            <div className="box_cnt">
                                <Link to={"/services/extinguisher"}> <h5 style={{color:"#ff4d4f"}}>Πυροσβεστήρες</h5></Link>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box_left">
                            <span className="icon icon-primary icon-lg fa fa-truck"></span>
                        </div>
                        <div className="box_cnt">
                                <Link to={"/services/heatingoil"}> <h5 style={{color:"#ff4d4f"}}>Πετρέλαιο <br /> θέρμανσης</h5></Link>

                        </div>
                     </div>
           
        
                        <div className="box">
                            <div className="box_left">
                                <span className="icon icon-primary icon-lg fa fa-sitemap"></span>
                            </div>
                            <div className="box_cnt">
                                <Link to={"/services/network"}> <h5 style={{color:"#ff4d4f"}}>Δίκτυο<br />Συνεργατών</h5></Link>
                            </div>
                        </div>
       
    
                    <div className="box">
                        <div className="box_left">
                            <span className="icon icon-primary icon-lg fa ">
                                <img src={ete} /></span>
                        </div>
                        <div className="box_cnt">
                                <a className="link-primary" href="/services/payment" style={{color:"#ff4d4f"}}><h5>Πληρωμή<br />Λογαριασμών</h5></a>
                        </div>
                    </div>
                    </div>

            
        </>
    )
}
