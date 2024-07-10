import "../../App.css";
import "./cart.css";
import search from "../../images/searchs.png";
import cart from "../../images/carts.png";
import { Link } from "react-router-dom";
import golds from "../../images/Rectangle 35.png";
import rose from "../../images/Rectangle 34.jpg";



export const CartPage = () => {
    return(

        <div>

            <header>
              <nav className="navbar">
                <ul>
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <a href="a">SHOP</a>
                  </li>
                  <li>
                    <a href="a">COLLECTION</a>
                  </li>
                  <li>
                    <a href="a">CONTACT US</a>
                  </li>
                    <img src={search} alt="image" />
                  <li>
                    <Link to="/cart">
                    <img src={cart} alt="image" />
                    </Link>
                  </li>
                </ul>
              </nav>

              <div className="heading">
                <div className="display">
                  <h2>ORDER SUMMARY</h2>
                  <p>1 Item</p>
                </div>
              </div>

             <div className="contents">
               <div className="content">
               <img src={rose} alt="image" />
            </div>
          </div>

          <div className="gall">
            <div class="galaxy">
             <h3>GALAXY EARRINGS <span>1x</span></h3>
             <h5>n950,000</h5>
            </div>
          </div>
    
          <div className="ship">
            <h4>SHIPPING </h4>
            <h6>Free</h6>
          </div>
    
          <div className="total">
            <h4>TOTAL</h4>
            <h5>n950,000</h5>
          </div>
  
      </header>

      <div className="sections">
        <h1>PAY WITH CARD</h1>
        <input type="text" name="email" value={"Email"}/>
        <h2>CARD INFORMATION</h2>
        <input type="text"name="card" value={"1234 1234 1234 1234"}/>
        <p></p>
        <input type="text" name="expire" value={"MM / YY"}/>
        <p></p>
        <input type="text" name="cv" value={"CVV"}/>
        <h3>CARDHOLDER NAME</h3>
        <input type="text" name="name" value={"Full name on card"}/>
        <p></p>
        <h4>BILLING ADDRESS</h4>
        <input type="text" name="country" value={"Nigeria"}/>
        <p></p>
        <input type="text" name="adress" value={"Address"}/>
      </div>
      
      <div className="checks">
         <input type="checkbox" name="check"/>
         <label for="check">Securely save my information for 1-click checkout</label>    
         <p></p>
         <button className="bott"><a href="a">PURCHASE</a></button>
      </div>



    </div>
    )
}