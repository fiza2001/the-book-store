import "./Product.css";



export default function Product(props) {

  
  return (
    <div>
      <div className="product">
        <div className="product-img-div">
          <img src={props.image} alt="" className="product-img" />
        </div>
        <div className="product-info">
          <h4>
            {props.title}
            <span>({props.genre})</span>
          </h4>
          <h3>{props.price}$</h3>
          <div className="rating">
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          </div>
          

          <button className="cart-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
