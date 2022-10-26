import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import classes from './HeaderCart.module.css'
import CartContext from "../../Store/cart-context";
const HeaderCart = props => {
   const [buttonAnimation, setButtonAnimation] = useState(false);
   const cartCtx = useContext(CartContext);
   const { items } = cartCtx;//object destructuring
   useEffect(() => {
      if (items.length === 0) {
         return;
      }
      setButtonAnimation(true);
      const timer = setTimeout(() => {
         setButtonAnimation(false);
      }, 300)
      return () => {
         clearTimeout(timer);
      }
   }, [items]);
   const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
   }, 0);
   const btnClasses = `${classes.button} ${buttonAnimation ? classes.bump : ""}`;
   return (
      <button className={btnClasses} onClick={props.onClick}>
         <span className={classes.icon}><CartIcon /></span>
         <span>Your cart</span>
         <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
   )
}
export default HeaderCart;