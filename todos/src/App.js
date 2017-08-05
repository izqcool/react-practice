import React, { Component } from 'react';
import Enter from './Components/Enter/Enter';
import ItemList from './Components/Item/ItemList';
import Footer from './Components/Footer/Footer';
// import * as _ from 'lodash';
import './App.css';

class App extends Component {
  renderlist = "";
  constructor(props) {
    super(props);
    this.state = {
      lists:[

      ],
      status: "All",
      id : 0
    }
  }

  //add a new list in lists
  enterKeyDownCb(newList) {
    this.setState({
      lists: [...this.state.lists,newList],
      id:this.state.id+1
    });
  }

  //select all lists or anti-election
  onSelectAll() {
    const allSelect = this.state.lists.every((ele) => {
      return ele.choose === true;
    });
    const copyLists = [...this.state.lists];
    if(allSelect) {
      copyLists.forEach((ele) => {
        ele.choose = false;
      });
      this.setState({
        colorStyle:"#E6E6E6"
      });
    }
    else {
      copyLists.forEach((ele) => {
        ele.choose = true;
      });
      this.setState({
        colorStyle: "#737373"
      });
    }


  }

  //select current list which has been clicked
  onSelect(id) {
    const copyLists = [...this.state.lists].map((ele) => {
      if(ele.id!==id) {
        return ele;
      }
      else {
        return {text:ele.text,choose:!ele.choose,id:ele.id};
      }
    });
    this.setState({
      lists: copyLists
    });
  }

  //render different lists by status
  renderItemList() {
    if(this.state.status==="All") {
      return this.state.lists;
    }
    if(this.state.status==="Active") {
      return this.state.lists.filter((ele)=>{
        return ele.choose===false;
      });
    }
    if(this.state.status==="Completed") {
      return this.state.lists.filter((ele)=>{
        return ele.choose===true;
      });
    }
  }

  // reset the whole lists
  reSet(reSetLists) {
    this.setState({
      lists: reSetLists
    });
  }

  //updata the lists when the hide input change the value
  updateLists(updateList,i) {
    const newLists = [...this.state.lists];
    newLists.splice(i,1,updateList);
    this.setState({
      lists: newLists
    });
  }


  //change the status when the footer nav has been clicked
  changeStatusCb(status) {
    this.setState({
      status: status
    });
  }



  render() {
    this.renderlist = this.renderItemList();
    return (
      <div className="App">
        <div className="App-header">todos</div>
        <Enter lists = {this.state.lists} id={this.state.id} enterKeyDownCb={(newList)=>this.enterKeyDownCb(newList)} onSelectAllCb = {()=>{this.onSelectAll()}} />
        <ItemList renderList={this.renderlist} lists={this.state.lists} onSelectCb = {(id) => this.onSelect(id)} reSetCb={(reSetLists)=>{this.reSet(reSetLists)}}  updateListsCb={(updateList,i)=>{this.updateLists(updateList,i)}}/>
        <Footer lists={this.state.lists} status={this.state.status} reSetCb = {(reSetLists) => this.reSet(reSetLists)} changeStatusCb={(status)=>this.changeStatusCb(status)} />
      </div>
    );
  }
}

export default App;
