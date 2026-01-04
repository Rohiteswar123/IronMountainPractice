import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Category() {
  const { category } = useParams();

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
