import "./ShoppingCart.css";
// import Header from "./Header.js"
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function ShoppingCart({
  visibility,
  products,
  onProductRemove,
  onClose,
  onQuantityChange,
}) {
  const Data = [
    {
      id: "1",
      title: "I FELL IN LOVE WITH HOPE by LANCALI",
      price: 290,
      genre: "Fiction",
      rating: 4,
      image:
        "https://therightbookstoreindia.com/wp-content/uploads/2022/11/1669297396-1024x944.jpg",
    },
    {
      id: "2",
      title: "IT STARTS WITH US by COLLEEN HOOVER",
      price: 290,
      genre: "Fiction",
      rating: 4,
      image:
        "https://therightbookstoreindia.com/wp-content/uploads/2022/10/1666607725.jpg",
    },
    {
      id: "2",
      title: "IT STARTS WITH US by COLLEEN HOOVER",
      price: 290,
      genre: "Fiction",
      rating: 4,
      image:
        "https://therightbookstoreindia.com/wp-content/uploads/2021/09/1632729563.jpg",
    },
    {
      id: "2",
      title: "IT STARTS WITH US by COLLEEN HOOVER",
      price: 290,
      genre: "Fiction",
      rating: 4,
      image:
        "https://therightbookstoreindia.com/wp-content/uploads/2021/09/1632727603.jpg",
    },
  ];

  return (
    <div className="modal">
      <div className="ShoppingHeader">
        <h2>Shopping Cart</h2>
        <button className="btn-close" onClick={onClose}>
          <CloseIcon size={30} />
        </button>
      </div>
      <div className="cart-products">
        {Data.length === 0 && (
          <span className="empty-text">Your cart is Empty</span>
        )}
        {Data.map((datas) => (
          <div className="cart-product" key={datas.id}>
            <img src={datas.image} alt="img" width={200} height={200} />

            <div className="cart-product-info">
              <h3>{datas.title}</h3>
              <span className="product-price">
                {datas.price * datas.count}$
              </span>
            </div>
            <select
              className="count"
              value={datas.count}
              onChange={(event) => {
                onQuantityChange(datas.id, event.target.value);
              }}
            >
              {[...Array(10).keys()].map((number) => {
                const num = number + 1;
                return (
                  <option value={num} key={num}>
                    {num}
                  </option>
                );
              })}
            </select>
            <button
              className="remove-btn"
              onClick={() => onProductRemove(datas)}
            >
              <DeleteOutlineIcon size={20} />
            </button>
          </div>
        ))}
        {Data.length > 0 && (
          <button className="checkout-btn">Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
}
