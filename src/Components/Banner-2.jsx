import React from "react";
import { Container } from "react-bootstrap";
import "./Banner-2.css";
import Nav from "react-bootstrap/Nav";
import doctorBanner from "../Components/images-2/img-3.jpg";
import call from "../Components/images-4/call.png";
import software from "../Components/images-4/image_24.jpg";
import spark from "../Components/images-4/image_22.jpg";
import Virtual from "../Components/images-4/image_27.jpg";
import Web from "../Components/images-4/image_26.jpg";
import joseph from "../Components/images-4/joseph.png";
import chazhikattu from "../Components/images-4/chazhikattu.png";
import emc from "../Components/images-4/emc.png";
import mgdm from "../Components/images-4/mgdm.jpg";
import mitera from "../Components/images-4/mitera.jpg";
import mosc from "../Components/images-4/mosc.png";
import smita from "../Components/images-4/smita.png";
import providence from "../Components/images-4/providance.jpg";
import samaritan from "../Components/images-4/samaritan.png"; 
import global from "../Components/images-4/logoarab.png";
import logo from "../Components/images/logo1.png";
import facebook from "../Components/images-4/facebook.png";
import instagram from "../Components/images-4/instagram.png";
import linkedin from "../Components/images-4/linkedin.png";
import iso1 from "../Components/images/MEA2.jpg";
import iso2 from "../Components/images/IS3.jpg";
import whatsapp from "../Components/images-2/whatsapp.png";

function BannerTwo() {
  return (
    <div className="main-container pt-4">
      <section>
        <div className="child-container">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="listPara">
                  <h1>About Camerinfolks</h1>
                  <h5>Why We are here !!</h5>
                  <div className="divider m-auto"></div>
                  <div className="split pt-4">
                    <p>
                      Camerinfolks Software is a leading HIS and Clinical
                      Information Software company. Camerinfolks has fully
                      engineered and developed a Patient-centric comprehensive &
                      integrated Healthcare delivery Platform, Life HIS with a
                      primary objective to enable healthcare providers to
                      deliver required services to care recipients by
                      implementing best-in-class administrative and clinical
                      practices, processes, and control that help in running the
                      hospital profitably. Our expertise and experience help our
                      partners with healthcare performance management, payer and
                      provider benchmarking, health research and analysis,
                      public health surveillance, and management decision
                      support tools.
                    </p>
                    <p>
                      We are a team of highly experienced and innovative
                      software experts keeping close tabs on the market to find
                      custom made software solutions for your everyday business
                      problems. Through the use of innovative database
                      technology and a rapid deployment integration platform, we
                      can help you increase the business value of your existing
                      systems and data. Our range of solutions together forms a
                      comprehensive health management ecosystem that focuses on:
                      • Providing quality healthcare at lower costs.
                    </p>
                    <ul className="list">
                      <li>
                        • LIFE HIS's single-stack technology eliminates the need
                        for multiple tools, significantly reducing technology
                        and resource costs
                      </li>
                      <li>• Simplifying patient-physician interactions</li>
                      <li>
                        • Fully integrated healthcare ecosystemwith
                        interoperable module solutions – enhance revenue, lower
                        costs
                      </li>
                      <li>
                        • Utilizing advanced analytics and metrics to track the
                        efficacy and outcomes of medical innovations
                      </li>
                      <li>
                        • Applying innovative healthcare technologies, including
                        social media analytics and secure mobile platforms/data
                        collections
                      </li>
                    </ul>
                    <Nav.Link
                      style={{ textAlign: "left" }}
                      className="ReadmoreBtn"
                      href="#"
                    >
                      Readmore...
                    </Nav.Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        {/* </Container> */}
      </section>
      <section>
        <div className="letter-body pt-5">
          <Container>
            <div className="row">
              <div className="col-lg-6 ">
                <div className="img-section ">
                  <img src={doctorBanner} alt="" />
                </div>
                <div className="emergency ml-aut">
                  <img src={call} alt="" />
                  <span>7736421092</span>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="letter-section">
                  <div
                    className="appoinment-wrap "
                    style={{ textAlign: "left" }}
                  >
                    <h2>Book Demo</h2>
                    <p>
                      For LIFE HIS Detailed Demo, Please Fill follow details...
                    </p>
                    <form className="form-wrap" autoComplete="off" action="#">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Name"
                              name="Name"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="mobile"
                              placeholder="Phone Number"
                              name="mobile"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="email"
                              placeholder="Email"
                              name="email"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              placeholder="Country"
                              name="country"
                              id=""
                            />
                          </div>
                        </div>
                        <div className="form-group-2">
                          <textarea
                            style={{ overflow: "hidden" }}
                            name="comment"
                            id=""
                            placeholder="Your Message"
                            rows="6"
                          ></textarea>
                        </div>
                        <div className="btn-sub">
                          <button type="submit">
                            <h3>Request Demo</h3>
                          </button>
                          <span>></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
      <section>
        <div className="details-section p-5">
          <Container>
            <div className="row">
              <div className="col-lg-12">
                <div className="para-section">
                  <h3>Our Services</h3>
                  <p style={{ textAlign: "left" }}>
                    Camerinfolks's enterprise-level services and wealth of
                    experience has led to perfect digital experiences for our
                    clientele using a combination of relevant technology,
                    thoughtful strategy and clarity of purpose. We offer a
                    unique blend of strategic consulting, web CMS, eCommerce,
                    creative & digital marketing and integration services across
                    all channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-lg-3">
                <div className="first-item">
                  <img src={software} alt="" />
                  <h3>Software Development</h3>
                  <p>
                    From SQL database-driven applications to document management
                    solutions based on Exchange Server storage, Camerinfolks has
                    created dozens of complex applications built to rigorous
                    specifications and demanding schedules.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="first-item">
                  <img src={spark} alt="" />
                  <h3>SPARK-Trainning</h3>
                  <p>
                    Smile sheets don’t tell the entire story about the quality
                    and satisfaction of a course. But, when a student recommends
                    the course to a peer or colleague, you know it’s truly
                    great. In our case, that means 98% of our students consider
                    our courses great!
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="first-item">
                  <img src={Virtual} alt="" />
                  <h3>Virtual Space</h3>
                  <p>
                    Discover the benefits of a virtual office space in Cochin.
                    Don’t wish for the image you want—get it today with
                    Camerinfolks Virtual Space.
                  </p>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="first-item">
                  <img src={Web} alt="" />
                  <h3>Web Site Designing</h3>
                  <p>
                    Camerinfolks is a web development company experienced in
                    developing outstanding web applications. Our dedicated
                    ‘web-app’ developers have successfully completed dozens of
                    web projects for a wide variety of industries and business
                    domains, including e-Commerce, e-Learning, Analytics,
                    Finance, Healthcare and more.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="partners pt-3">
          <Container>
            <div className="row">
              <div className="col-lg-12 ">
                <div className="about-part">
                  <h1 className="p-3">Partners who support us</h1>
                  <div className="divider-2  m-auto"></div>
                  <p className="pt-4 m-auto">
                    Camerinfolks adopts the most advanced technologies and
                    frameworks to provide world-class solutions to maintain your
                    competitive edge in the industry.A fast-growing technology
                    solution provider in Healthcare Industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="client-logos pt-3">
              <div className="row">
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={joseph} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={chazhikattu} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={emc} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={mgdm} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={mitera} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={mosc} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={smita} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={providence} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={samaritan} alt="" />
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="clients pt-5">
                    <img src={global} alt="" />
                  </div>
                </div>
              </div>
            </div>
            </Container>
        </div>
      </section>
      {/* footer section starting */}
      <footer className="footer-section ">
        <div className="footer-container p-4">
          <Container>
            <div className="row">
              <div className="col-lg-4">
                <div className="section">
                  <img src={logo} alt="" />
                  <p className="pt-4">Camerinfolks is an IT systems integration company provides end to end solutions supporting the industry's most advanced information technologies, including computer systems, servers, structured cabling, networking systems (hardware and software), Internet, security, IP Telephony and application software (ERP, CRM, etc) solutions & Web Solutions. We translate these advanced technologies into value for our customers through our professional solutions and services.</p>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="section pt-3" style={{textAlign:"left"}}>
                  <h2>pages</h2>
                  <div className="divider-3"></div>
                  <ul style={{listStyle : "none",marginLeft:"-30px"}} className="section-list pt-4">
                    <li><a href="#">Pruducts</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="section pt-3" style={{textAlign:"left"}}>
                  <h3>Camerin groups</h3>
                  <div className="divider-3"></div>
                  <ul style={{listStyle : "none",marginLeft:"-30px"}} className="section-list pt-4">
                    <li><a href="#">CAMERINFOLKS PVT.LTD</a></li>
                    <li><a href="#">CAMERIN HEALTH</a></li>
                    <li><a href="#">CAMERIN INNOVATION HUB</a></li>
                    <li><a href="#">CAMERIN KIDS</a></li>
                  </ul>
                  <ul style={{listStyle : "none",marginLeft:"-28px",display:"inline-flex",gap:"12px"}} className="icon-section pt-3">
                    <li className="inline-icon">
                      <a href="#"><img src={facebook} alt="" /></a>
                    </li>
                    <li className="inline-icon">
                      <a href="#"><img className="inst" src={instagram} alt="" /></a>
                    </li>
                    <li className="inline-icon">
                      <a href="#"><img src={linkedin} alt="" /></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="section pt-3" style={{textAlign:"left"}}>
                  <h2 style={{textTransform:"uppercase"}}>Get in Touch</h2>
                  <div className="divider-3"></div>
                  <ul style={{listStyle : "none",marginLeft:"-30px"}} className="certification">
                    <li className="pt-3"><img src={iso1} alt="" /></li>
                    <li className="pt-3"><img src={iso2} alt="" /></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="row pt-3">
              <div className="col-lg-12">
                <div className="footer-divider" ></div>
              </div>
            </div>
            <div className="row pt-4">
              <div className="col-lg-12">
                <div className="whatsapp">
                  <div className="icon-container fixed-bottom">
                    <a href="#"><img style={{height:"60px",width:"60px"}} src={whatsapp} alt="" /></a>
                  </div>
                </div>
                <div className="copyright">
                 <h1>© Copyright Reserved to <a href="#">CamerinFolks Pvt. Ltd</a></h1>
                </div>
              </div>
              
            </div>
            
          </Container>
          
        </div>
        
      </footer>
    </div>
  );
}

export default BannerTwo;
