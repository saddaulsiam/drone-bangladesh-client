import React, { useEffect, useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import AddToCartModal from "../ShoppingCart/AddToCartModal/AddToCartModal";
import Product from "./Product";

const Products = ({ handleOpen, handleClose, open }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30,
    },
  };

  return (
    <Container>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: 500, color: "#fc6539" }}
        >
          AWESOME PRODUCTS
        </Typography>
        <Typography
          sx={{ fontSize: "45px", fontWeight: 700, color: "#06264b" }}
        >
          Featured Products
        </Typography>
      </Box>
      <Box sx={{ my: 8 }}>
        <Carousel ssr responsive={responsive}>
          {products?.map((product) => (
            <Product
              product={product}
              key={product._id}
              handleOpen={handleOpen}
            />
          ))}
        </Carousel>
      </Box>
      <AddToCartModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
      />
    </Container>
  );
};

export default Products;
