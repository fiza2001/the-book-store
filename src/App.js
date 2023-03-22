import "./App.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function App() {
  return (
    <div className="App">
      {/* nav logo */}
      <div className="header-logo"></div>
      {/* nav search */}
      <div className="header-search"></div>
      {/* nav final comp */}
      <div className="header-nav">
        <div className="nav-item">
          <span className="1st-line">Hello User</span>
          <span className="2nd line">Sign in...</span>
        </div>
        <div className="nav-item">
          <span className="1st-line">Your</span>
          <span className="2nd line">Shop</span>
        </div>
        <div className="nav-item">
        <ShoppingBasketIcon />
          <span className="2nd line">0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
