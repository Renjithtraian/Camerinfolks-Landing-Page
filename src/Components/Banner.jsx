import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import "./mainContainer.css";
import Logo2 from "../Components/images/lifehislogo.png";
import medical from "../Components/images-2/doctorss.png";
import clock from "../Components/images-2/clock.png";
import coding from "../Components/images-2/coding.png";
import DICOM from "../Components/images-3/DCIM.png";
import HIPPA from "../Components/images-3/HIPPA.png";
import NABH from "../Components/images-3/NABH.png";
import ISO from "../Components/images-3/isos.png";
import ICD from "../Components/images-3/icd.jpg";
import Health from "../Components/images-3/hl7.jpg";
import JCI from "../Components/images-3/jciin.jpg";
import HospitalInfo from "../Components/images-3/hospital.png";
import PatientsInfo from "../Components/images-3/patient.png";
import DoctorsInfo from "../Components/images-3/doctor.png";
import NavigationInfo from "../Components/images-3/navigation.png";

function Banner() {
  return (
    <div>
      <div className="Main-section ">
        <div className="banner col-sm-12">
          <Container>
            <div className="row">
              <div className="col-lg-6">
                <div className="content">
                  <img src={Logo2} alt="" />
                  <p>
                    LIFE HIS's single-stack technology eliminates the need for
                    multiple tools, significantly reducing technology and
                    resource costs.
                  </p>
                  <Nav.Link className="Reg-btn">
                    Request Demo
                    <span className="divider">|</span>
                    <h5 className="arrow">></h5>
                  </Nav.Link>
                </div>
              </div>
            </div>
          </Container>
          </div>
          <section>
            <div className="features">
              <Container className="m-container pt-1 mt-1">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="card-section pt-3 shadow-3">
                      <Card className="bshadow" style={{ width: "25rem",height  : "17rem" }}>
                        <img src={medical} alt="" />
                        <Card.Body className="cardBody">
                          <div className="title-section">
                            <h3>24 Hours Service</h3>
                            <h2>Online Appoinment</h2>
                          </div>

                          <Card.Text className="h3">
                            Camerinfolks provides you the complete technology
                            solutions for your business using advanced and
                            proven tools and methodologies.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-section pt-3">
                      <Card className="bshadow" style={{ width: "25rem",height  : "17rem" }}>
                        <img src={clock} alt="" />
                        <Card.Body className="cardBody">
                          <div className="title-section">
                            <h3>Timing Schedule</h3>
                            <h2>Working Hours</h2>
                          </div>
                          <Card.Text className="cardText">
                            <ul className="listItems" style={{listStyle : "none",textAlign : "left"}}>
                                <li>
                                    Sun - Wed :
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li>
                                    Thur - Fri :
                                    <span>8:00 - 17:00</span>
                                </li>
                                <li>
                                    Sat - Sun :
                                    <span>8:00 - 17:00</span>
                                </li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card-section pt-3">
                      <Card className="bshadow" style={{ width: "25rem",height  : "17rem" }}>
                        <img src={coding} alt="" />
                        <Card.Body className="cardBody">
                          <div className="title-section">
                            <h3>Spark Tarinning</h3>
                            <h2>7736421092</h2>
                         </div>
                          <Card.Text className="h3">
                            On the job training with Assured job program. We are providing JAVA, PYTHON, SOFTWARE TESTING, ASP.NET, PHP and DATA SCIENCE with MACHINE LEARNING Training.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Container>
            </div>
          </section>
        </div>
        <section>
            <div className="partners-side">
                <Container >
                    <div className="mainptr-container col-lg-12">
                        <h2 className="text center">Standards & Compliances</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={DICOM} alt="" style={{width:"225px",height:"80px"}} className="img" />
                                <h4 className="h4 pt-2">DICOM 3.0 Complaint</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={HIPPA} alt="" style={{width:"225px",height:"80px"}} className="img" />
                                <h4 className="h4 pt-2">HIPPA Compliant</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={NABH} alt="" style={{width:"120px",height:"80px"}} className="img" />
                                <h4 className="h4 pt-2">NABH Complaint</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={ISO} alt="" style={{width:"150px",height:"80px"}}  className="img" />
                                <h4 className="h4 pt-2">ISO 27001 Complaint</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={ICD} alt="" style={{width:"225px",height:"110px"}}  className="img" />
                                <h4 className="h4 pt-2">ICD-10 Coding</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={Health} alt="" style={{width:"225px",height:"110px"}}  className="img" />
                                <h4 className="h4 pt-2">Health Level 7 (HL7)</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="partners-block">
                                <img src={JCI} alt="" style={{width:"190px",height:"110px"}}  className="img" />
                                <h4 className="h4 pt-2">JCI International</h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="info-section pt-5">
                <Container className="info-container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 pt-5">
                            <div className="hospital-info">
                                <img src={HospitalInfo} style={{width:"120px",height:"100px"}} alt="" />
                                <h1>30<span>+</span></h1>
                                <h3>hospitals</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-5">
                            <div className="hospital-info">
                                <img src={PatientsInfo} style={{width:"120px",height:"100px"}} alt="" />
                                <h1>100000<span>+</span></h1>
                                <h3>Patients</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-5">
                            <div className="hospital-info">
                                <img src={DoctorsInfo} style={{width:"110px",height:"100px"}} alt="" />
                                <h1 style={{color:"white"}}>5000<span>+</span></h1>
                                <h3>Doctors</h3>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 p-5">
                            <div className="hospital-info">
                                <img src={NavigationInfo} style={{width:"120px",height:"100px"}} alt="" />
                                <h1>7<span>+</span></h1>
                                <h3>Countries</h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </section>
        
      </div>
    
  );
}

export default Banner;
