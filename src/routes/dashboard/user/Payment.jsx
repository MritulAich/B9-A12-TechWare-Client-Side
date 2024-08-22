import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Publ_Key);
const Payment = () => {

    return (
        <div className='ml-12 mt-4'>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;