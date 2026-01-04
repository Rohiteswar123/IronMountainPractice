import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(ShopContext);

  return (
    <div className="page">
      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>No items added</p>}

      {wishlist.map((item) => (
        <div className="wishlist-item" key={item.id}>
          {item.name}
          <button onClick={() => removeFromWishlist(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;
