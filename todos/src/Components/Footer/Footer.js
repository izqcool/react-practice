
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

export default class Footer extends Component {

  static propTypes = {
    lists: PropTypes.array.isRequired,
    reSetCb: PropTypes.func.isRequired,
    changeStatusCb: PropTypes.func.isRequired,
  };
  num = 0;
  selectedList = [];
  constructor(props) {
    super(props);
    this.state = {};
  }

  //get the num of the lists that not be selected
  getLeftNum() {
    let leftNum = 0;
    this.props.lists.forEach((ele) => {
      if(ele.choose === false) {
        return leftNum++
      }
    });
    this.num = leftNum;
  }

  //judgment the 'Clear completed' is show or not
  isClear() {
    this.selectedList = this.props.lists.filter((ele) => {
      return ele.choose===true;
    });
  }


  //delete all lists who were been selected
  onClearCompleted () {
    const lists = this.props.lists.filter((ele,) => {
      return ele.choose === false;
    });

    this.props.reSetCb(lists);

  }


  //change current status when clicked
  onChangeCurrent(current){
    this.props.changeStatusCb(current);
  }

  render() {
    this.getLeftNum();
    this.isClear();
    const listsLen = this.props.lists.length;
    const status = this.props.status;

    let Completed = null;
    if(this.selectedList.length>=1) {
      Completed = <ul className="Footer_clear" onClick={this.onClearCompleted.bind(this)}>Clear completed</ul>;
    }


    return (
      <div className={listsLen===0?'Footer_noDisplay':'Footer clearfix'}>
        <ul className="Footer_leftNum">{this.num}  items left</ul>
        <ul className="Footer_status clearfix">
          <li className={status==="All"?"Footer_status--show":""} onClick={this.onChangeCurrent.bind(this,'All')}>All</li>
          <li className={status==="Active"?"Footer_status--show":""} onClick={this.onChangeCurrent.bind(this,"Active")}>Active</li>
          <li className={status==="Completed"?"Footer_status--show":""} onClick={this.onChangeCurrent.bind(this,"Completed")}>Completed</li>
        </ul>
        {Completed}
      </div>
    )

  }

}
