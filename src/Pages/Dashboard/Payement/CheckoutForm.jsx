import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from '../../../Hook/useAxiosSecure'
import useCart from '../../../Hook/useCart'
import { AuthContext } from "../../../Provider/AuthProvider";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const [cart] = useCart();
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    useEffect(() => {
        const res = axiosSecure.post('/create-checkout-session', { price: totalPrice })
            .then(res => {
                console.log(res.data)
                setClientSecret(res.data.clientSecret);
            })
    }, [axiosSecure, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setErrorMessage("");

        if (!stripe || !elements) {
            setLoading(false);
            setErrorMessage("Stripe has not loaded yet. Please try again.");
            return;
        }

        const card = elements.getElement(CardElement);
        if (!card) {
            setLoading(false);
            setErrorMessage("Payment information is incomplete.");
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            console.error("Payment Error", error);
            setErrorMessage(error.message);
            setLoading(false);
        } else {
            console.log("Payment Method", paymentMethod);

            // TODO: Send `paymentMethod.id` to your server for processing the payment
            // Example:
            // const response = await fetch('/pay', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ paymentMethodId: paymentMethod.id })
            // });

            const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'

                    }
                }
            })

            if (error) {
                console.log('confirm error')
            }
            else {
                console.log('payment intent', paymentIntent)
                if (paymentIntent.status == 'succeeded') {
                    console.log('transaction id', paymentIntent.id);
                    setLoading(false);
                    alert("Payment successful!");
                    setTransactionId(paymentIntent.id);
                }
            }
        }
    };

    return (
        <div className="flex justify-center items-center">
            <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                    <div className="border border-gray-300 rounded-md p-3">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                        />
                    </div>
                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                    <button
                        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        type="submit"
                        disabled={!stripe || !clientSecret || loading}
                    >
                        {loading ? "Processing..." : "Pay"}
                    </button>
                    {
                        transactionId && <p className="text-green-600">Your Transaction Id {transactionId}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default CheckoutForm;
