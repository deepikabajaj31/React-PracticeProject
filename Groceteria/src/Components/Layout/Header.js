import { Fragment } from "react";
import classes from './Header.module.css';
import image from '../../assests/items.png';
import HeaderCart from "./HeaderCart";
const Header=props=>{
return <Fragment>
<header className={classes.header}>
    <h1>Groceteria</h1>
    <HeaderCart onClick={props.onShowCart}/>
</header>
<div className={classes['main-image']}>
    <img src={image} alt=""/>
</div>
</Fragment>
};
export default Header;