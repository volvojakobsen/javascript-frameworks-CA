import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import "./productDetails.css";


export const ProductDetails = () => {
    /*
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);

    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    */
   const id = useParams(); 
   const [singleProduct, setSingleProduct] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
 
   useEffect(() => {
     async function getData() {
       try {
         setIsError(false);
         setIsLoading(true);
         const response = await fetch(`https://api.noroff.dev/api/v1/online-shop/${id.id}`);
         const json = await response.json();
         setSingleProduct(json);
         setIsLoading(false);
       } catch (error) {
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
  /*console.log(singleProduct);*/
  console.log(singleProduct.reviews);

   return <>
    <div>
        <div className="singleItem">
            <img src={singleProduct.imageUrl} className="singleProductImage" alt="" srcset="" />
            <div className="details">
               <h2>{singleProduct.title}</h2>
              <div>
                <h3>{singleProduct.price}</h3>
              </div>
              <h1>Rating: {singleProduct.rating} of 5</h1>
              <div>
                  <button onClick={() => removeFromCart(id.id)}> - </button>
                  <input value={cartItems[id.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id.id)} />
                  <button onClick={() => addToCart(id.id)}> + </button>
              </div>
              <p>{singleProduct.description}</p>
              <div>
              <h4>reviews</h4>
              {singleProduct.reviews && singleProduct.reviews.map(post =>{
                return (
                  <div className="singleReview" key={post.id}>
                    <div className="name"><div>By: {post.username}</div>rated it: {post.rating} of 5.</div>
                    <div className="comment">{post.description}</div>
                  </div>
                );

              })};
              </div>
              
            </div>
        </div>
    </div>
    </>
};

/*
<div className="reviews">
                {singleProduct.reviews.map((singleProduct) => {
                  if(singleProduct.reviews > 0) {
                      return <Reviews data={singleProduct} />
                  }
                })}
            </div>
            */




            /*

            <div>
              <h4>reviews</h4>
              {singleProduct.reviews.map(post =>{
                return (
                  <div className="singleReview">
                    <div className="name"><div>By: {post.username}</div>rated it: {post.rating} of 5.</div>
                    <div className="comment">{post.description}</div>
                  </div>
                );

              })};
              </div>
              */