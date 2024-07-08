import "../../App.css";
import search from "../../images/searchs.png";
import cart from "../../images/carts.png";
import { Link } from "react-router-dom";
export const CartPage = () => {
    return(
        <div>
            <header>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
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
      </header>
        </div>
    )
}