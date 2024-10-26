import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import Layout from "../Layout/Layout.jsx";
import css from "./App.module.css";

const ProductPage = lazy(() => import("../../pages/ProductPage/ProductPage.jsx"));
const CartPage = lazy(() => import("../../pages/CartPage/CartPage.jsx"));

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Layout>
  );
}
