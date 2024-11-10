import { Product } from "../../app/model/product";

// Khai báo interface cho props
interface Props {
  products: Product[];
  addProduct: () => void;
}

const Catalog = ({ products, addProduct }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Catalog;
