import { useEffect, useState } from "react";
import { Product } from "../model/product";
import Catalog from "../../features/catalog/Catalog";
import Typography from "@mui/material/Typography";

function App() {
  const [products, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const addProduct = () => {
    setProduct((preState) => [
      ...preState,
      {
        id: preState.length + 101,
        name: "product" + (preState.length + 1),
        price: preState.length * 100 + 100,
        brand: "some brean",
        description: "some desctiption",
        pictureUrl: "https://picsum.photos/200",
      },
    ]);
  };

  return (
    <div>
      <h1></h1>
      <Typography variant="h1" gutterBottom>
        Re-Store
      </Typography>
      <Catalog products={products} addProduct={addProduct} />
    </div>
  );
}

export default App;
