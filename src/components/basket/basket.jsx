import React from 'react';
import { ReactComponent as BasketIcon } from 'assets/basket.svg';
import css from './basket.module.scss'
import { Link } from 'react-router-dom';

export default function Basket() {
  return (
    <button type='button' className={css.basket}>
      <div className={css.basketBox}>
      <span className={css.basketValue}>0</span>
      <BasketIcon  className={css.basketIcon}/>
      </div>
      <div className={css.basketSum}>1000.0 грн</div>
      <Link to="/Personal">Система знижок</Link>
    </button>
  );
}
