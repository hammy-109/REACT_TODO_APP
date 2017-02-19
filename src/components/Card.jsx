import React, { Component } from 'react';
import CardItems from './cardItems.jsx';

import AppBar from './../../node_modules/material-ui/AppBar';
import SelectField from './../../node_modules/material-ui/SelectField';
import MenuItem from './../../node_modules/material-ui/MenuItem';
import RaisedButton from './../../node_modules/material-ui/RaisedButton';
import TextField from './../../node_modules/material-ui/TextField';
import {RadioButton, RadioButtonGroup} from './../../node_modules/material-ui/RadioButton';
import ActionFavorite from './../../node_modules/material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from './../../node_modules/material-ui/svg-icons/action/favorite-border';

export default class Card extends Component {
  componentWillMount() {
    console.log('cmp will mount');
  }
  constructor(props) {
    super(props);
    this.state = {
      sort:'',
      filterBy: '',
      tasks:[{name: 'milk', isComplete: true}, {name: 'movie at 12:00pm', isComplete: false},
      {name: 'home work', isComplete: true}, {name: 'physics assignment ', isComplete: false},
      {name: 'pickup sister at 7:00 pm', isComplete: true}, {name: 'gta at 9:00pm', isComplete: false}],
    };
    this.addTodo = this.addTodo.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.sortFilter = this.sortFilter.bind(this);
  };
  addTodo(){
    const txtVal = document.getElementById('txtTodo').value;
    document.getElementById('txtTodo').value="";
    if(txtVal !== ""){
      const itemsList = this.state.tasks;
      itemsList.push({name: txtVal, isComplete: false});
      console.log(itemsList);
      this.setState({tasks: itemsList});
      this.refs.txtTodo.value = "";
      console.log(txtVal);
    }
    else{
      alert('Field is empty');
    }
  }
  removeTask(index) {
    const task = this.state.tasks;
    task.splice(index,1);
    this.setState({tasks: task}); 
    console.log(task);
  }
  doneTask(index){
    const task = this.state.tasks;
    task[index].isComplete = !task[index].isComplete;
    console.log(task[index].isComplete);
  }
  setFilter(e) {
    const val = e.target.value; 
    const filterBy = val === 'DONE' ? true : 
    (val === 'UNDONE' ? false : '');
    this.setState({filterBy: filterBy});
  }
  sortFilter(e) {  
    const val = e.target.value;
    const sortBy = val === "1" ? true : 
    (val === "2" ? false : '');
    this.setState({sort: sortBy});
    console.log(sortBy);
  }
  render() {
    const self = this;
    const cardItems = self.state.tasks.sort(function(a, b){
      if (self.state.sort !== ''){
        if(self.state.sort === true){
          var nameA = a.name.toUpperCase(); 
          var nameB = b.name.toUpperCase(); 
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        else if(self.state.sort === false){
          var nameA = a.name.toUpperCase(); 
          var nameB = b.name.toUpperCase(); 
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        }
      }
      else {
        return 0;
      }
    }).map(function(item, i) {
      if (self.state.filterBy  === '' || item.isComplete ==  self.state.filterBy) {
        return (
          <CardItems 
          key={i}
          todo={item} 
          removeTask={self.removeTask.bind(self, i)} 
          doneTask={self.doneTask.bind(self, i)}
          />
        );
      }
    });
    return (
      <div id="parent">
        <AppBar
        title="TODO APP"
        showMenuIconButton={false}
      	/>
        <div  id='content'>
          <TextField
            hintText="Todo"
            id="txtTodo"
            ref="txtTodo"
          />
          <RaisedButton 
          onClick={this.addTodo} 
          label="ADD" primary={true}>
          </RaisedButton>
          <br/>
          <br/>
          <div id="elements">
          <ul>
            {cardItems}
          </ul>
          </div><br/>
          <RadioButtonGroup 
            style={{ display: 'flex' }} 
          	onChange={this.setFilter} 
            name="shipSpeed" 
            defaultSelected="ALL">
            <RadioButton style={{ display: 'inline-block', width: '150px' }}
              value="ALL"
              label="All"
            />
            <RadioButton style={{ display: 'inline-block', width: '150px' }}
              value="DONE"
              label="Done"
            />
            <RadioButton style={{ display: 'inline-block', width: '150px' }}
              value="UNDONE"
              label="Undone"
            />
          </RadioButtonGroup>
        </div>
      </div>
    );
  }
}

//<div>
  //    <input type="radio" onClick={this.sortFilter} name="todoSort" value="0" 
  //    defaultChecked="checked"/>NORMAL<br/>
  //    <input type="radio" onClick={this.sortFilter} name="todoSort" value="1" />ASCENDING<br/>
  //    <input type="radio" onClick={this.sortFilter} name="todoSort" value="2" />DESCENDING<br/>
  // </div>
  // <input ref="txtTodo" type="text" />
// <div>
  //  <input type="radio" onChange={this.setFilter} name="todoShow" value="ALL" defaultChecked="checked"/>ALL 
  //  <input type="radio" onChange={this.setFilter} name="todoShow" value="DONE" />DONE 
  //  <input type="radio" onChange={this.setFilter} name="todoShow" value="UNDONE" />UNDONE 
// </div>