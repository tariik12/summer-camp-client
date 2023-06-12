import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import UseAuth from "../../../../Hooks/UseAuth/UseAuth";
// import './checkout.css'



const CheckoutForm = ({ price, student }) => {
  const [axiosSecure] = useAxiosSecure()
  const stripe = useStripe()
  const { user } = UseAuth()
  const elements = useElements()
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState()


  useEffect(() => {
   if(price>0){
    axiosSecure.post('/create-payment-intent', { price })
    .then(res => {
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
   }
  }, [price, axiosSecure])

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement)

    if (card == null) {
      return
    }
    console.log('card: ', card)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })

    if (error) {
      setCardError(error.message)
    }
    else {
      setCardError('')
      console.log('paymentMethod', paymentMethod)
    }
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      },
    );


    if (confirmError) {
      console.log(confirmError)
    }
    console.log('payment Intent', paymentIntent)
    setProcessing(false)
    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id)
      //TODO NEXT STEPSET
      { student }
      console.log('student', student)
      const payment = {
        instructorEmail: student.instructorEmail,
        instructorName: student.instructorName,
        languageName: student.languageName,
        studentSelectedId: student._id,
        classId: student.classId,
        price: student.price,
        transactionId: paymentIntent.id,
        date: new Date(),
        status: paymentIntent.status,
        seatBooking: student.seatBooking+1,
        seats: student.seats -1,
        studentEmail: student.studentEmail

          }
          axiosSecure.post('/payments', payment)
          .then(res =>{
           
              console.log(res.data)

              const classes = {
                seatBooking: student.seatBooking+1,
                seats: student.seats -1,
              }

    fetch(`http://localhost:5000/ShowClasses/${student.classId}`, {
      method: "PATCH",
      headers: {
        'content-type': 'application/json',
        
      },
      body: JSON.stringify(classes)
     })
       .then(res => res.json())
       .then(data => {
        console.log(data)
       
        
       })
    
              
      }
          )
        }
    }
return (
  <div>
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
      <button className="btn btn-info" type="submit" disabled={!stripe || !clientSecret || processing}>
        Pay
      </button>
    </form>
    {cardError && <p className="text-red-600">{cardError}</p>}
    {transactionId && <p className="text-green-700">Transaction complete with transactionId</p>}
  </div>
);
};

export default CheckoutForm;