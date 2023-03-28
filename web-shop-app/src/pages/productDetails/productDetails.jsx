import React, {useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";


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
  console.log(singleProduct);

   return <>
    <div>
        <h2>{singleProduct.title}</h2>
        <div>
            <img src={singleProduct.imageUrl} alt="" srcset="" />
            <div>
              <h3>{singleProduct.price}</h3>
            </div>
            <div>
                <button onClick={() => removeFromCart(id.id)}> - </button>
                <input value={cartItems[id.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id.id)} />
                <button onClick={() => addToCart(id.id)}> + </button>
            </div>
        </div>
    </div>
    </>
};