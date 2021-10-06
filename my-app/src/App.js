import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Submit_csv from "./pages/Submit_csv";
import View_data from "./pages/View_data";
import Test from "./pages/Test";
import Navbar from "./components/Navbar";
import SignInSide from './pages/login';

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/' exact component={SignInSide} />
        <Route path='/Submit_csv' exact component={Submit_csv} />
        <Route path='/View_data' exact component={View_data} />
        <Route path='/Test' exact component={Test} />
        <Route path='/home' exact component={Home} />
        </Switch> 
    </Router>
  );
}
export default App;

