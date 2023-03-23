import "./Product.css";

export default function Product({ id, title, price, rating, image, genre }) {
  return (
    <div>
      <div className="product">
        <div className="product-img-div">
          <img src={image} alt="" className="product-img" />
        </div>
        <div className="product-info">
          <h4>
            {title}
            <span>({genre})</span>
          </h4>
          <h3>{price}$</h3>
          <div className="rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
          </div>
          

          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
