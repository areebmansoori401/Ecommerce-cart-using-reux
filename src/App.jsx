import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem } from "./config/redux/reducer/cartslice";



const App = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector(state => state.cart.cartItem); 



  useEffect(() => {

    axios('https://dummyjson.com/products')
      .then((res) => {
        setProducts(res.data.products);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);



  const addToCart = (item) => {
    dispatch(addCartItem({ 
      item
    }));
  };
  

  return (
    <>
      <h1 className='text-center'>Ecommerce cart using redux</h1>

      <div>
        <button>Cart <div>{selector.length}</div></button>
      </div>

      <div>
        {products ? products.map((item) => (
          <div key={item.id}>
            <img src={item.thumbnail} alt="productImg" />
            <h2><span>Brand: </span>{item.title.slice(0, 10) + "..."}</h2>
            <h1><span>Price: </span>${item.price}</h1>
            <button onClick={() => addToCart(item)}>Add To Cart</button>
          </div>
          
        )) : <h1>Item not found!</h1>}
      </div>
    </>
  );
};

export default App;
