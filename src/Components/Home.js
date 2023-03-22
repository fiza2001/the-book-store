import "./Home.css";
import Product from "./Product.js"

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="home-container">
            {/* top img */}
          <img src={require("./images/bk1.jpg")} alt="" className="home-img" />
          <div className="home-row">
            <Product className="product-card" />
          </div>
          <div className="home-row">
          
          </div>
          <div className="home-row">
        
          </div>
        </div>
      </div>
    </div>
  );
}
