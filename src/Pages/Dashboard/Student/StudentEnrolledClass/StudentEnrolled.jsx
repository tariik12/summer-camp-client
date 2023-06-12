import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";


const StudentEnrolled = () => {

const student = useLoaderData()


    console.log(student)

    const price = student.price
 
    //TODO: PROVIDE PUBLISH KEY
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    return (
        <div className="w-full px-32">
            <h1>StudentEnrolled</h1>

            <Elements stripe={stripePromise}>
                <CheckoutForm price={price} student={student}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default StudentEnrolled;