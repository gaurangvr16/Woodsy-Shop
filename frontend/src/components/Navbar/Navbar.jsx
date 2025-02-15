import { Call } from "@material-ui/icons";
import React, { lazy, useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CartContext from "../../context/cart-context";
import CartSlider from "../CartSlider/CartSlider";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(()=>{
    const Nav = document.querySelector("#nav-wrap");
    const menuLine = document.getElementsByClassName("line");
    const cart = document.querySelector(".cart-icon-container");
    location.pathname==="/"?Nav.classList.add("nav-container-trans"):Nav.classList.add("nav-container");
    for(var i=0;i<menuLine.length;i++){
      location.pathname==="/"?menuLine[i].classList.add("line-trans"):menuLine[i].classList.remove("line-trans");
    }
    location.pathname==="/"?Nav.classList.remove("nav-container"):Nav.classList.remove("nav-container-trans");
    location.pathname==="/"?cart.classList.add("cart-icon-container-trans"):cart.classList.remove("cart-icon-container-trans");
  });

  const cartCtx = useContext(CartContext);
  const numberOfCartProducts = cartCtx.products.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  const toggleCart = () => {
    setIsCartActive((prevState) => !prevState);
  };
  const redirectToHome = () => {
    toggleMenu();
    navigate("/");
  };
  const redirectToStore = () => {
    toggleMenu();
    navigate("/products");
  };
  const redirectToOurProducts = () => {
    toggleMenu();
    navigate("/our-products");
  };
  const redirectToAbout = () => {
    toggleMenu();
    navigate("/about");
  };

  return (
    <div>
      <div className="nav-container" id="nav-wrap">
        <div className={`menu-container menu ${isMenuActive && "opened"}`} onClick={toggleMenu} aria-label="Main Menu">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
          </svg>
        </div>

        <div href="../Home/Home.jsx" className="logo-container"></div>

        <div className="cart-icon-container" onClick={toggleCart}>
          <svg
            width="35"
            height="39"
            viewBox="0 0 35 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M25.4159 7.71838H24.2749C24.2749 5.70359 23.5446 3.77131 22.2445 2.34663C20.9444 0.921957 19.1812 0.121582 17.3426 0.121582C15.504 0.121582 13.7408 0.921957 12.4407 2.34663C11.1406 3.77131 10.4103 5.70359 10.4103 7.71838H8.97029C7.87031 7.71365 6.80201 8.12173 5.94306 8.87475C5.08412 9.62777 4.48631 10.6803 4.24906 11.8574L0.11799 32.0437C-0.0208926 32.7255 -0.0352592 33.4307 0.0757183 34.1187C0.186696 34.8067 0.420823 35.4638 0.764606 36.0521C1.10839 36.6405 1.55503 37.1484 2.07878 37.5467C2.60254 37.9451 3.19305 38.2258 3.81628 38.3729C4.1622 38.4593 4.5159 38.5027 4.87069 38.5022H29.547C30.8304 38.5022 32.0613 37.9435 32.9688 36.949C33.8764 35.9545 34.3862 34.6056 34.3862 33.1991C34.3866 32.8104 34.347 32.4227 34.2682 32.0437L30.1371 11.8574C29.8999 10.6803 29.3021 9.62777 28.4431 8.87475C27.5842 8.12173 26.5159 7.71365 25.4159 7.71838ZM17.3111 1.87204C18.733 1.86516 20.0993 2.47698 21.1099 3.57314C22.1206 4.6693 22.6929 6.16018 22.7012 7.71838H11.9525C11.9608 6.16616 12.5288 4.6805 13.5326 3.58532C14.5364 2.49014 15.8946 1.87429 17.3111 1.87204ZM32.0964 35.4325C31.7911 35.8523 31.4033 36.1913 30.9619 36.4242C30.5205 36.6571 30.0369 36.778 29.547 36.7777H4.83922C3.97315 36.7777 3.14255 36.4006 2.53015 35.7295C1.91775 35.0584 1.5737 34.1482 1.5737 33.1991C1.57611 32.9382 1.60247 32.6782 1.65239 32.4231L5.78346 12.2368C5.94213 11.4415 6.34525 10.73 6.92537 10.2214C7.50548 9.71282 8.22739 9.43802 8.97029 9.44297H10.3709V13.5906C10.3709 13.8193 10.4538 14.0386 10.6014 14.2003C10.749 14.362 10.9491 14.4529 11.1578 14.4529C11.3665 14.4529 11.5666 14.362 11.7142 14.2003C11.8618 14.0386 11.9447 13.8193 11.9447 13.5906V9.44297H22.7012V13.5906C22.7012 13.8193 22.7841 14.0386 22.9317 14.2003C23.0792 14.362 23.2794 14.4529 23.4881 14.4529C23.6968 14.4529 23.8969 14.362 24.0445 14.2003C24.192 14.0386 24.2749 13.8193 24.2749 13.5906V9.44297H25.4474C26.1835 9.44785 26.8962 9.72715 27.4683 10.2349C28.0403 10.7427 28.4376 11.4487 28.5949 12.2368L32.7259 32.4231C32.8332 32.9443 32.8324 33.4854 32.7234 34.0062C32.6145 34.5271 32.4002 35.0145 32.0964 35.4325Z" />
          </svg>
          <div className="cart-badge">
            <p className="cart-badge-no">{numberOfCartProducts}</p>
          </div>
        </div>
      </div>
      <div
        className={`slide-in-menu ${!isMenuActive && "slide-in-menu-close"}`}
      >
        <div className="menu-link" onClick={redirectToHome}>Home</div>
        <div className="menu-link" onClick={redirectToStore}>Shop</div>
        <div className="menu-link" onClick={redirectToAbout}>About</div>
        <div className="menu-link" onClick={redirectToOurProducts}>Our Products</div>
      </div>
      <CartSlider isCartActive={isCartActive} toggleCart={toggleCart} />
    </div>
  );
};

export default Navbar;
