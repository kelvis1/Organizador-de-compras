// src/components/ProductForm.jsx
import { useState } from 'react';
import { TextField, Button, Alert, Box } from '@mui/material';

function ProductForm({ onAddProduct }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples
    if (!name.trim()) {
      setError('O nome do produto é obrigatório.');
      return;
    }

    if (price <= 0) {
      setError('O preço deve ser maior que zero.');
      return;
    }

    if (quantity < 1) {
      setError('A quantidade deve ser pelo menos 1.');
      return;
    }

    // Se tudo estiver ok, adicionar o produto
    onAddProduct({
      name: name.trim(),
      price: parseFloat(price),
      quantity: parseInt(quantity),
    });

    // Limpar os campos
    setName('');
    setPrice('');
    setQuantity(1);
    setError('');
  };

  return (
    <Box sx={{ width: '100%', marginTop: 2 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome do produto"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Preço"
          fullWidth
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          margin="normal"
        />
        <TextField
          label="Quantidade"
          fullWidth
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          margin="normal"
          inputProps={{ min: 1 }}
        />

        {error && <Alert severity="error" sx={{ marginTop: 2 }}>{error}</Alert>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Adicionar Produto
        </Button>
      </form>
    </Box>
  );
}

export default ProductForm;
