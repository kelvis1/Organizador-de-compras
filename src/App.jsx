import { useState } from "react";
import ProductForm from "./components/ProductForm";

function App() {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const totalPrice = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Contador de Preços</h1>
      <ProductForm onAddProduct={handleAddProduct} />

      <h2>Lista de Produtos:</h2>
      <ul>
        {products.map((prod, index) => (
          <li key={index}>
            {prod.quantity}x {prod.name} — R$ {(prod.price * prod.quantity).toFixed(2)}
          </li>
        ))}
      </ul>

      <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
    </div>
  );
}

export default App;
