import "./Product.css";

export default function Product() {
  return (
    <div>
      <div className="product">
        <div className="product-img-div">
        <img src={require("./images/bk2.jpg")} alt="" className="product-img"/>
        </div>
        <div className="product-info">
          <h4>title (Fiction)</h4>
          <h5>200 $</h5>
          <p>lorem ipsum berla balado kavalri dhaja dhbshb.loplo asderf jsnjankmnanskamns</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
