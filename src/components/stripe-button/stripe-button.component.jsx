import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100
	const publishableKey =
		'pk_test_51HxtKUKnVxNTxrJSRZCHUmsOV8nxR2W2HDIAsTVxa6gtcdVEX0AlDdqpoZ6Zr1Iufkjg0qYrvtFiqjXdA4MbQYYp00xNpzCeMn'

	const onToken = (token) => {
		console.log(token)
		alert('Payment Successful')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total us $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton
