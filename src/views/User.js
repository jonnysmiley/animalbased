/*!

=========================================================
* Paper Dashboard React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Alert
} from "reactstrap";

function User() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image ">
               <Alert color="warning"></Alert> 
              </div>
              <CardBody>
                <div className="author">
              
                    <img
                      alt="..."
                      className="img-fluid border-gray"
                      src={require("assets/img/pine.webp")}
                    />
                    <h5 className="title text-warning">Pineapple</h5>
                 
                </div>
                <p className="description text-center">
                  Pineapple is a great addition to the animal based diet because of its unique combination of enzymes called bromelain which breaks down protein and softens meat.
                </p>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
            <Card className="card-user">
              <div className="image ">
               <Alert color="warning"></Alert> 
              </div>
              <CardBody>
                <div className="author">
              
                    <img
                      alt="..."
                      className=" img-fluid border-gray"
                      src={require("assets/img/pomegranate.webp")}
                    />
                    <h5 className="title text-warning">pomegranates</h5>
                 
                </div>
                <p className="description text-center">
                A <a href="https://www.ijnpnd.com/article.asp?issn=2231-0738;year=2015;volume=5;issue=4;spage=141;epage=143;aulast=Akbar">review study </a>about the health benefits of pomegranates suggests that they have anti-inflammatory effects and may help protect against brain-related diseases, such as Alzheimer’s disease and Parkinson’s disease. This may be because pomegranates contain particularly high levels of polyphenols.
                </p>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
            <Card className="card-user">
              <div className="image ">
               <Alert color="info"></Alert> 
              </div>
              <CardBody>
                <div className="author">
              
                    <img
                      alt="..."
                      className="img-fluid border-gray"
                      src={require("assets/img/date.jpg")}
                    />
                    <h5 className="title text-info">Dates</h5>
                 
                </div>
                <p className="description text-center">
                  Dates contain 3 times the amount of potassium in a single serving compared to a banana
                </p>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-user">
            <div className="image ">
               <Alert color="danger"></Alert> 
              </div>
              <CardBody>
                <div className="author">
              
                    <img
                      alt="..."
                      className="img-fluid border-gray"
                      src={require("assets/img/download.jfif")}
                    />
                    <h5 className="title text-danger">watermelon</h5>
                 
                </div>
                <p className="description text-center">
                Watermelon gets it's red color from an antioxidant called Lycopene. Lycopene has been shown to decrease risk of prostate cancer and boost heart health
                </p>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
            <Card className="card-user">
            <div className="image ">
               <Alert color="danger"></Alert> 
              </div>
              <CardBody>
                <div className="author">
              
                    <img
                      alt="..."
                      className="img-fluid border-gray"
                      src={require("assets/img/strw.webp")}
                    />
                    <h5 className="title text-danger">Strawberries</h5>
                 
                </div>
                <p className="description text-center">
                Strawberries and other colorful berries contain a flavonoid called quercetin. This is a natural anti-inflammatory compound.
                </p>
              </CardBody>
              <CardFooter>
               
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default User;
