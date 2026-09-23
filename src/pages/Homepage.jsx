import { getProducts } from "../data/products";
import { Link } from "react-router-dom"

export default function HomePage() {
  const products = getProducts();

  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="Home-title">Welcome to ShopHall</h1>

        <p className="home-subtitle">
          Discover amazing products at great prices
        </p>

        <div className="product-grid">
          {products.map((product) => {
            return (
              
              <div className="product-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  className="product-image-card"
                />

                <div>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </div>
                </Link>
              </div>
              
            );
          })}
        </div>

      </div>
    </div>
    
  );
}