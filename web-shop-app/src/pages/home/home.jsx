import React, { useEffect, useState } from 'react';
import "./home.css";

const url = 'https://api.noroff.dev/api/v1/online-shop';

export function Home() {
  const [search, setSearch] = useState('');
  console.log(search)
  const [posts, setPosts] = useState([]);
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
        setPosts(json);
        // Clear the loading state once we've successfully got our data
        setIsLoading(false);
        console.log(posts)
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
    <div>
        <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div className='products'>
        {posts.filter((val) => {
            if (search === "") {
                return val
            }
            else if (val.title.toLowerCase().includes(search.toLocaleLowerCase())) {
                return val
            }
        }).map((val, key) => {
            return <div className='product' key={key}>
                <h2>{val.title}</h2>
                <img src={val.imageUrl} className="product-img" alt="" srcset="" />
                <h4>$ {val.price}</h4>
                <p>{val.description}</p>
            </div>
        })}
    </div>
    </>
    
  );
}

