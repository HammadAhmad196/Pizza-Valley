import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderActions';
import Success from '../components/Success';
import Error from '../components/Error';
import Loading from '../components/Loading'

export default function Checkout({ subtotal }) {
    const orderstate = useSelector((state) => state.placeOrderReducer)
    const { error, loading, success } = orderstate
    const dispatch = useDispatch()
    function tokenHandler(token) {
        console.log(token)
        dispatch(placeOrder(token, subtotal))
    }
    return (
        <div>

            {loading && (<Loading/>)}
            {error && (<Error error ='Something went wrong'/>)}
            {success && (<Success success="Your order placed successfully"/>)}

            <StripeCheckout

                amount={subtotal * 100}
                shippingAddress={subtotal}
                token={tokenHandler}
                currency='INR'
                stripeKey='pk_test_7QVTqcGDR5N4uDo6Ri1EjRdq00vieDigjL'
            >
                <button className="btn">Pay Now</button>
            </StripeCheckout>

        </div>
    )
}
