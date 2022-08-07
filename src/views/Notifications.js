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
/*eslint-disable*/
import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  CardImg,
  CardText
} from "reactstrap";
import sprouts from "./sprouts.jfif";
import graze from "./graze.jfif";
import dakota from "./Dakota.jfif";
import organic from "./organic.jfif";
import pasture from "./pasture.jfif";
import curb from "./curb.webp";
import thomas from "./thomas.webp";
import simple from "./simple.jpg";
import open from "./open.webp";
import sun from "./sun.jpg";
import simp from "./simp.webp"

function Notifications() {
 
  return (
    <>
      <div className="content">
      <Card>
        <CardHeader><CardTitle tag="h5">Where does my meat come from?</CardTitle>
          <p className="category">This is a table showing where grass-fed beef commonly found in grocery stores is sourced from</p>
        </CardHeader>
          <hr />
        <CardBody>
        
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={sprouts}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >The Butcher Shop</CardTitle>
            <CardBody>
              <CardText>The Butcher Shop sources cattle from family farms in Australia and New Zealand</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={sun}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Sun Fed Farms</CardTitle>
            <CardBody>
              <CardText><a href="https://www.sunfedranch.com/about-sunfed-ranch/">Sun Fed Farms</a> is grass-fed and finished and sources their meat from farms locally in California, Neveda, Oregon, and Nebraska</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={graze}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Goodness Grazecious</CardTitle>
            <CardBody>
              <CardText>This company is partnered with the <a href="https://www.nationalbeef.com/about-us/we-know-beef/cattle-supply-alliances">National Beef Packing Company</a> and sources its beef from family run farms in Iowa</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={dakota}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Dakota Farms</CardTitle>
            <CardBody>
              <CardText>This company is partnered with <a href="https://www.nationalbeef.com/about-us/we-know-beef/cattle-supply-alliances">Meyer Natural Foods</a> and sources through another company called <a href="https://www.localharvestbeef.com/abou">Local Harvest Beef</a> which has farms in New York, Virginia, and Pennsylvania.</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={organic}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Organic Prairie</CardTitle>
            <CardBody>
              <CardText><a href="https://www.organicprairie.com/pages/about-organic-prairie">Organic Prairie</a> is partnered with <a href="https://www.farmers.coop/">Organic Valley</a> which sources their meat from a variety of different farms around the world including the US, Canada, New Zealand, and Australia.</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={pasture}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Pasture Perfect</CardTitle>
            <CardBody>
              <CardText><a href="https://pastureperfectmeats.com/supply-background/" target="_blank">Pasture Perfect</a> supplies their meat from farms in New Zealand</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={curb}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Marketside Butcher</CardTitle>
            <CardBody>
              <CardText><a href="https://corporate.walmart.com/newsroom/business/20180119/meet-the-families-behind-our-grass-fed-beef#:~:text=Thanks%20to%20two%20cattle%20ranching,as%20much%20as%20we%20do.">Marketside Butcher</a> is a partner with Walmart and sources their meat from farms in Utah and Wyoming.</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={thomas}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Thomas Farms</CardTitle>
            <CardBody>
              <CardText><a href="https://thomasfarms.com/pages/premium-fresh-australian-beef-and-lamb-at-your-doorstep">Thomas Farms</a> sources their meat from farms in Australia.</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={simple}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Simply Nature</CardTitle>
            <CardBody>
              <CardText><a href="https://www.aldi.us/en/products/fresh-meat-seafood/fresh-beef/detail/ps/p/simply-nature-organic-grass-fed-ground-beef/">Simply Nature</a> is grass-fed and finished and sources their meat from farms in Australia.</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={open}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Open Nature</CardTitle>
            <CardBody>
              <CardText><a href="https://www.albertsons.com/shop/product-details.960098622.html">Open Nature</a> is grass-fed and finished and sources their meat from farms in Australia</CardText>
            </CardBody>
              </Card>
          </Row>
          <hr/>
          <Row className="justify-content-center">
              <Card>
              <CardImg className="mx-auto" style={{ width: 250}} src={simp}></CardImg>
            <CardHeader></CardHeader>
            <CardTitle className="text-center" tag="h5" >Simple Truth Organic</CardTitle>
            <CardBody>
              <CardText><a href="https://www.ralphs.com/p/simple-truth-organic-85-lean-grass-fed-ground-beef/0001111096896?fulfillment=PICKUP&searchType=default_search">Simple Truth</a> is grass-fed and finished and sources their meat from farms from around the US</CardText>
            </CardBody>
              </Card>
          </Row>
        </CardBody>
      </Card>
      </div>
    </>
  );
}

export default Notifications;
