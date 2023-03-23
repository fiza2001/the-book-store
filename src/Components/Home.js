import "./Home.css";
import Product from "./Product.js";

export default function Home() {
  return (
    <div>
      <div className="home">
        {/* top img */}
        <img src={require("./images/bk1.jpg")} alt="" className="home-img" />
        <div className="home-row">
          <div className="row-one">
            <Product />
            <Product />
          </div>
          <div className="row-two">
          <Product />
          <Product />
          <Product />
          </div>
          <div className="row-three"><Product /></div>
        </div>
      </div>
    </div>
  );
}
