import "./Product.css";
import { useStateValue } from "./StateProvider.js"



export default function Product({ id, title, price, rating, image, genre }) {

  const [state, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: "ADD-TO-BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
        genre: genre
      }
    })
  }

 
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
          

          <button onClick={addToBasket}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}
