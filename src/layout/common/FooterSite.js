import React from 'react'

export const FooterSite = () => {
    return (
        <div>
            <section className="well-xs bg-img-1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 text-md-center">
                            <div className="brand">
                                <div className="brand__logo">
                                    <img src="/Images/city_services_logo.png" alt="City Services Logo" />
                                </div>
                                <div className="brand__cnt">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-12">
                                    <span className="icon icon-sm fa-comment"></span>
                                    <hr>
                                    <ul className="list">
                                        <a href="/tos">Όροι Χρήσης</a>
                                    </ul>
                                    </hr>
                                </div>
                            </div>
                            <nav className="nav">
                                <ul>
                                    <li>
                                        <a href="/">Αρχική</a>
                                    </li>
                                    <li>
                                        <a href="/aboutus">Εταιρεία</a>
                                    </li>
                                    <li>
                                        <a href="/services">Υπηρεσίες</a>
                                    </li>
                                    <li>
                                        <a href="/ekdosi">Έκδοση</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Επικοινωνία</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-md-offset-1">
                            <span className="icon icon-sm fa-envelope"></span>
                            <hr>
                            <address className="contact-info">
                                <div className="sbold">
                                    Νικ. Αρώνη 34<br/>
                                    16231, Βύρωνας<br/>
                                </div>
                                <dl>
                                    <dt>Τηλέφωνο</dt>
                                    <dd><a href="callto:+302107664677">+30 210 76 64 677</a></dd>
                                </dl>
                                <dl>
                                    <dt>Τηλέφωνο</dt>
                                    <dd><a href="callto:+302107664677">+30 210 76 64 677</a></dd>
                                </dl>
                                <dl>
                                    <dt>E-mail</dt>
                                    <dd><a href="mailto:e-info@cityservices.gr">e-info@cityservices.gr</a></dd>
                                </dl>
                                
                            </address>
                            </hr>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-secondary-3">
                <div className="container">
                    <div className="copyright">
                        City Services © <span id="copyright-year">2016</span>
                    </div>
                    Developed by <a rel="nofollow" href="http://www.softdesign.gr/" target="_blank" className="sdlink">Soft Design Ltd.</a>
                </div>
            </section>
        </div>
    )
}
