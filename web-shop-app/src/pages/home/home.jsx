import React, { useEffect, useState } from 'react';
import "./home.css";
import { Product } from "./product";

const url = 'https://api.noroff.dev/api/v1/online-shop';


export const Home = ({products, setProducts, search, setSearch}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);


  if (isLoading) {
    return <div className='loader'></div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }

  return (
    <>
    <div className='main'>
      <h1>Products</h1>
      <div className='search-div'>
          <p>search product: </p>
          <input className='search-input' type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className='products'>
          {products.filter((val) => {
              if (search === "") {
                  return val
              }
              else if (val.title.toLowerCase().includes(search.toLocaleLowerCase())) {
                  return val
              }
          }).map((product,i) => (
              <Product key={i} data={product}/>
          ))}
      </div>
    </div>
    
    </>
    
  );
}

