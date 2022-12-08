import React from 'react'
import '../App.css'
import axios from 'axios';
import { useEffect, useState } from 'react';


export const ProductsList = () => {

  let [data, setData] = useState([]);
let [loading, setLoading] = useState(true);

  useEffect( () => {

    setLoading(true)


  // fetch data from api
  axios({
    method:"GET",
    url:'http://localhost:8080/products'
  })
  .then(res => { 
    console.log(res.data);
   setData(res.data);
  }
  ).catch((e) => {
    console.log(`Error fetching data from the API... ${e}`);
  }).finally(setLoading(false));
  
 }, []);

// dispalay product and product details
  return (

    <div className='products-container'>

    {
    loading && ( 
 <div>
      {""} 
        <div><h1>Loading..</h1></div>
      </div>
        )}

      {data.map((product) => (
        
        <div key={product.id} className="card">

          <div><img src={`data:image/png;base64, ${product.image}`} alt="product image" /></div>  
          <div className='card-description'>
          <h6>{product.name}</h6>
          <h6>{product.price}</h6>
          <h6>{product.description}</h6>
          <h6>{product.category}</h6>          
          </div>  
        </div>
      ))}
 </div>
  )  
}
