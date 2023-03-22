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
            <Product />
            <Product />
          </div>
          <div className="home-row">
          <Product />
          <Product />
          <Product />
          </div>
          <div className="home-row">
          <Product />
          </div>
        </div>
      </div>
    </div>
  );
}
