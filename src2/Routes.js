import React from "react";
import { Route, Link, BrowserRouter, Switch } from "react-router-dom";
import Home from "./core/Home";
import SignUp from "./user/Signup";
import SignIn from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <AdminRoute path="/admin/dashboard" component={AdminDashBoard} />
        <AdminRoute path="/admin/create/category" component={AddCategory} />
        <AdminRoute path="/admin/product/create" component={AddProduct} />

        <PrivateRoute path="/user/dashboard" component={UserDashBoard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
