import "../../App.css";
import "./cart.css";
import search from "../../images/searchs.png";
import cart from "../../images/carts.png";
import { Link } from "react-router-dom";
import golds from "../../images/Rectangle 35.png";
import ring from "../../images/Rectangle 37.png";
import brace from "../../images/Rectangle 38.png";
import watches from "../../images/Rectangle 39.png";
import bangles from "../../images/Rectangle 40.png";
import pin from "../../images/Rectangle 41.png";
import galaxy from "../../images/Rectangle 42.png";
import cubana from "../../images/Rectangle 46.png";
import love from "../../images/outlined.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";


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

                  <button className="btn">
                    <a href="a">SIGN IN</a>
                  </button>
                </ul>
              </nav>

             <div className="heading">
               <h1>STRIDE DOWN YOUR MUSE</h1>
             </div>

            <div className="section">
              <img src={golds} alt="image" />
              <h1>GET ALL EXQUISITE AND LUXERY JEWELRY TO YOUR CONFIDENCE GOING</h1>
              <button class="shop"><a href="a">SHOP NOW</a></button>
              
            </div>
          </header>

          <div className="sections">
            <h1>BY PRODUCT</h1>

            <div className="sect">
              <div className="first-section">
                <img src={ring} alt="image" />
                <h3>RINGS</h3>
            </div>

              <div className="first-section">
                <img src={brace} alt="image" />
                <h3>EARRINGS</h3>
              </div>

              <div className="first-section">
                <img src={watches} alt="image" />
                <h3>WRISTWTCHES</h3>
              </div>

              <div className="first-section">
                <img src={bangles} alt="image" />
                <h3>BRACELETS</h3>
              </div>
            </div>
          </div>

      <div className="Sectionn">
        <h1>ARRIVALS</h1>

        <div className="second-sectionns">
          <div className="second-sectionn">
            <img src={pin} alt="image"/>
            <h2>KATERYNA <img src={love} className="loves"></img></h2>
            <h4>N1,000,000</h4>
          </div>

          <div className="second-sectionn">
            <img src={galaxy} alt="image"/>
            <h2>GALAXY <img src={love} className="loves"></img></h2>
            <h4>N1,000,000</h4>
          </div>
        </div>
      </div>

      <div className="Sectionss">
        <Link className={"link-styles"} to="/">SHOW ALL ARRIVALS </Link>
        <div className="third-section">
          <img src={cubana} alt="image"/>
          <h2>BEST SELLERS</h2>
          <Link className={"styles"} to="/">EXPLORE</Link>
        </div>
      </div>

    <div className="footers">
      <div className="footer">
        <button class="btn"><a href="a">SIGN UP</a></button>
        <h1>Get the Latest Update and Offers</h1>
        <button class="email"><a href="a">Enter Email</a></button>
        <button class="sub"><a href="a">SUSCRIBE</a></button>
      </div>

      <div className="foot"> 
        <div className="foots">
          <img src={facebook} alt="image"/>
          <img src={instagram} alt="image"/>
        </div>

        <div className="foots">
          <h1>OUR SERVICES</h1>
          <h4>PREMIUM SALES</h4>
          <h4>CLASSIC SALES</h4>
          <h4>PLATNIUM PURCHASE</h4>
        </div>

        <div className="foots">
          <h1>PRODUCTS</h1>
          <h4>WRIST WATCHES</h4>
          <h4>BRACELETS</h4>
          <h4>RINGS</h4>
        </div>

        <div className="foots">
          <h1>POLICY</h1>
          <h4>REFUNDS</h4>
          <h4>LEGAL</h4>
          <h4>ABOUT US</h4>
          <h4>CONTACT US</h4>
        </div>
      </div>
    </div>


    </div>
    )
}