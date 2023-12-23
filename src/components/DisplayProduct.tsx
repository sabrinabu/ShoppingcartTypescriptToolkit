import React, { useEffect, useState } from 'react'
import datas from "../data";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addProduct } from '../redux/cartSlice';

export default function DisplayProduct() {

    console.log(datas)
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.cart.productlist);

    console.log(data);
  
    const handleData = () => {
      let arr = datas.map((d) => dispatch(addProduct(d)));
    };
  
    useEffect(() => {
      handleData();
    }, []);
  return (
    <div>{data.map((d)=>(
        <span>{d.name}</span>
    ))}</div>
  )
}
