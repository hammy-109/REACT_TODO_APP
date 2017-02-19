
import React, { Component } from 'react';

import Checkbox from './../../node_modules/material-ui/Checkbox';
import Visibility from './../../node_modules/material-ui/svg-icons/action/visibility';
import VisibilityOff from './../../node_modules/material-ui/svg-icons/action/visibility-off';
import IconButton from './../../node_modules/material-ui/IconButton';
import ActionGrade from './../../node_modules/material-ui/svg-icons/action/grade';
export default class CardItems extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return !(nextProps.todo==this.props.todo);
  }
  render() {
  	const styles = {
    	smallIcon: {
      
      height: 36,
    }
	};
    return (
      <li>
        <Checkbox
        	style={styles.smallIcon}
        	onClick={this.props.doneTask} 
          defaultChecked={this.props.todo.isComplete}	
          label= {this.props.todo.name} 	
        />
       </li>
    );
  }
}
// <IconButton iconStyle={styles.smallIcon} iconClassName="muidocs-icon-custom-github" tooltip="top-right" touch={true} tooltipPosition="top-right">
//        <span onClick={this.props.removeTask} >x</span>
//     </IconButton>