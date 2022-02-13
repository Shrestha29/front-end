import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/addItem';
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
    let newTotal = Total;
    newTotal += newTotal[index].price;
    ++newProductList[index].quantity;
    setProduct(newProductList);
    setTotal(newTotal);
  };
  const decrementQuantity=(index)=>{
    let newProductList = [...Product];
    let newTotal = Total;
    if (newProductList[index].quantity>0){
      newProductList[index].quantity--
      newTotal -= newTotal[index].price;
    }
    setProduct(newProductList);
    setTotal(newTotal);
  };
  const resetQuantity=()=>{
    let newProductList = [...Product];
    newProductList.map((product) => {
    product.quantity = 0;
    })
    setProduct(newProductList);
    setTotal(0);
  };
  const removeItem = (index)=>{
    let newProductList = [...Product];
    let newTotal = Total;
    newTotal -= newProductList[index].quantity*newProductList[index].price;
    setTotal(newTotal);
    newProductList.splice(index,1);
    setProduct(newProductList);
  }
  const addItem = (name,price)=>{
    let newProductList = [...Product];
    newProductList.push({
      price: price,
      name : name,
      quantity:0,
    })
    setProduct(newProductList);
  }
  return (
  <>
  <Navbar/>
  <AddItem addItem={addItem}/>
  <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItem={removeItem}/>
  <Footer Total={Total} resetQuantity={resetQuantity}/>
  </>
  );
}

export default App;
