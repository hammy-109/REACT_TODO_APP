import React, {Component} from 'react';
import Card from './components/Card.jsx';
import MuiThemeProvider from './../node_modules/material-ui/styles/MuiThemeProvider';
export default class App extends Component {
  render() {
    return (
    	<MuiThemeProvider>
	    	<Card />
			</MuiThemeProvider>
    );
  }
}
 
