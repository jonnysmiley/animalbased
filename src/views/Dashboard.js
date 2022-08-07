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
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Alert,
  Col,
  CardImg
} from "reactstrap";


function Dashboard() {
  return (
    <>
      <div className="content">
        
        <Row>
          <Col md="12">
            <h5 className="text-center description">"knowledge is Power"</h5>
            <Card>
              <CardHeader>
                <CardTitle tag="h5">What is the Animal Based Diet?</CardTitle>
                
              </CardHeader>
              <CardBody>
              <p className="card-category">Paul Saladino – double board-certified medical doctor coined the term “animal-based” a couple of years ago as a spin-off of the term “plant-based”. This philosophy focuses on filling your body with the most optimal foods from Paul's low toxic list which contains things like meat, animal fats, eggs, raw dairy, organ meat, honey, and the sweet and non-sweet fruits he recommends</p>
              </CardBody>
              <CardFooter>
                <hr />
                <a href="https://www.instagram.com/carnivoremd2.0/?hl=en" target="_blank">
                <i class="nc-icon nc-camera-compact"></i> Paul's instagram
                  </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Why Choose this lifestyle?</CardTitle>
                
              </CardHeader>
              <CardBody>
              <p className="card-category">This lifestyle boasts about optimal health by removing all processed sugars, seed oils, and many other harmful chemicals that hinder your full human potential. Many who have switched to this diet have seen noticable improvement in auto-immune disorders, mental health, hormonal imbalance, and skin issues. This lifestyle and philosophy was created with the intention of combating chronic illness through food and lifestyle choices and has been overall successfull in doing so.</p>
              </CardBody>
              <CardFooter>
              
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card >
           
               <Alert color="danger"></Alert> 
              
              
              <CardHeader>
                <CardTitle tag="h5">Recent Harvard Study</CardTitle>
                
              </CardHeader>
              <CardBody>
              <p className="card-category"><a href="https://pubmed.ncbi.nlm.nih.gov/34934897/#:~:text=Conclusions%3A%20Contrary%20to%20common%20expectations,risk%20factors%20were%20variably%20affected.">This reviewed study</a> showed incredible results. Contrary to common expectations, adults consuming a carnivore diet experienced few adverse effects and instead reported health benefits and high satisfaction. Cardiovascular disease risk factors were variably affected.</p>
              </CardBody>
              <CardFooter>
              <hr />
                <a href="https://pubmed.ncbi.nlm.nih.gov/34934897/#:~:text=Conclusions%3A%20Contrary%20to%20common%20expectations,risk%20factors%20were%20variably%20affected." target="_blank">
                <i class="nc-icon nc-alert-circle-i"></i> Study Info
                  </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
       
      </div>
    </>
  );
}

export default Dashboard;
