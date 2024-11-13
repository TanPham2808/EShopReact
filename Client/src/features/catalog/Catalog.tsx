import agent from "../../app/api/agent";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

const Catalog = () => {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then((products) => setProduct(products));
  }, []);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Catalog;
