import React,{useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Container,AppBar,Drawer, Toolbar,TextField,Paper, List,ListItem,Typography, Button, IconButton, useMediaQuery, Box,useTheme,Tooltip } from '@mui/material';
const transactions = [
  { id: 1, price: '$94.14', status: 'Pending',url:'https://dashboard.stripe.com/receipts/payment/CAcQARoXChVhY2N0XzFOTGpxSEtqVXN6ZFVSOWUo-NKfqgYyBqpMmPofmjovFlSsKXjjGbazBXzMRyIQg4RTMCX1ZhJ3BuD9a0OL_qh_AT244B2DDDFRXvRYud4', date: '27 Jul 21:29', credits: '34' },
  { id: 2, price: '$94.14', status: 'Completed',url:'https://dashboard.stripe.com/receipts/payment/CAcQARoXChVhY2N0XzFOTGpxSEtqVXN6ZFVSOWUo-NKfqgYyBqpMmPofmjovFlSsKXjjGbazBXzMRyIQg4RTMCX1ZhJ3BuD9a0OL_qh_AT244B2DDDFRXvRYud4', date: '27 Jul 21:29', credits: '23' },
  { id: 3, price: '$94.14', status: 'Failed', date: '27 Jul 21:29', credits: '10',message:'Transaction declined by your bank' }, 
  { id: 4, price: '$12.1', status: 'Session Expired', date: '27 Jul 21:29', credits: '10',message:'Your payment session expired' }
  // Failed transaction
];

const Navbar = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
          setDrawerOpen(!drawerOpen);
      };
    return (
      <AppBar sx={{backgroundColor:"black"}} position="absolute">
          <Toolbar>
              {isMobile && (
                  <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleDrawerToggle}
                  >
                      <MenuIcon />
                  </IconButton>
              )}
              <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Lucid Growth
              </Typography>
              {!isMobile && (
                  <>
                      <Button color="inherit">About</Button>
                      <Button color="inherit">Help</Button>
                      <Button color="inherit">Login</Button>
                  </>
              )}
          </Toolbar>
          {isMobile && (
              <Drawer
                  anchor="left"
                  open={drawerOpen}
                  onClose={handleDrawerToggle}
              >
                  <List>
                      {['About', 'Help', 'Login'].map((text, index) => (
                          <ListItem button key={text}>
                              <Typography variant="subtitle1">{text}</Typography>
                          </ListItem>
                      ))}
                  </List>
              </Drawer>
          )}
      </AppBar>
    );
  }
  

const TransactionPage = () => {
    const containerStyle = {
      fontFamily: "'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      maxWidth: '1000px', // Increased max width for desktop
      margin: 'auto',
      paddingTop: '70px',
      color: '#333',
    };
  
    const tableStyle = {
      width: '100%', // Table takes full width of the container
      borderCollapse: 'collapse',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      tableLayout: 'fixed', // Fixes column widths
    };

    const thStyle = {
        padding: '15px 10px', // Adjusted padding
        background: '#e0e0e0', // Greyish background color
        color: '#333',
        fontWeight: '600',
        fontSize: '16px',
        textAlign: 'center',
      };

      const headingStyle = {
        textAlign: 'center',
        margin: '0 0 40px', // Increased bottom margin for more space
        fontSize: '35px', // Increased font size
        fontWeight: '700', // Make it bolder, if you like
      };
    
  
    const tdStyle = {
      padding: '15px 10px', // Reduced padding for a more compact look
      borderBottom: '1px solid #eaeaea',
      color: '#333',
      fontSize: '16px', // Adjusted font size for desktop
      textAlign: 'center',
    };
    
    const statusStyle = {
        fontWeight: '500',
        textAlign: 'center',
        borderRadius: '12px',
        padding: '5px 10px', // Adjusted padding for better spacing
        display: 'inline-block',
        width:'150px',
        whiteSpace: 'nowrap', // Prevent wrapping onto a new line
      };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { ...statusStyle, background: '#ffab00', color: '#fff' };
      case 'Completed':
        return { ...statusStyle, background: '#36b37e', color: '#fff' };
      case 'Failed':
        return { ...statusStyle, background: '#ff3333', color: '#fff' };
      case 'Session Expired':
        return { ...statusStyle, background: '#B0A695', color: '#fff' };
      default:
        return statusStyle;
    }
  };

  const renderStatusWithTooltip = (transaction) => {
    let statusElement;

    if (transaction.status === 'Pending' || transaction.status === 'Completed') {
      statusElement = (
        <a href={transaction.url} style={{ textDecoration: 'none' }}>
          <span style={getStatusStyle(transaction.status)}>
            {transaction.status}
          </span>
        </a>
      );
    } else {
      statusElement = (
        <span style={getStatusStyle(transaction.status)}>
          {transaction.status}
        </span>
      );
    }

    if (transaction.message) {
      return <Tooltip title={transaction.message} arrow>{statusElement}</Tooltip>;
    }

    return statusElement;
  };



  // Adjust the button style to increase the size
  const buttonStyle = {
    padding: '15px 30px', // Increased padding
    backgroundColor: '#0052cc',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '18px', // Increased font size
    letterSpacing: '1px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    margin: '0 auto 40px', // Increased bottom margin for more space
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
  };
  // Function to handle the Add Credits button click
  const handleAddCredits = () => {
    // Implement your logic to add credits
    console.log('Add Credits button clicked');
  };

    // Function to render transactions or a 'No Transactions Yet' message
    const renderTransactionsOrMessage = () => {
        if (transactions.length === 0) {
          return (
            <Box style={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h4" style={{
          fontWeight: 'bold',
          fontSize: '24px',
          color: '#4A4A4A',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}>
          No Transactions Yet
        </Typography>
      </Box>
          );
        }
    
        return (
          <table style={tableStyle}>
            <thead>
              <tr>
                {['Price', 'Credits', 'Date', 'Status'].map((header) => (
                  <th key={header} style={thStyle}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td style={tdStyle}>{transaction.price}</td>
                  <td style={tdStyle}>🪙{transaction.credits}</td>
                  <td style={tdStyle}>{transaction.date}</td>
                  <td style={tdStyle}>
                {renderStatusWithTooltip(transaction)}
              </td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      };
    
      return (
        <div style={containerStyle}>
          <Navbar />
          <Button style={buttonStyle} onClick={handleAddCredits}>
            Add Credits
          </Button>
          <Typography variant="h4" style={headingStyle}>
            Latest Transactions
          </Typography>
          {renderTransactionsOrMessage()}
        </div>
      );
    };
    
    export default TransactionPage;