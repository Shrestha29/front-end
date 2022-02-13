import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

import React,{useState} from 'react';

import './App.css';

function App() {
  const productList = [
    {
      price: 9999,
      name: "Iphone",
      quantity : 1,
    },
    {
      price: 8999,
      name: "OnePlus",
      quantity : 1,
    }
  ];
  let [Product,setProduct] = useState(productList)
  let [Total,setTotal]= useState(0)
  const incrementQuantity=(index)=>{
    let newProductList = [...Product];
    let newTotal = [...Total];
    newTotal += newTotal[index].price;
    ++newProductList[index].quantity;
    setProduct(newProductList);
    setTotal(newTotal);
  };
  const decrementQuantity=(index)=>{
    let newProductList = [...Product];
    let newTotal = [...Total];
    if (newProductList[index].quantity>0){
      newProductList[index].quantity--
      newTotal -= newTotal[index].price;
    }
    setProduct(newProductList);
    setTotal(newTotal);
  };
  return (
  <>
  <Navbar/>
  <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
  <Footer/>
  </>
  );
}

export default App;
