import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const CheckOutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const fixedAmount = 2000; 
    const [clientSecret, setClientSecret] = useState("");
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: fixedAmount })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
            .catch(error => console.error('Error creating payment intent:', error));
    }, [axiosSecure]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('Payment error:', error);
            setError(error.message);
            return;
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        });

        if (confirmError) {
            console.log('Confirm error:', confirmError);
            setError(confirmError.message);
        } else {
            console.log('Payment Intent:', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('Transaction ID:', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                const payment = {
                    email: user.email,
                    price: fixedAmount / 100, 
                    transactionId: paymentIntent.id,
                    date: new Date(),
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending'
                };

                try {
                    const res = await axiosSecure.post('/payments', payment);
                    console.log('Payment saved:', res.data);
                    refetch();
                } catch (error) {
                    console.error('Error saving payment:', error);
                }
                navigate('/dashboard/myProfile')
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button type="submit" className='btn-primary bg-indigo-600 p-2 my-4 text-2xl' disabled={!stripe || !clientSecret}>
                Pay $20
            </button>
            <p className='text-red-600'>{error}</p>

            {transactionId && <p className='text-green-600'>Your transaction id: {transactionId}</p>}
            <Helmet>
                <title>Card Payment</title>
            </Helmet>
        </form>
    );
};

export default CheckOutForm;
