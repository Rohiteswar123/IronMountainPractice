import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

function Navbar() {
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/">Home</Link> 
      <Link to="/shop">Shop</Link> 
      <Link to="/shop/electronics">Electronics</Link> 
      <Link to="/shop/fashion">Fashion</Link> 
      <Link to="/wishlist">Wishlist</Link> 
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;
