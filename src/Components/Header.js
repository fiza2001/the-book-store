import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";



export default function Header() {
  
  return (
    <div className="header">
      {/* nav logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header-logo">
          <DiamondIcon className="header-logo-img" fontSize="large" />
          <h2 className="header-logo-title">Fiyah's</h2>
        </div>
      </Link>

      {/* nav search */}
      <div className="header-search">
        <input
          type="search"
          className="header-search-input"
          placeholder="search"
        />
        <button className="header-search-button">
          <SearchIcon className="header-search-icon" fontSize="medium" />
        </button>
      </div>

      {/* nav final comp */}
      <div div className="header-nav">
        <div className="nav-item">
          <span className="1st-line">Hello User</span>
          <br />
          <span className="2nd line">Sign Up</span>
        </div>
        {/* your products link */}
        <Link to="/products" style={{ textDecoration: "none"}}>
        <div className="nav-item">
          <span className="1st-line">Your</span>
          <br />
          <span className="2nd line">Products</span>
        </div>
        </Link>
        {/* cart link */}
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav-item basket-icon">
            <ShoppingBasketIcon />
            <span className="2nd line">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
