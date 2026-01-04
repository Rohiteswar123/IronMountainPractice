import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function ProductCard({ product }) {
  const { addToWishlist } = useContext(ShopContext);

  return (
    <div className="card">
      <h4>{product.name}</h4>
      <button onClick={() => addToWishlist(product)}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductCard;
