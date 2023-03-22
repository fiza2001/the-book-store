import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DiamondIcon from "@mui/icons-material/Diamond";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    // header-div
    <div className="header">
      {/* nav logo */}
      <div className="header-logo">
        <DiamondIcon className="header-logo-img" fontSize="large" />
        <h2 className="header-logo-title">Bookish</h2>
      </div>
      {/* nav search */}
      <div className="header-search">
        <input
          type="search"
          className="header-search-input"
          placeholder="search"
        />
        <button className="header-search-button">
          <SearchIcon className="header-search-icon" />
        </button>
      </div>
      {/* nav final comp */}
      <div className="header-nav">
        <div className="nav-item">
          <span className="1st-line">Hello User</span>
          <br />
          <span className="2nd line">Sign in...</span>
        </div>
        <div className="nav-item">
          <span className="1st-line">Your</span>
          <br />
          <span className="2nd line">Shop</span>
        </div>
        <div className="nav-item basket-icon">
          <ShoppingBasketIcon />
          <span className="2nd line">0</span>
        </div>
      </div>
    </div>
  );
}
