import React from "react";
import ProductDetail from "../page/ProductDetail";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ isLogin }) => {
    return isLogin === true ? <ProductDetail /> : <Navigate to="/login" />;
}

export default PrivateRoute;