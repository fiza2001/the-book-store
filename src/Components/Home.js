import "./Home.css";
// import Product from "./Product.js";
import Header from "./Header.js"
import Slider from "./Slider.js"
import BestSellers from "./BestSellers.js"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        {/* top img */}
        <img src={require("./images/bk1.jpg")} alt="" className="home-img" />
        <br />
        <div className="slider-div">
        <Slider />
        </div>
        <div className="bestsellers-div">
        <BestSellers />
        </div>
        
        
      </div>
    </div>
  );
}
