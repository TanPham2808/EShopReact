import { useEffect, useState } from "react";

function App() {
  const [products, setProduct] = useState([
    { name: "product1", price: 100.0 },
    { name: "product2", price: 200.0 },
  ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);

  const addProduct = () => {
    setProduct((preState) => [
      ...preState,
      {
        name: "product" + preState.length + 1,
        price: (preState.length + 1) * 100,
      },
    ]);
  };

  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          );
        })}
      </ul>
      <button onClick={addProduct}>Click add</button>
    </div>
  );
}

export default App;
