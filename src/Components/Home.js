import "./Home.css";
// import Product from "./Product.js";
import Header from "./Header.js"
import Slider from "./Slider.js"

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
        
        {/* <div className="home-row">
          <div className="row-one">
            <Product 
            id="1"
            title="I FELL IN LOVE WITH HOPE by LANCALI"
            price={290}
            genre="Fiction"
            rating={4}
            image="https://therightbookstoreindia.com/wp-content/uploads/2022/11/1669297396-1024x944.jpg"
            />
            <Product 
             id="2"
             title="IT STARTS WITH US by COLLEEN HOOVER"
             genre="Fiction"
             price={190}
             rating={3}
             image="https://therightbookstoreindia.com/wp-content/uploads/2022/10/1666607725.jpg"
             />
          </div>
          <div className="row-two">
          <Product 
           id="3"
           title="IKIGAI [HARDCOVER] by HECTOR GARCIA"
           genre="Non-Fiction"
           price={566}
           rating={2}
           image="https://therightbookstoreindia.com/wp-content/uploads/2021/09/1632729563.jpg"
           />
          <Product 
           id="4"
           title="RICH DAD POOR DAD by ROBERT KIYOSAKI"
           genre="Non-Fiction"
           price={299}
           rating={5}
           image="https://therightbookstoreindia.com/wp-content/uploads/2021/09/1632727603.jpg"
           />
          <Product 
           id="5"
           title="BEFORE YOUR MEMORY FADES by TOSHIKAZU KAWAGUCHI"
           genre="Fiction"
           price={320}
           rating={4}
           image="https://therightbookstoreindia.com/wp-content/uploads/2022/10/1666866230.jpg"
           />
          </div>
          <div className="row-three">
          <Product 
           id="6"
           title="BERSERK MANGA VOL 1 KENTARO MIURA"
           genre="Fantasy"
           price={499}
           rating={3}
           image="https://therightbookstoreindia.com/wp-content/uploads/2023/01/1673280541.jpg"
           /></div>
        </div> */}
      </div>
    </div>
  );
}
