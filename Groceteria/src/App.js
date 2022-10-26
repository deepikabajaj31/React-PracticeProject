import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart/Cart';
import Items from './Components/Items/Items';
import Header from './Components/Layout/Header';
import CartProvider from './Store/CartProvider';

function App() {
  const[cartIsShown,setCartInShown] = useState(false);
  const showCartHandler=()=>{
    setCartInShown(true);
  }
  const hideCartHandler=()=>{
    setCartInShown(false);
  }
  return (
   <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Items/>
    </main>
   </CartProvider>
  );
}

export default App;
