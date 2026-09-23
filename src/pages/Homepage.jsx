import { getProducts } from "../data/products";

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
                <img
                  src={product.image}
                  className="product-image-card"
                />

                <div>
                  <h2>{product.name}</h2>
                  <p>{product.price}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}