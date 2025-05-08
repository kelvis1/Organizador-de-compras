import { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  ThemeProvider,
  Button,
} from "@mui/material";
import ProductForm from "./components/ProductForm";
import theme from "./theme";

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  const addProduct = (product) => {
    const updated = [...products, product];
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const removeProduct = (indexToRemove) => {
    const updated = products.filter((_, index) => index !== indexToRemove);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center", marginTop: 4 }}>
          <Typography variant="h4" gutterBottom>
            Organizador de Compras
          </Typography>
          <ProductForm onAddProduct={addProduct} />
          <Typography variant="h6" gutterBottom sx={{ marginTop: 3 }}>
            Produtos Adicionados:
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            {products.map((product, index) => (
              <Grid item xs={12} key={index}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    padding: 2,
                    backgroundColor: "#f9f9f9",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1">
                    {product.quantity}x {product.name} - R${product.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeProduct(index)}
                  >
                    Remover
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h5" sx={{ marginTop: 3 }}>
            Total: R${totalPrice.toFixed(2)}
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
