import { Button } from "@mui/material";
import { Product } from "../../app/model/product";
import ProductList from "./ProductList";

// Khai báo interface cho props
interface Props {
  products: Product[];
  addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
  return (
    <>
      <ProductList products={products} />
      <Button variant="contained" onClick={addProduct}>
        Add Product
      </Button>
    </>
  );
};

export default Catalog;
