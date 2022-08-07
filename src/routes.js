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
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Maps from "views/Map.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Toxicity List",
    icon: "nc-icon nc-paper",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Additional Info",
    icon: "nc-icon nc-favourite-28",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Store Beef Sources",
    icon: "nc-icon nc-world-2",
    component: Notifications,
    layout: "/admin"
  },
  {
    path: "/user-page",
    name: "Fruit Facts",
    icon: "nc-icon nc-satisfied",
    component: UserPage,
    layout: "/admin"
  }
];
export default routes;
