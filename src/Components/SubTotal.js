import "./SubTotal.css"
import CurrencyFormat from "react-currency-format"

export default function SubTotal() {
    return (
        <div className="subtotal">
           {/* <p>Bag (2 Items)</p>
           <strong>Total : 200 $</strong><br /><br />
           <button>Proceed to Checkout</button> */}
           <CurrencyFormat 
           renderText={(value) => (
            <>
            <p>SubTotal (0 items): <strong>$ 0</strong></p>
            <small className="subtotal-gift">
                <input type="checkbox" />This order contains a gift
            </small>
            </>
           )}
           decimalScale={2}
           value={0}
           displayType={"text"}
           thousandSeparator={true}
    
           />
           <br /><br />
           <div className="proceed-btn-div">
           <button className="proceed-btn">Proceed to Checkout</button>
           </div>
           
        </div>
    )
    
};
