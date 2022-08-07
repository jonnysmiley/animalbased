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
import { Card, CardHeader, CardBody, CardTitle, Row, Col, CardFooter,CardSubtitle, CardLink, CardText } from "reactstrap";

function Icons() {
  return (
    <>
      <div className="content">
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h5" className="text-success">Low Toxic Foods</CardTitle>
                <p>Grass fed beef and organs or dessicated organ supplements pasture-raised pork, chicken, and eggs. 6-12oz bone broth per day and a calcium source from cooked bones or dairy, if tolerated.</p>
              </CardHeader>
             
              <CardBody>
              <CardText >
        <i className="nc-icon nc-check-2 text-success"></i>
        Raw/Organic Honey
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-success"></i>
        Raw Grass-fed Dairy
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-success"></i>
       Sweet fruits
       <ul>
        <li>Apples</li>
        <li>Oranges</li>
        <li>Berries</li>
        <li>Pineapple</li>
        <li>Pear</li>
        <li>Melons</li>
        <li>Mango</li>
        <li>Banana</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-success"></i>
       Non-Sweet fruits
       <ul>
        <li>Avocado</li>
        <li>Olives</li>
        <li>Pumpkin</li>
        <li>Squash</li>
        <li>Zucchini</li>
        <li>Cucumber</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-success"></i>
        Grass-fed Ghee
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-success"></i>
        Tallow/Suet
        </CardText>
              </CardBody>
              <CardFooter>
                <hr />
                <a href="https://www.instagram.com/carnivoremd2.0/?hl=en" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
                  </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h5" className="text-warning">Medium Toxic Foods</CardTitle>
                <p>These foods can be incorporated into your diet if tolerated and do not neccessarily need to be avoided.</p>
              </CardHeader>
              
              <CardBody>
              <CardText >
              <i className="nc-icon nc-check-2 text-warning"></i>
        White Rice
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
       Roots/Tubers
       <ul>
        <li>Sweet Potatoes</li>
        <li>Yams</li>
        <li>Carrots</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
       Fermented Vegetables
       <ul>
        <li>Sauerkraut</li>
        <li>Pickles</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
        Artichoke Hearts
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
       Herbs
       <ul>
        <li>Rosemary</li>
        <li>Thyme</li>
        <li>Basil</li>
        <li>Dill</li>
        <li>Oregano</li>
        <li>Mint</li>
        <li>Parsley</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
        Coconut
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
       Low Metal Fish (Sparingly)
       <ul>
        <li>Wild Caught Salmon</li>
        <li>Sardines</li>
        <li>Anchovies</li>
        <li>Shellfish</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-check-2 text-warning"></i>
        Ceylon Cinnamon
        </CardText>
              </CardBody>
              <CardFooter>
                <hr />
                <a href="https://www.instagram.com/carnivoremd2.0/?hl=en" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
                  </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="12">
          <Card>
              <CardHeader>
                <CardTitle tag="h5" className="text-danger">High Toxic Foods</CardTitle>
                <p> Avoiding seed oils is critical to long term health. Animal fats are preferred over all plant-based oils, including olive or avocado oil. Sourcing for meat and organs is also important and avoiding corn/soy/grain-fed animals is ideal. Processed sugar has no place in a healthy diet and should be avoided as well.</p>
              </CardHeader>
             
              <CardBody>
              <div className="row">
        <div className="col-6">
             <CardText >
             <i className="nc-icon nc-simple-remove text-danger"></i>
        Spinach
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
       Brassica
       <ul>
        <li>Kale</li>
        <li>Broccoli</li>
        <li>Cauliflower</li>
        <li>Brussel Sprouts</li>
        <li>Cabbage</li>
        <li>Horseradish</li>
        <li>Radishes</li>
        <li>Watercress</li>
        <li>Bok Choy</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
       Chard
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Beets
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
      Asparagus
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Coconut
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
       Lettuce/Salad Greens
       <ul>
        <li>Green Leaf</li>
        <li>Romaine</li>
        <li>Mixed Greens</li>
        <li>Aruglula</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
       Grains
       <ul>
        <li>Wheat</li>
        <li>Oats</li>
        <li>Quinoa</li>
        <li>Millet</li>
        <li>Amaranth</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
       Seed Oils
       <ul>
        <li>Corn</li>
        <li>Canola</li>
        <li>Sunflower</li>
        <li>Safflower</li>
        <li>Soy</li>
        <li>Peanut</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
       Seeds
       <ul>
        <li>Chia</li>
        <li>Flax</li>
        <li>Sunflower</li>
        <li>Pumpkin</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Coffee
        </CardText>
        </div>
        <div className="col-6">
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Chocolate
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Spices
       <ul>
        <li>Cassia Cinnamon</li>
        <li>Turmeric</li>
        <li>Cardamon</li>
        <li>Cumin</li>
        <li>Coriander</li>
        <li>Black/White Pepper</li>
        <li>Paprika</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Kimchi
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Nuts
       <ul>
        <li>Almonds</li>
        <li>Walnuts</li>
        <li>Cashew</li>
        <li>Brazil</li>
        <li>Macadamia</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Legumes
       <ul>
        <li>Peas</li>
        <li>Green Beans</li>
        <li>Soy beans</li>
        <li>Kidney Beans</li>
        <li>Lentils</li>
        <li>Peanut</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Celery
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Brown Rice
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Mushrooms
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Cassava
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Alliums
       <ul>
        <li>Onion</li>
        <li>Garlic</li>
        <li>Leek</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Nightshades
       <ul>
        <li>Tomato</li>
        <li>white Potato</li>
        <li>Eggplant</li>
        <li>Peppers</li>
        <li>Chili Peppers</li>
        <li>Goji Berries</li>
       </ul>
        </CardText>
        <CardText>
        <i className="nc-icon nc-simple-remove text-danger"></i>
        Heavy Metal Fish
       <ul>
        <li>Tuna</li>
        <li>King Mackerel</li>
        <li>Halibut</li>
        <li>Sea Bass</li>
       </ul>
        </CardText>
        </div>
</div>
              </CardBody>
              <CardFooter>
                <hr />
                <a href="https://www.instagram.com/carnivoremd2.0/?hl=en" target="_blank">
                <i class="fa-brands fa-square-instagram"></i>
                  </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Icons;
