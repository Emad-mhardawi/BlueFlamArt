import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Components/Button/Button";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51I9YoTK3puAHTtgASIzHrIRtq7o587xeiBhQmKUKgVvNAnRQ3aB4tEeIwhk1Hbh70J1uNzqtaDd5PLx4V0DMdnqv00L3BteyaZ");

const OverView = ()=>{
    const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
    const orderData = useSelector((state) => state.collectOrderData);
    const {portraitName,portraitStyle, portraitSize, fullBody, commentToArtist, image } = orderData;

    console.log(image.name)


    const checkout = async ()=>{

        const formData = new FormData();
        formData.append('image', image, image.name)
        formData.append('portraitName', portraitName)
        formData.append('portraitStyle', portraitStyle)
        formData.append('portraitSize', portraitSize)
        formData.append('fullBody', true)
        formData.append('commentsToArtist', commentToArtist)

        const checkoutSession = await axios({
            method: "POST",
            url: "http://localhost:5000/create-checkout-session",
            data: formData,
            headers: {token: 'Bearer '+ userInfo.token }
        });

        const sessionId = await checkoutSession.data.id;
        console.log(sessionId)
       const stripe = await stripePromise;
        const result = await stripe.redirectToCheckout({
            sessionId: sessionId
        })
        
    }

    
return(
    <div>
    <h3>portraitName:  {portraitName}</h3>
    <h3>portraitSize:  {portraitSize}</h3>
    <h3>fullBody:  {fullBody}</h3>
    <h3>commentToArtist:  {commentToArtist}</h3>
    <Button clicked ={checkout} className ='checkout-button'>check out</Button>
   
    </div>
)
}

export default OverView;