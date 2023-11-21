import React, {useState,useEffect, useRef} from 'react';
import { Box, Card, CardContent, Typography, Button, CardActions, Link } from '@mui/material';

import TransactionCard from './TransactionCard';
import { green, red } from '@mui/material/colors';

//const server_home = require('../secret/secret').server_home

function addCredits(){
  console.log('adding credits');
}



const PaymentHistoryCard = ({ session }) => {
  // Convert timestamp to readable date
  const sessionDate = new Date(session.created * 1000).toLocaleString();
  
  // Determine card actions based on status
  let cardActions;
  if (session.status === 'open' && session.url) {
    cardActions = (
      <Link href={session.url} target="_blank" rel="noopener noreferrer">
        Continue Payment
      </Link>
    );
  } else if (session.status === 'complete') {
    if (session.payment_status === 'paid' && session.receipt) {
      cardActions = (
        <Link href={session.receipt} target="_blank" rel="noopener noreferrer">
          View Receipt
        </Link>
      );
    } else {
      cardActions = (
        <Typography style={{ color: red[500] }}>
          Payment Failed
        </Typography>
      );
    }
  }
 
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Payment Session - {sessionDate}
        </Typography>
        <Typography variant="h5" component="div">
          {session.metadata.userName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Credits: {session.metadata.creditsPurchased}
        </Typography>
        <Typography variant="body2">
          Amount Paid: ${session.amount_total / 100} USD
          <br />
          Payment Status: <span style={{ color: session.payment_status === 'paid' ? green[500] : red[500] }}>
            {session.payment_status === 'paid' ? 'Success' : 'Pending/Failure'}
          </span>
        </Typography>
      </CardContent>
      <CardActions>
        {cardActions}
      </CardActions>
    </Card>
  );
};
 
const PaymentHistory = () => {
    const sessionsArray=[{
        id: 'cs_test_a1q8bIcKhB26vBpursBclyP05J3n86IH2ydbw3EoqW5bEzfG5WuV1d9peg',
        object: 'checkout.session',
        after_expiration: null,
        allow_promotion_codes: null,
        amount_subtotal: 50,
        amount_total: 50,
        automatic_tax: { enabled: false, status: null },
        billing_address_collection: null,
        cancel_url: 'http://172.171.215.205:3001/payment/failed',
        client_reference_id: null,
        client_secret: null,
        consent: null,
        consent_collection: null,
        created: 1699093030,
        currency: 'usd',
        currency_conversion: null,
        custom_fields: [],
        custom_text: {
          shipping_address: null,
          submit: null,
          terms_of_service_acceptance: null
        },
        customer: 'cus_OvxIV7xwfFor3c',
        customer_creation: null,
        customer_details: {
          address: null,
          email: 'shaleen@em.team.lucidgrowth.com',
          name: null,
          phone: null,
          tax_exempt: 'none',
          tax_ids: null
        },
        customer_email: null,
        expires_at: 1699094829,
        invoice: null,
        invoice_creation: {
          enabled: false,
          invoice_data: {
            account_tax_ids: null,
            custom_fields: null,
            description: null,
            footer: null,
            metadata: {},
            rendering_options: null
          }
        },
        livemode: false,
        locale: null,
        metadata: {
          creditsPurchased: '5',
          customerId: 'cus_OvxIV7xwfFor3c',
          userId: '6543e690e29be1b485ddc9c7',
          userName: 'Shaleen Badola'
        },
        mode: 'payment',
        payment_intent: null,
        payment_link: null,
        payment_method_collection: 'if_required',
        payment_method_configuration_details: null,
        payment_method_options: {},
        payment_method_types: [ 'card' ],
        payment_status: 'unpaid',
        phone_number_collection: { enabled: false },
        recovered_from: null,
        setup_intent: null,
        shipping_address_collection: null,
        shipping_cost: null,
        shipping_details: null,
        shipping_options: [],
        status: 'open',
        submit_type: null,
        subscription: null,
        success_url: 'http://172.171.215.205:3001/payment/{CHECKOUT_SESSION_ID}',
        total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
        ui_mode: 'hosted',
        url: 'https://checkout.stripe.com/c/pay/cs_test_a1q8bIcKhB26vBpursBclyP05J3n86IH2ydbw3EoqW5bEzfG5WuV1d9peg#fidkdWxOYHwnPyd1blpxYHZxWjA0S0lvdE1Ob1B2f2FQVzxgZEZGfVZjNUJEV11UUGphZnx0XF9TNkBrU1RcUEBBNXxyTWRXQ0JxcTB1f3R2PX1cNjxSbH9hNGpiZ0xhZlJwR2NJcHVqdGpENTVDMEZhX39kSycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl'
       },
       {
        id: 'cs_test_a1VSnvQ4kiTLjmueDUxhVi1JZCV5kHZPbeOqg2hszUdvQB9kHUQEJVnTh5',
        object: 'checkout.session',
        after_expiration: null,
        allow_promotion_codes: null,
        amount_subtotal: 100,
        amount_total: 100,
        automatic_tax: { enabled: false, status: null },
        billing_address_collection: null,
        cancel_url: 'http://172.171.215.205:3001/payment/failed',
        client_reference_id: null,
        client_secret: null,
        consent: null,
        consent_collection: null,
        created: 1699098804,
        currency: 'usd',
        currency_conversion: null,
        custom_fields: [],
        custom_text: {
          shipping_address: null,
          submit: null,
          terms_of_service_acceptance: null
        },
        customer: 'cus_OwaX016ahVhMuJ',
        customer_creation: null,
        customer_details: {
          address: {
            city: null,
            country: 'US',
            line1: null,
            line2: null,
            postal_code: '12345',
            state: null
          },
          email: 'shaleenbadola@gmail.com',
          name: 'Shaleen Badola',
          phone: null,
          tax_exempt: 'none',
          tax_ids: []
        },
        customer_email: null,
        expires_at: 1699100603,
        invoice: null,
        invoice_creation: {
          enabled: false,
          invoice_data: {
            account_tax_ids: null,
            custom_fields: null,
            description: null,
            footer: null,
            metadata: {},
            rendering_options: null
          }
        },
        livemode: false,
        locale: null,
        metadata: {
          customerId: 'cus_OwaX016ahVhMuJ',
          userId: '654620af2cf3f0310e22f6a7',
          userName: 'Shaleen Badola',
          creditsPurchased: '10'
        },
        mode: 'payment',
        payment_intent: 'pi_3O8iQAKjUszdUR9e0E3FdJR3',
        payment_link: null,
        payment_method_collection: 'if_required',
        payment_method_configuration_details: null,
        payment_method_options: {},
        payment_method_types: [ 'card' ],
        payment_status: 'unpaid',
        phone_number_collection: { enabled: false },
        recovered_from: null,
        setup_intent: null,
        shipping_address_collection: null,
        shipping_cost: null,
        shipping_details: null,
        shipping_options: [],
        status: 'expired',
        submit_type: null,
        subscription: null,
        success_url: 'http://172.171.215.205:3001/payment/{CHECKOUT_SESSION_ID}',
        total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
        ui_mode: 'hosted',
        url: null,
       receipt:'https://dashboard.stripe.com/receipts/payment/CAcQARoXChVhY2N0XzFOTGpxSEtqVXN6ZFVSOWUo-NKfqgYyBqpMmPofmjovFlSsKXjjGbazBXzMRyIQg4RTMCX1ZhJ3BuD9a0OL_qh_AT244B2DDDFRXvRYud4'
       }    ,
       {
        id: 'cs_test_a1VSnvQ4kiTLjmueDUxhVi1JZCV5kHZPbeOqg2hszUdvQB9kHUQEJVnTh5',
        object: 'checkout.session',
        after_expiration: null,
        allow_promotion_codes: null,
        amount_subtotal: 100,
        amount_total: 100,
        automatic_tax: { enabled: false, status: null },
        billing_address_collection: null,
        cancel_url: 'http://172.171.215.205:3001/payment/failed',
        client_reference_id: null,
        client_secret: null,
        consent: null,
        consent_collection: null,
        created: 1699098804,
        currency: 'usd',
        currency_conversion: null,
        custom_fields: [],
        custom_text: {
          shipping_address: null,
          submit: null,
          terms_of_service_acceptance: null
        },
        customer: 'cus_OwaX016ahVhMuJ',
        customer_creation: null,
        customer_details: {
          address: {
            city: null,
            country: 'US',
            line1: null,
            line2: null,
            postal_code: '12345',
            state: null
          },
          email: 'shaleenbadola@gmail.com',
          name: 'Shaleen Badola',
          phone: null,
          tax_exempt: 'none',
          tax_ids: []
        },
        customer_email: null,
        expires_at: 1699100603,
        invoice: null,
        invoice_creation: {
          enabled: false,
          invoice_data: {
            account_tax_ids: null,
            custom_fields: null,
            description: null,
            footer: null,
            metadata: {},
            rendering_options: null
          }
        },
        livemode: false,
        locale: null,
        metadata: {
          customerId: 'cus_OwaX016ahVhMuJ',
          userId: '654620af2cf3f0310e22f6a7',
          userName: 'Shaleen Badola',
          creditsPurchased: '10'
        },
        mode: 'payment',
        payment_intent: 'pi_3O8iQAKjUszdUR9e0E3FdJR3',
        payment_link: null,
        payment_method_collection: 'if_required',
        payment_method_configuration_details: null,
        payment_method_options: {},
        payment_method_types: [ 'card' ],
        payment_status: 'paid',
        phone_number_collection: { enabled: false },
        recovered_from: null,
        setup_intent: null,
        shipping_address_collection: null,
        shipping_cost: null,
        shipping_details: null,
        shipping_options: [],
        status: 'complete',
        submit_type: null,
        subscription: null,
        success_url: 'http://172.171.215.205:3001/payment/{CHECKOUT_SESSION_ID}',
        total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
        ui_mode: 'hosted',
        url: null,
       receipt:'https://dashboard.stripe.com/receipts/payment/CAcQARoXChVhY2N0XzFOTGpxSEtqVXN6ZFVSOWUo-NKfqgYyBqpMmPofmjovFlSsKXjjGbazBXzMRyIQg4RTMCX1ZhJ3BuD9a0OL_qh_AT244B2DDDFRXvRYud4'
       }    
    ,
    {
        id: 'cs_test_a1VSnvQ4kiTLjmueDUxhVi1JZCV5kHZPbeOqg2hszUdvQB9kHUQEJVnTh5',
        object: 'checkout.session',
        after_expiration: null,
        allow_promotion_codes: null,
        amount_subtotal: 100,
        amount_total: 100,
        automatic_tax: { enabled: false, status: null },
        billing_address_collection: null,
        cancel_url: 'http://172.171.215.205:3001/payment/failed',
        client_reference_id: null,
        client_secret: null,
        consent: null,
        consent_collection: null,
        created: 1699098804,
        currency: 'usd',
        currency_conversion: null,
        custom_fields: [],
        custom_text: {
          shipping_address: null,
          submit: null,
          terms_of_service_acceptance: null
        },
        customer: 'cus_OwaX016ahVhMuJ',
        customer_creation: null,
        customer_details: {
          address: {
            city: null,
            country: 'US',
            line1: null,
            line2: null,
            postal_code: '12345',
            state: null
          },
          email: 'shaleenbadola@gmail.com',
          name: 'Shaleen Badola',
          phone: null,
          tax_exempt: 'none',
          tax_ids: []
        },
        customer_email: null,
        expires_at: 1699100603,
        invoice: null,
        invoice_creation: {
          enabled: false,
          invoice_data: {
            account_tax_ids: null,
            custom_fields: null,
            description: null,
            footer: null,
            metadata: {},
            rendering_options: null
          }
        },
        livemode: false,
        locale: null,
        metadata: {
          customerId: 'cus_OwaX016ahVhMuJ',
          userId: '654620af2cf3f0310e22f6a7',
          userName: 'Shaleen Badola',
          creditsPurchased: '10'
        },
        mode: 'payment',
        payment_intent: 'pi_3O8iQAKjUszdUR9e0E3FdJR3',
        payment_link: null,
        payment_method_collection: 'if_required',
        payment_method_configuration_details: null,
        payment_method_options: {},
        payment_method_types: [ 'card' ],
        payment_status: 'unpaid',
        phone_number_collection: { enabled: false },
        recovered_from: null,
        setup_intent: null,
        shipping_address_collection: null,
        shipping_cost: null,
        shipping_details: null,
        shipping_options: [],
        status: 'complete',
        submit_type: null,
        subscription: null,
        success_url: 'http://172.171.215.205:3001/payment/{CHECKOUT_SESSION_ID}',
        total_details: { amount_discount: 0, amount_shipping: 0, amount_tax: 0 },
        ui_mode: 'hosted',
        url: null,
        reason:'Your card has been blocked by your bank!!',
       receipt:'https://dashboard.stripe.com/receipts/payment/CAcQARoXChVhY2N0XzFOTGpxSEtqVXN6ZFVSOWUo-NKfqgYyBqpMmPofmjovFlSsKXjjGbazBXzMRyIQg4RTMCX1ZhJ3BuD9a0OL_qh_AT244B2DDDFRXvRYud4'
       }   
    ]
  const [sessions, setSessions] = useState(sessionsArray);
 
//   useEffect(() => {
//     // const fetchHistory = async () => {
//     //   const response = await fetch(`${server_home}/payment/history`, {
//     //     method: 'GET',
//     //     headers: {
//     //       'Content-Type': 'application/json'
//     //     },
//     //     credentials: 'include',
//     //   });
//     //   const result = await response.json();
//     //   setSessions(result.data); // array of session (object) [{},{}]
//     // };
//     setSessions(sessionsArray)
//     //fetchHistory();
//   }, []);
 
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor:'#5c6c84' }}>
      <Button onClick={addCredits} style={{marginTop:'40px',width:'230px',fontSize:'20px'}} variant='contained' color='success'>Add Credits</Button>
      <Typography style={{marginTop:'30px'}} variant="h4" gutterBottom>
        Payment History
      </Typography>

      {sessions.map(session => {
         const sessionDate = new Date(session.created * 1000).toLocaleString();
      // Example if-else condition
      if (session.status === 'open') {
        return (
          <TransactionCard 
            key={session.id}
            status='Pending⏳'
            date={sessionDate}
            price={session.amount_total}
            credits={session.metadata.creditsPurchased}
            
            link={session.url}
          />
        );
      } else if(session.status === 'complete') {
        if(session.payment_status==='paid')
        {
            return (
                <TransactionCard
                   key={session.id}
                   status='Paid✅'
                   date={sessionDate}
                   price={session.amount_total}
                   credits={session.metadata.creditsPurchased}
                  
                   link={session.receipt}
                />
            )
        }
        else{
            return (
                <TransactionCard
                   key={session.id}
                   status='Failed❌'
                   date={sessionDate}
                   price={session.amount_total}
                   credits={session.metadata.creditsPurchased}
                   
                   message={session.reason}
                />
            )
        }
      }
      else{
        return(
            <TransactionCard
             key={session.id}
             status='Session Expired✖️'
             date={sessionDate}
             price={session.amount_total}
             credits={session.metadata.creditsPurchased}
           
             message='This session has expired!!'
            />
        )
      }
    })}
  </Box>
  );
};
 
export default PaymentHistory;
 