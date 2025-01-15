import React , { useState }  from 'react'
import { Select } from '../../Components/FormComponents/Select'
import { Input } from '../../Components/FormComponents/Input'
import { Checkbox } from '../../Components/FormComponents/Checkbox'
import {loadStripe} from '@stripe/stripe-js';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Checkout = () => {
    const cart = useSelector((state) => state.cart);
    const [formData, setFormData] = useState({
        cardName: '',
        address:"",
        cardNumber: '',
        expiryDate: '',
        cvc: '',
        country: '',
        saveInfo: false,
      })

      const apiUrl="http://localhost:3000"
    
      const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
      }
    
      const handleCheckboxChange = (e) => {
        setFormData((prev) => ({ ...prev, saveInfo: e.target.checked }))
      }
    
    //   const handleSubmit = async(e) => {
    //     e.preventDefault()
    //     console.log('Form submitted:', formData)

    //     // send the data to payment processor
    //     const stripe = await loadStripe('pk_test_51Qh8djCKxfS1go2S29mQbRlB7q4Q8yxtUIZKpyNLsGNmZFrqJruXbKb8Lxdjfs7JeOddRb8fK2jwnrsdQFUS3V8A00zwnU9ZhL');
    //     console.log("cart",cart)
    //     const body ={
    //         products:cart.cartItems
    //     }
    //     const headers={
    //         'Content-Type':'application/json'
    //     }
    //     const response=await axios.post(`${apiUrl}/api/v1/create-checkout-session`,{
    //         headers:headers,
    //         body:JSON.stringify(body)
    //     })

    //     const session= await response.json()
    //     const result=stripe.redirectToCheckout({
    //         sessionId:session.id
    //     })
        
      
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    
        // Load Stripe
        const stripe = await loadStripe('pk_test_51Qh8djCKxfS1go2S29mQbRlB7q4Q8yxtUIZKpyNLsGNmZFrqJruXbKb8Lxdjfs7JeOddRb8fK2jwnrsdQFUS3V8A00zwnU9ZhL');
    
        if (!stripe) {
            console.error('Stripe failed to load');
            return;
        }
    
        console.log("Cart:", cart);
    
        // sedning product details from the cart to

        const body = {
            products: cart.cartItems,
        };
    
        try {
            // Send request to your backend to create the checkout session
            const response = await axios.post(
                `${apiUrl}/api/v1/create-checkout-session`,
                body,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
    
            // Extract session ID from the response
            const { id: sessionId } = response.data;
    
            // Redirect to Stripe checkout
            const result = await stripe.redirectToCheckout({ sessionId });
    
            if (result.error) {
                console.error('Stripe Checkout error:', result.error.message);
            }
        } catch (error) {
            console.error('Error creating checkout session:', error.message || error);
        }
    };




  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Name on card"
          id="cardName"
          name="cardName"
          type="text"
          required
          value={formData.cardName}
          onChange={handleInputChange}
          placeholder="John Doe"
        />
         <Select
          label="Address"
          id="address"
          name="address"
          required
          value={formData.address}
          onChange={handleInputChange}
          options={[
            { value: '', label: 'Select a Address' },
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'au', label: 'Australia' },
          ]}
        />
        <Input
          label="Card number"
          id="cardNumber"
          name="cardNumber"
          type="text"
          required
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
        />
        <div className="flex space-x-4">
          <div className="w-1/2">
            <Input
              label="Expiry date"
              id="expiryDate"
              name="expiryDate"
              type="text"
              required
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
            />
          </div>
          <div className="w-1/2">
            <Input
              label="CVC"
              id="cvc"
              name="cvc"
              type="text"
              required
              value={formData.cvc}
              onChange={handleInputChange}
              placeholder="123"
            />
          </div>
        </div>
        <Select
          label="Country"
          id="country"
          name="country"
          required
          value={formData.country}
          onChange={handleInputChange}
          options={[
            { value: '', label: 'Select a country' },
            { value: 'us', label: 'United States' },
            { value: 'ca', label: 'Canada' },
            { value: 'uk', label: 'United Kingdom' },
            { value: 'au', label: 'Australia' },
          ]}
        />
        <Checkbox
          label="Save payment information"
          id="saveInfo"
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleCheckboxChange}
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-4"
        >
          Pay $99.99
        </button>
      </form>
    </div>
  </div>
  )
}

export default Checkout
