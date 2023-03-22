import "./Product.css";

export default function Product() {
  return (
    <div>
      <div className="product">
        <div className="product-info">
          <p>Title</p>
          <p className="product-price">Price</p>
          <div className="product rating"><p>(Fiction)</p></div>
          <img src={require("./images/bk2.jpg")} alt="" />
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
