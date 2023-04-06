import "./App.css";
import Home from "./Components/Home.js";
import Checkout from "./Components/Checkout.js";
import YourProducts from "./Components/YourProducts";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" Component={Checkout} />
          <Route path="/" Component={Home} />
          <Route path="/products" Component={YourProducts} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
