import "./Checkout.css"
import Header from "./Header.js"
import ProductBag from "./ProductBag.js"
import SubTotal from "./SubTotal.js"

export default function Checkout() {
    return (
        <div>
            <Header />
        <div className="checkout">
            <div className="left-side">
                <h1>Checkout</h1>
                <h2>Your Bag</h2>
                <ProductBag />
            </div>
            <div className="right-side">
                <SubTotal />
            </div>
        </div>
        </div>
    )
};
