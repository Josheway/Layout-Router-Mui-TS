import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import Header from './Components/Header';
import Home from './Pages/Home';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Router>
    <Container maxWidth="sm">
      <Box my={4}>
        <Header />
        <Switch>
            <Route exact path="/" render={props => <Home />} />
            <Route exact path="/Page2" component={Page2} />
            <Route exact path="/Page3" component={Page3} />
            <Route exact path="/Page4" component={Page4} />
          </Switch>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App TypeScript
        </Typography>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Router>
  );
}
