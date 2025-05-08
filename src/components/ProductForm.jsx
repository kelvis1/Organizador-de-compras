import { useState } from "react";

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price || quantity < 1) {
      alert("Preencha todos os campos corretamente!");
      return;
    }

    onAddProduct({
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    });

    setName("");
    setPrice("");
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Nome do produto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        step="0.01"
        required
      />
      <input
        type="number"
        placeholder="Qtd"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default ProductForm;
