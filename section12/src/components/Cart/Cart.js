import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart(props) {
  const cartCtx = useContext(CartContext);
  // console.log('cartCtx', cartCtx);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    // console.log('id', id);
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // console.log('cartCtx.items', cartCtx.items);
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasitems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}
