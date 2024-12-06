import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import { FakeStoreAPI_BaseURL } from "../../API/EndPoints";
import Loader from "../../components/Loader/Loder";
import ProductCard from "../../components/Product/ProductCard";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${FakeStoreAPI_BaseURL}/products/${productId}`)
      .then((res) => {
        console.log(res.data, productId);
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {console.log(product)}
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
