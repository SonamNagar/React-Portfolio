import React from "react";
import "./CafeMenu.css";

const CafeMenu = () => {
  return (
    <div>
      <div className="boxtitle">
        <h1>DESTINY CAFE MENU</h1>
        <p className="title">Where Every Bite Is a Step Towards Your Destiny!</p>
      </div>

      <hr />

      {/* TEA & COFFEE / BURGERS */}
      <div className="container">
        <div className="leftbox">
          <h3 className="tea">TEA & COFFEE</h3>
          <span className="burger">Tea ................................................₹10</span>
          <span className="burger">Coffee ............................................₹20</span>
          <span className="burger">Cold Coffee ....................................₹50</span>
        </div>

        <div className="rightbox">
          <h3 className="tea">BURGERS</h3>
          <span className="white">Veg Burger ........................................................₹40</span>
          <span className="burger">A classic vegetarian burger for the burger lovers.</span>
          <span className="white">Veg Cheese Burger .............................................₹50</span>
          <span className="burger">A delicious burger topped with melted cheese.</span>
        </div>
      </div>

      {/* PASTA / SHAKES */}
      <div className="pastacontainer">
        <div className="leftbox">
          <h3 className="tea">PASTA</h3>
          <h4 className="white">White Cheese Pasta.............₹65</h4>
          <p className="burger">A creamy delight with rich white cheese and herbs.</p>
          <h4 className="white">Red Sauce Pasta..................₹60</h4>
          <p className="burger">Tossed in our homemade tangy red sauce.</p>
          <h4 className="white">Makhani Pasta......................₹50</h4>
          <p className="burger">Pasta enveloped in a velvety makhani sauce.</p>
        </div>

        <div className="rightbox">
          <h3 className="tea">SHAKES</h3>
          <h4 className="white">Oreo Shake ................₹60</h4>
          <p className="burger">A delicious blend of creamy vanilla and oreo crumbles.</p>
          <h4 className="white">Kitkat Shake....................₹60</h4>
          <p className="burger">Rich and indulgent, perfect for chocolate lovers.</p>
          <h4 className="white">Cadbury Shake..............................₹60</h4>
          <p className="burger">Creamy and chocolaty, this shake is pure bliss!</p>
        </div>
      </div>

      {/* SANDWICHES / BITES & PIZZA */}
      <div className="sandwith">
        <div className="leftboxone">
          <h3 className="tea">SANDWICHES</h3>
          <h4 className="white">Grilled Vegetable Sandwich ..........₹50</h4>
          <p className="burger">Fresh grilled Vegetables served on toasted bread.</p>
          <h4 className="white">Corn Cheese Sandwich...................₹60</h4>
          <p className="burger">A hearty sandwich filled with sweet corn and melted cheese</p>
        </div>

        <div className="rightboxsand">
          <div className="rightboxbites">
            <h3 className="tea">BITES</h3>
            <h4 className="white">Plain Fries ..........₹40</h4>
            <p className="burger">Crispy and golden, the perfect snack!</p>
            <h4 className="white">Peri Peri Fries...................₹50</h4>
            <p className="burger">Spiced up for those who like a kick!</p>
            <h4 className="white">Cheese Peri Peri Fries................₹60</h4>
            <p className="burger">Topped with melted cheese and peri peri seasoning.</p>
          </div>

          <div className="rightboxpizza">
            <h3 className="tea">PIZZA</h3>
            <h4 className="white">Vegetable Pizza.........................₹60</h4>
            <p className="burger">A delightful mix of fresh veggies on a cheesy base.</p>
            <h4 className="white">Sweet Corn Cheese Pizza .................₹70</h4>
            <p className="burger">A cheesy delight with a generous layer of sweet corn.</p>
            <h4 className="white">Double Cheese Pizza ............₹80</h4>
            <p className="burger">For cheese lovers, this is a slice of heaven!</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-box">
            <h3>DESTINY CAFE</h3>
            <p>Where Every Bite Is a Step Towards Your Destiny</p>
          </div>

          <div className="footer-box">
            <h3>Contact Us</h3>
            <p>📞 +91 98765 43210</p>
          </div>

          <div className="footer-box">
            <h3>Opening Hours</h3>
            <p>Mon – Sat: 9 AM – 10 PM</p>
            <p>Sunday: 9 AM – 8 PM</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Destiny Cafe | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default CafeMenu;
