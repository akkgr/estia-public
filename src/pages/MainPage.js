import React from "react"
import { Link } from 'react-router-dom'
import logo from '../layout/photos/city_services_logo.png'
import { AiOutlineClear , AiOutlineBug , AiOutlinePhone , AiOutlineMail} from "react-icons/ai";
import {FaGasPump , FaFireExtinguisher , FaRegBuilding, FaAddressBook} from 'react-icons/fa'
import {GiTakeMyMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {BsTools} from 'react-icons/bs'
function MainPage() {
    return (
        <div style={{height: '100%' }}>
            <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                    <div className="col-lg-10 align-self-end">
                        <h1 className=" font-weight-bold text-white" >ΕΣΤΙΑ City Services</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <p className=" font-weight-light mb-5" style={{color:"white"}}>Με εμπειρία πάνω από 30 χρόνια η ΕΣΤΙΑ City Services πρωτοπορεί με τις υπηρεσίες της και τον επαγγελματισμό της. Παρέχει μια σειρά από υπηρεσίες για τα κτίρια που καλύπτουν κάθε ανάγκη. Το έμπειρο προσωπικό της είναι καθημερινά δίπλα στους πελάτες για να εξυπηρετεί και να δίνει λύσεις σε κάθε τους πρόβλημα.</p>
                        <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Προσφορα</a>
                    </div>
                </div>
            </div>
        </header>
            <div className="container-fluid text-center well-xs well-sm-inset-1 mmedia" >
                <br />
            
                <br/>
                    <div className="container-fluid well-xs well-sm-inset-1 mmedia" >
                        <div className="row">
                            <div className="col-sm-6">
                                <img src={logo} alt="City Services Logo" style={{height:'100%'}}/>
                            </div>
                            <div className="col-sm-6">
                                <br/>
                                <div className="iframeContainerHome ">
                                    <iframe style={{width:"600", height:"400"}} title="yt" src="https://www.youtube.com/embed/2vaMo1BOWsc?loop=1&playlist=2vaMo1BOWsc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>  
                <br />
                <br/>
                <hr style={{border: '0' ,borderTop: '1px solid #f4623a'}}/> 
                <br/>
                <br />
                <div id="portfolio">
            <div className="container-fluid p-0">
                <h3>Οι Υπηρεσίες μας</h3>
                <hr className="divider my-4" />
                <br />
                <div className="row slideanim">
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/1.jpg"> 
                            <GoChecklist style={{color:"#faad14"}} size="100"/>
                            <Link to={"/services/koinoxrista"}>
                            <div className="portfolio-box-caption">
                                <div className="project-name">Έκδοση Κοινοχρήστων</div>
                            </div>
                            </Link></a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg"
                            ><AiOutlineBug  style={{color:"#a0d911"}} size="100"/>
                            <Link to={"/services/disinfection"}> 
                            <div className="portfolio-box-caption">
                                <div className="project-name">Απολυμάνσεις</div>
                            </div>
                            </Link></a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg">
                            <FaRegBuilding  style={{color:"#13c2c2"}} size="100"/>
                            <Link to={"/services/managebuilding"}>
                                <div className="portfolio-box-caption">
                                <div className="project-name">Διαχειρίσεις Κτιρίων</div>
                            </div></Link></a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg"
                            ><AiOutlineClear style={{color:"#eb2f96"}} size="100"/>
                            <Link to={"/services/cleaning"}> <div className="portfolio-box-caption">
                                <div className="project-name">Καθαρισμοί</div>
                            </div>
                            </Link></a>
                    </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="row slideanim">
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"
                            ><FaFireExtinguisher style={{color:"#fa541c"}} size="100"/>
                            <Link to={"/services/extinguisher"}>
                            <div className="portfolio-box-caption">
                                <div className="project-name">Πυροσβεστήρες</div>
                            </div></Link></a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"
                            ><FaGasPump style={{color:"#52c41a"}} size="100"/>
                            <Link to={"/services/heatingoil"}>
                            <div className="portfolio-box-caption">
                                <div className="project-name">Πετρέλαιο θέρμανσης</div>
                            </div></Link></a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg"
                            ><BsTools style={{color:"#40a9ff"}} size="100"/>
                            <Link to={"/services/network"}>
                            <div className="portfolio-box-caption">
                                <div className="project-name">Δίκτυα συνεργατών</div>
                            </div></Link></a>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg">
                            <GiTakeMyMoney style={{color:"#722ed1"}} size="100"/>
                            <Link to={"/services/heatingoil"}>
                            <div className="portfolio-box-caption p-3">
                                <div className="project-name">Πληρωμή λογαριασμών</div>
                            </div></Link></a>
                    </div>
                </div>
            </div>
        </div>

                <hr style={{border: '0' ,borderTop: '1px solid #f4623a'}}/> 
                <br />
                <div className="container-fluid well-xs well-sm-inset-1" >

                    <h3>Επικοινωνήστε τώρα μαζί μας</h3>  
                    <hr className="divider my-4" />
                    <br /> 
                    <div className="row d-flex justify-content-center">
                        
                        <div className="col-sm-6 ">
                            <div className="row">
                                <div className="col-sm-4">
                                    <AiOutlinePhone style={{color:"#f4623a"}} size="75"/>
                                    <br />
                                    <p>210 76 64 676<br/>210 76 64 677</p>
                                </div>
                                <div className="col-sm-4">
                                    <FaAddressBook style={{color:"#f4623a"}} size="75"/>
                                    <br />
                                    <p>Νικ. Αρώνη 34<br/>16231, Βύρωνας</p>
                                </div>
                                <div className="col-sm-4">
                                    <AiOutlineMail style={{color:"#f4623a"}} size="75"/>
                                    <br />
                                    <p> e-info@cityservices.gr</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="row">
                            <div className="col">
                                <div className="row">
                                    <div className="col-sm-6 form-group">
                                     <input className="form-control" id="name" name="name" placeholder="Name" type="text" required />
                                    </div>
                                    <div className="col-sm-6 form-group">
                                    <input className="form-control" id="email" name="email" placeholder="Email" type="email" required/>
                                    </div>
                                </div>
                                <textarea className="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br/>
                                <div className="row">
                                    <div className="col-sm-12 form-group">
                                    <button className="btn btn-primary pull-right" type="submit">Αποστολή</button>
                                    </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
       
    )
}

export default MainPage