import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("http://localhost:5000/api/products");
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  const filtered = products.filter(
    (p) => p.category === category
  );

  return (
    <div className="page">
      <h2>{category.toUpperCase()}</h2>

      <div className="products">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
