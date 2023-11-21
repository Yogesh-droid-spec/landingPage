import React from 'react';
import { Card, CardContent, Typography, Chip, Grid,Tooltip } from '@mui/material';






const TransactionCard = ({ status, date,price, credits,backgroundColor,link,message}) => {
  

  const renderCardWithTooltip = () => (
    <Tooltip 
    title={message} 
    placement="top"
   
  >
      <Card sx={{ minWidth: '90%', marginBottom: 2, boxShadow: 3, backgroundColor:'#f0f0f2' }}>
        <CardContent>
       
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Chip 
              label={status} 
              
              sx={{ 
                fontSize:'20px',
                color: 'black', 
                marginBottom: 1 
              }} 
            />
            <Typography variant="body2" color="black" fontSize='20px'>
              Credits: {credits}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" gutterBottom>
              {date}
            </Typography>
            <Typography variant="body2" color="black" fontSize='20px'>
              Amount: ${price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      
        </CardContent>
      </Card>
    </Tooltip>
  );

  const renderCardWithoutTooltip = () => (
    <Card sx={{ minWidth: '90%', marginBottom: 2, boxShadow: 3, backgroundColor:'#f0f0f2' }}>
         <CardContent>
        <a href={link} style={{ textDecoration: 'none' }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Chip 
              label={status} 
              
              sx={{ 
                fontSize:'20px',
                color: 'black', 
                marginBottom: 1 
              }} 
            />
            <Typography variant="body2" color="black" fontSize='20px'>
              Credits: {credits}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" gutterBottom>
              {date}
            </Typography>
            <Typography variant="body2" color="black" fontSize='20px'>
              Amount: ${price}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      </a>
        </CardContent>
    </Card>
  );
  return (
    <>
      {message ? renderCardWithTooltip() : renderCardWithoutTooltip()}
      </>
  );
};

export default TransactionCard;
