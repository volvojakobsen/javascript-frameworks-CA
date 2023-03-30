import React, { useEffect, useState } from 'react';
import "./home.css";
import { Product } from "./product";

const url = 'https://api.noroff.dev/api/v1/online-shop';


export const Home = ({products, setProducts, search, setSearch}) => {
  // State for holding our loading state
  const [isLoading, setIsLoading] = useState(false);
  // State for holding our error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        // Reset the error state in case there as an error previously
        setIsError(false);
        // Turn on the loading state each time we do an API call
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json);
        
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
      } catch (error) {
        // Clear the loading state if we get an error and then
        // set our error state to true
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);


  if (isLoading) {
    return <div>Loading posts</div>;
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
          }).map((product) => (
              <Product data={product}/>
          ))}
      </div>
    </div>
    
    </>
    
  );
}

