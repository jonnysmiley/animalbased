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
import { Card, CardHeader, CardBody, Row, Col, CardText, Alert, CardFooter } from "reactstrap";



function Map() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>The Dangers of Seed Oils</CardHeader>
              <CardBody>
                <Alert color="danger">
              <CardText>
          Seed oils (corn, canola, sunflower, safflower, soybean, grapeseed etc) are high in linoleic acid and polyunsaturated fats and accumulate in your body and lead to cell membrane fragility, oxidative stress, decreased nitric oxide, and dysfunctional fat cells that eventually create insulin resistance. Simply put, these oils are internally damaging long term and cause an array of issues.

<CardText>  

  In the Sydney Diet-Heart Study, researchers separated study participants into two groups. Both groups consumed the same amount of fat and oil, but the first group’s fat came primarily from vegetable oil sources like safflower oil and margarine while the second group’s fat came from sources like olive oil and butter. Everything else about their diets and lifestyles remained unchanged.
</CardText>
<CardText>Both groups were monitored and evaluated regularly for the next seven years. The result? The group consuming more vegetable oil had a 62% higher rate of death during the seven-year study compared to the group eating less vegetable oil.</CardText>
        </CardText>
        </Alert>
              </CardBody>
              <CardFooter>
                <hr/>
                <a href="https://www.bmj.com/content/346/bmj.e8707" target="_blank"><i className="nc-icon nc-alert-circle-i"></i> Info source</a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Why Avocado and Olive Oil are not optimal</CardHeader>
              <CardBody>
                <Alert color="primary">
                <CardText>
          Although Avocado and Olives are acceptable to consume in the Animal based diet these oils are not considered optimal for consumption or to cook with. By the time these bottled oils hit the shelves the oil is already rancid, and in order to slow the process of expiration companies often mix these oils with seed oils which are high in linoleic acid. The Oil extracted directly from Avocado and Olives would be safe to consume and have little to no harmful effect however they would need to be consumed immediately after extraction due to the quick expiration.
        </CardText>
        </Alert>
              </CardBody>
              <CardFooter>
                <hr/>
                <div className="d-flex justify-content-between">
                <a href="https://www.instagram.com/p/CerJvINpJiw/?hl=en" target="_blank"><i className="nc-icon nc-alert-circle-i"></i> Paul's Take on Olive/Avocado Oil </a>
                <a href="https://www.cbsnews.com/news/60-minutes-agromafia-food-fraud/" target="_blank"><i className="nc-icon nc-alert-circle-i"></i> More Info on this topic</a>
                </div>
              
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>Why Eat Raw Liver?</CardHeader>
              <CardBody>
                <Alert color="danger">
                <CardText>
                It is always important to be aware of where your meat is sourced. There is absolutely no concern when consuming raw grass-fed beef liver. Eating raw liver provides an extremely rich source of essential vitamins and minerals that support fertility, vision, energy, muscle building, and the immune system. Raw beef liver has more B12 than any food on earth.<a href="https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/" target="_blank"><i className="nc-icon nc-alert-circle-i"></i></a> Studies also show that there are 4 times as much beneficial phytonutrient content in grass-fed beef liver when compared to conventional varieties <a href="https://www.frontiersin.org/articles/10.3389/fsufs.2020.555426/full#h5" target="_blank"><i className="nc-icon nc-alert-circle-i"></i></a> 
        </CardText>
        </Alert>
              </CardBody>
          
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>The Difference Between Grass-fed and Grain-fed Beef</CardHeader>
              <CardBody>
                <Alert color="info">
                <CardText>
                Believe it or not the food that cows consume directly affects the quality of meat they produce. The overall composition of fatty acids change according to a grass-fed or corn-fed diet. Here are some of the comparisons.
                <hr/>
                <ul>
            <li>Monounsaturated fat. Grass-fed beef contains much less monounsaturated fat than grain-fed beef <a href="https://pubmed.ncbi.nlm.nih.gov/24018274/" target="_blank"><i className="nc-icon nc-alert-circle-i text-danger"></i></a></li>
            <li>Omega-6 polyunsaturated fats. Grass- and grain-fed beef contain very similar amounts of omega-6 fatty acids.</li>
            <li>Omega-3s. This is where grass-fed makes a major difference, containing up to five times as much omega-3 <a href="https://pubmed.ncbi.nlm.nih.gov/20807460/" target="_blank"><i className="nc-icon nc-alert-circle-i text-danger"></i></a></li>
            <li>Conjugated linoleic acid (CLA). Grass-fed beef contains about twice as much CLA as grain-fed beef. This fatty acid is associated with a few health benefits <a href="https://pubmed.ncbi.nlm.nih.gov/20219103/" target="_blank"><i className="nc-icon nc-alert-circle-i text-danger"></i></a></li>
          </ul>
        </CardText>
        </Alert>
              </CardBody>
          
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
