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
            <Product 
            id="1"
            title="I FELL IN LOVE WITH HOPE by LANCALI"
            price={290}
            description="Against the unforgiving landscape of a hospital...."
            image="https://therightbookstoreindia.com/wp-content/uploads/2022/11/1669297396-1024x944.jpg"
            />
            <Product 
             id="2"
             title="IT STARTS WITH US by COLLEEN HOOVER"
             price={190}
             description="Before It Ends with Us, it started with Atlas...."
             image="https://therightbookstoreindia.com/wp-content/uploads/2022/10/1666607725.jpg"
             />
          </div>
          <div className="row-two">
          <Product 
           id="3"
           title="IKIGAI [HARDCOVER] by HECTOR GARCIA"
           price={566}
           description="It’s the Japanese word for ‘a reason to live’ or ‘a reason to jump out of bed in the morning’."
           image="https://therightbookstoreindia.com/wp-content/uploads/2021/09/1632729563.jpg"
           />
          <Product 
           id="4"
           title="RICH DAD POOR DAD by ROBERT KIYOSAKI"
           price={299}
           description="Rich Dad Poor Dad is Robert’s story of growing up with two dads ..."
           image="https://therightbookstoreindia.com/wp-content/uploads/2021/09/1632727603.jpg"
           />
          <Product 
           id="5"
           title="BEFORE YOUR MEMORY FADES by TOSHIKAZU KAWAGUCHI"
           price={320}
           description="On the hillside of Mount Hakodate in northern Japan, Cafe Donna Donna is fabled "
           image="https://therightbookstoreindia.com/wp-content/uploads/2022/10/1666866230.jpg"
           />
          </div>
          <div className="row-three">
          <Product 
           id="6"
           title="BERSERK MANGA VOL 1 KENTARO MIURA"
           price={499}
           description="His name is Guts, the Black Swordsman, a feared warrior spoken of only in whispers..."
           image="https://therightbookstoreindia.com/wp-content/uploads/2023/01/1673280541.jpg"
           /></div>
        </div>
      </div>
    </div>
  );
}
