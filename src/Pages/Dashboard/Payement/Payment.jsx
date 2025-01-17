import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";


const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
            <SectionTitle heading={'PAYMENT'} subHeading={'Please Pay the Cart'}></SectionTitle>
            <div className="text-center mx-36 mt-10">
                <Elements stripe={stripePromise} >
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;