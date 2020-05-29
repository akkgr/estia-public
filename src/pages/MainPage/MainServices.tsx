import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClear , AiOutlineBug } from "react-icons/ai";
import {FaGasPump , FaFireExtinguisher , FaRegBuilding} from 'react-icons/fa'
import {GiTakeMyMoney} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {BsTools} from 'react-icons/bs'

export const MainServices = () => {
    return (
        <div>
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
        </div>
    )
}
