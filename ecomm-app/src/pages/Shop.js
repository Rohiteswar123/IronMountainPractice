import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  return (
    <div className="page">
      <h2>All Products</h2>

      <div className="categories">
        <Link to="/shop/electronics">Electronics</Link>
        <Link to="/shop/fashion">Fashion</Link>
      </div>

      <div className="search-box">
        <input
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
