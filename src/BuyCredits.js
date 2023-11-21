
import React, { useState } from 'react';

const CreditPurchase = () => {
  const [credits, setCredits] = useState(5); // Start with 5 credits
  const creditPrice = 0.1;

  const handleBuyNowClick = () => {
    if (isBuyButtonDisabled) {
      console.log('hello');
      alert("A minimum payment of $0.50 is required.");
      return; // Do nothing if the button is disabled
    }
    // well you can place iniate placement here now 
      console.log('Processing payment');
  };

  const handleCreditChange = (e) => {
    const value = e.target.value;
    const numValue = Number(value);

    if (value === '' || (Number.isInteger(numValue) && numValue <= 10000)) {
      setCredits(value);
    }
  };

  const increaseCredits = () => {
    setCredits((prevCredits) => (+prevCredits < 10000 ? +prevCredits+1 : +prevCredits));
  };

  const decreaseCredits = () => {
    setCredits((prevCredits) => (+prevCredits > 5 ? +prevCredits-1 : +prevCredits));
  };

  const onBlur = () => {
    if (credits === '') {
      setCredits(credits);
    } else if (credits < 5) {
      setCredits(credits);
    } else if (credits > 10000) {
      setCredits(credits);
    }
  };

  const totalPrice = (credits === '' ? 0 : credits) * creditPrice;
  const isBuyButtonDisabled = totalPrice < 0.50;
 
  // Define inline styles
  const styles = {
    container: {
      textAlign: 'center',
      fontFamily: 'Raleway, sans-serif',
      fontSize: '1.2em',
      color: '#0a2540',
      padding: '20px',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column', 
    },
    button: {
      backgroundColor: '#635bff',
      borderRadius: '3px',
      color: 'white',
      border: 'none',
      padding: '12px 16px',
      marginTop: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      display: 'block',
    },
    input: {
      display: 'block',
      fontSize: '1.1em',
      width: '100%',
      marginBottom: '10px',
      border: '1px solid #efefef',
      textAlign: 'center',
      height: '50px',
      width: '80px',
      margin: '0 10px',
      fontSize: '25px',
    },
    label: {
      display: 'block',
      fontSize: '28px',
      marginTop: '25px',
    },
    buyButton: {
      // ...existing button styles
      filter: isBuyButtonDisabled ? 'grayscale(100%)' : 'none',
      pointerEvents: isBuyButtonDisabled ? 'none' : 'auto',
    }
    // Add other styles as needed
  };

  return (
    <div style={styles.container}>
      <h1>Buy Your Credits</h1>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <button style={styles.button} onClick={decreaseCredits} disabled={credits <= 5}>-</button>
        <input
          type="number"
          value={credits}
          onChange={handleCreditChange}
          onBlur={onBlur}
          style={styles.input}
          min="1"
          max="10000"
        />
        <button style={styles.button} onClick={increaseCredits} disabled={credits >= 10000}>+</button>
      </div>
      <div style={{ display: 'block', marginTop: '50px' }}>
        <label style={styles.label}>Total Price: ${totalPrice.toFixed(2)}</label>
      </div>
      <button
        style={{ ...styles.button, ...styles.buyButton ,marginTop: '16px', marginLeft: '650px', fontSize: '20px',width:'180px'}}
        onClick={handleBuyNowClick}
        disabled={isBuyButtonDisabled}
      >
        Buy Now
      </button>
      <label style={styles.label}>1 credit = 1 Domain Health Check</label>
      <label style={styles.label}>A minimum payment of $0.50 is required.</label>
      <label style={styles.label}>happy domain health checking!!</label>
    </div>
  );
};

export default CreditPurchase;