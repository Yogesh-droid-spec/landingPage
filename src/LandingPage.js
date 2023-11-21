import {React,useState} from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Container,AppBar,Drawer, Toolbar,TextField,Paper, List,ListItem,Typography, Button, IconButton, useMediaQuery, Box,useTheme,Tooltip, NativeSelect } from '@mui/material';

const LandingPage = () => {
 // let history = useHistory();

  const handleGetStartedClick = () => {
   // history.push('/email-page'); // The route to your email sending page
  };

  const Navbar = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
          setDrawerOpen(!drawerOpen);
      };
    return (
      <AppBar sx={{ backgroundColor: "black", width: '100%' }} position="fixed">
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

  // Apply the global style reset
const globalStyles = {
  margin: 0,
  padding: 0,
  width: '100vw',
  height: '100vh',
  overflowX: 'hidden', // Prevent horizontal scrolling
};
  
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100vw',
      padding: 0,
      margin: 0,
      background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
      color: '#FFFFFF',
      textAlign: 'center',
    },
    heroSection: {
      maxWidth: '800px',
      width: '100%', // Ensures it takes the full width
      padding: '0', // Padding inside the hero section for content spacing
      marginTop:'3rem'
    },
    header: {
      fontSize: '3rem',
      fontWeight: '600',
      
    },
    subheader: {
      fontSize: '1.25rem',
      fontWeight: '300',
    },
    button: {
      padding: '1rem 2rem',
      fontSize: '1rem',
      backgroundColor: '#6DD5FA', // Light blue for contrast
      color: '#0f0c29', // Dark blue
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontWeight: '500',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.2s ease-in-out',
      margin: '2rem 0',
    },
    features: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: '3rem',
      maxWidth: '800px',
    },
    featureItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '200px',
      margin: '1rem',
    },
    featureIcon: {
      width: '50px',
      height: '50px',
      marginBottom: '0.5rem',
      // Placeholder for actual icons
      background: '#6DD5FA', // Light blue for visibility on dark background
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    },
    featureText: {
      fontSize: '1rem',
      marginTop: '0.5rem',
      fontWeight: '400',
    },
  };
  
  return (
    <div style={globalStyles}>
    <Navbar />
    <div style={styles.container}>
      <div style={styles.heroSection}>
        <h1 style={styles.header}>Maximize Your Email Deliverability</h1>
        <p style={styles.subheader}>
          Discover the health of your domain and ensure your emails always hit the inbox.
        </p>
        <button onClick={handleGetStartedClick} style={styles.button}>
          Let's Get Started
        </button>
      </div>
      <div style={styles.features}>
        <div style={styles.featureItem}>
          <div style={styles.featureIcon}></div>
          <p style={styles.featureText}>Comprehensive API Access</p>
        </div>
        <div style={styles.featureItem}>
          <div style={styles.featureIcon}></div>
          <p style={styles.featureText}>Lightning-Fast Checks</p>
        </div>
        <div style={styles.featureItem}>
          <div style={styles.featureIcon}></div>
          <p style={styles.featureText}>Blacklist & Blocklist Monitoring</p>
        </div>
        <div style={styles.featureItem}>
          <div style={styles.featureIcon}></div>
          <p style={styles.featureText}>Accurate Spam Score Analysis</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingPage;