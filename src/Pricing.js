import React from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

document.body.style = 'margin: 0;';

const StyledTitle = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    left: '50%',
    top: theme.spacing(10), // Adjust top spacing to position the title correctly
    transform: 'translateX(-50%)',
    zIndex: 1,
    padding: theme.spacing(1),
    backgroundColor: '#f5f5f7', // Match the background color of the container Box
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
  }));

const StyledCard = styled(Card)(({ theme, popular }) => ({
  width:350,
  height:400,
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  transition: 'transform .3s',
  boxShadow: theme.shadows[5],
  position: 'relative',
  overflow: 'visible',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[10],
  },
  ...(popular && {
    '&:before': {
      content: '"Most Popular"',
      position: 'absolute',
      top: -theme.spacing(3),
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(0.5, 2),
      fontSize: theme.typography.caption.fontSize,
    }
  })
}));

const PricingPage = () => {
  const plans = [
    {
      title: 'Starters',
      tests: '10',
      description: 'Email and domain tests per day',
      price: '$25/mo',
      popular: false,
    },
    {
      title: 'Advanced',
      tests: '20',
      description: 'Email and domain tests per day',
      price: '$60/mo',
      popular: true,
    },
    {
      title: 'Professionals',
      tests: '50',
      description: 'Email and domain tests per day',
      price: '$99/mo',
      popular: false,
    },
  ];

   // Adjust the top and bottom padding value if you have a header or footer
   const verticalPadding = 8; // The top and bottom padding of the Box in theme spacing units

   return (
     <Box sx={{
       flexGrow: 1,
       px: 4,
       bgcolor: '#f5f5f7',
       width: 'calc(100vw - (theme.spacing(4) * 2))', // Subtract the horizontal padding
       height: `calc(100vh - (theme.spacing(${verticalPadding}) * 2))`, // Subtract the vertical padding
       paddingTop: verticalPadding,
       paddingBottom: verticalPadding,
       overflow: 'hidden', // Hide both vertical and horizontal overflow
       boxSizing: 'border-box' // Include padding and border in the element's total width and height
     }}>
       <Typography variant="h3" sx={{marginRight:'70px'}} component="div" gutterBottom textAlign="center" marginBottom={6}>
         Our Pricing
       </Typography>
       <Grid container spacing={4} justifyContent="space-evenly"> 
         {plans.map((plan) => (
           <Grid item key={plan.title} xs={12} sm={6} md={4}>
                <StyledCard popular={plan.popular}>
              <CardContent>
                <Typography variant="h5" component="div" color="primary" fontWeight="bold" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h2" component="div" sx={{ my: 2 }}>
                  {plan.tests}
                </Typography>
                <Typography sx={{ fontSize: 14, mb: 1.5 }} color="text.secondary">
                  {plan.description}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                  {plan.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center' }}>
                <Button variant={plan.popular ? 'contained' : 'outlined'} color="primary" size="large">
                  Choose Plan
                </Button>
              </CardActions>
            </StyledCard>
           </Grid>
         ))}
       </Grid>
     </Box>
   );
 };
 
 export default PricingPage;