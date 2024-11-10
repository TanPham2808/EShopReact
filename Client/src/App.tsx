import { useEffect, useState } from "react";
import { Product } from "./product";

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
        pictureUrl: "http://picsum.photo/200",
      },
    ]);
  };

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          );
        })}
      </ul>
      <button onClick={addProduct}>Click add</button>
    </div>
  );
}

export default App;
