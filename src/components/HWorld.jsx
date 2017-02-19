
import React, { Component } from 'react';
import CardItems from './cardItems.jsx';

export default class HWorld extends Component {
  componentWillMount() {
    console.log('cmp will mount');
  }
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      items:[]
    }
    this.addTodo =this.addTodo.bind(this);
  };
  addTodo(){
    const txtVal = this.refs.txtTodo.value;
    if(txtVal !== ""){
      const itemsList = this.state.items;
      itemsList.push(txtVal);
      this.setState({items: itemsList});
      this.refs.txtTodo.value="";
      console.log(this.state.items)
    }
  }
  addTask(){
    this.setState({todo: this.refs.txtTodo.value})
  }
  render() {
    const cardItems = this.state.items.map(function(item, i) {
      return (<CardItems key={i} todo={item}></CardItems>);
    });
    return (
      <div>
        <input ref="txtTodo" type="text" />
        <button onClick={this.addTodo}>ADD TODO</button>
        {cardItems}
      </div>
    );
  }
}
