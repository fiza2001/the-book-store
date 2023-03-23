import "./Product.css";

export default function Product({id,title,price,description,image}) {
  return (
    <div>
      <div className="product">
        <div className="product-img-div">
        <img src={image} alt="" className="product-img"/>
        </div>
        <div className="product-info">
          <h4>{title}(Fiction)</h4>
          <h5>{price}$</h5>
          <p>{description}</p>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
