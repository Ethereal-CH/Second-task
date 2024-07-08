import './App.css';
import search from './images/searchs.png';
import cart from './images/carts.png';
import headimage from './images/Rectangle 100.png';
import necklace from './images/Rectangle 170.png';
import earrings from './images/Rectangle 150.png';
import bracelet from './images/Rectangle 160.png';
import watch from './images/Rectangle 180.png';
import silver from './images/Rectangle 200.png';
import gold from './images/Rectangle 210.png';
import grey from './images/Rectangle 220.png';
import diamond from './images/Rectangle 230.png';
import love from './images/love.jpg';
import shop from './images/Rectangle 270.png';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';



function App() {
  return (
    <div className="task_2">

      <header>
        <nav className="navbar">
          <ul>
            <li><a href="a">HOME</a></li>
            <li><a href="a">SHOP</a></li>
            <li><a href="a">COLLECTION</a></li>
            <li><a href="a">CONTACT US</a></li>
            <img src= {search} alt="image"/>
            <img src= {cart} alt="image"/>
            <button className="btn"><a href="a">SIGN IN</a></button>
          </ul>
        </nav>

        <div className='sectionn'>
          <div className="heading">
            <h1>THE NEW RETRO</h1>
            <h2>GET ALL EXQUISITE AND LUXERY JEWELRY <br/>TO YOUR CONFIDENCE GOING</h2>
            <button className="btn"><a href="a">SHOP NOW</a></button>
          </div>

          <div className="heading">
            <img src= {headimage} alt="image"/>
          </div>
        </div>
      </header>

      <div className="sectioon">
        <div className="sectios">
          <div className='first-section'>
            <img src= {necklace} alt="image"/>
            <img src= {bracelet} alt="image"/>
          </div>

          <div className="first-section">
            <div className ="design">
              <ul>
                <li>EARRINGS</li>
                <li>NECKLACES</li>
                <li>RINGS</li>
                <li>WRIST WATCHES</li>
                <li>MORE...</li>
                </ul>
           </div>
          </div>

          <div className="first-section">
            <div className="phase">
              <img src= {earrings} alt="image"/>
              <img src= {watch} alt="image"/>
            </div>
          </div>

          <div className="first-section">
            <button className="btn"><a href="a">EXPLORE</a></button>
          </div>
        </div>
      </div>

      <div className="Section">
        <h1>BY PRODUCT</h1>
        <div className='Second-section'>
          <div className='products'>
            <img src= {silver} alt="imago"/>
            <h2>COMELIA BRACLETS <img src= {love} className="images" alt= "images"></img></h2>
            <h3>N2,300,000</h3>
          </div>

          <div className='products'>
            <img src= {gold} alt="imago"/>
            <h2>BOHO EARRINGS <img src= {love} className="images" alt= "images"></img> </h2>
            <h3>N800,000</h3>
          </div>

          <div className='products'>
            <img src= {grey} alt="imago"/>
            <h2>GALAXY RING <img src= {love} className="images" alt= "images"></img></h2>
            <h3>N1,000,000</h3>
          </div>

          <div className="products">
            <img src= {diamond} className="hang" alt="imago"/>
            <h2>KATERYNA </h2>
            <h3>N1,000,000</h3>
          </div>
        </div>
      </div>

      <div className="sections">
        <div class="last">
          <div className="last-sections">
            <h1>RE-IMAGINE CLASS <br/>WITH POISE</h1>
            <button className="btn"><a href="a">SHOP NOW</a></button>
          </div>

          <div className="last-section">
            <img src= {shop} alt="image"/>
          </div>
        </div>
      </div>

        <div className="footers">
          <div className="foot">
            <div className="footer">
              <img src= {facebook} alt="image"/>
              <img src= {instagram} alt="image"/>
            </div>

            <div className="footer">
              <h2>OUR SERVICES</h2>
              <h3>PREMIUM SALES</h3>
              <h3>CLASSIC SALES</h3>
              <h3>PLATNIUM PURCHASE</h3>
            </div>

            <div className="footer">
              <h2>PRODUCTS</h2>
              <h3>EARRINGS</h3>
              <h3>WRIST WATCHES</h3>
              <h3>BRACELETS</h3>
              <h3>RINGS</h3>
            </div>

            <div className="footer">
              <h2>POLICY</h2>
              <h3>REFUNDS</h3>
              <h3>LEGAL</h3>
              <h3>ABOUT US</h3>
              <h3>CONTACT US</h3>
            </div>

            <div className="footer">
              <h2>SIGN UP</h2>
              <h3>Get the Latest Update and Offers</h3>
              <button className="butt"><a href="a">Enter Email</a></button>   
              <button className="bch"><a href="a">SUBSCRIBE</a></button>
            </div>
          </div>
        </div>

    </div>
  );
}

export default App;
