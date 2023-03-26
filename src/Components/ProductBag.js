import "./ProductBag.css";

export default function ProductBag() {
  return (
    <div className="product-bag">
      <img
      className="product-bag-img"
        src="https://therightbookstoreindia.com/wp-content/uploads/2022/11/1669297396-1024x944.jpg"
        alt=""
      />
      <div className="product-bag-info">
        <h4>I FELL IN LOVE WITH HOPE by LANCALI</h4>
        <h3>200 $</h3>
        <div className="product-bag-rating">
        <p>⭐⭐⭐⭐</p>
        </div>
        <button>Remove from cart</button>
      </div>
    </div>
  );
}
