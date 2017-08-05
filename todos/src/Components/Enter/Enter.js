import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Enter.css'

export default class Enter extends Component {

  static propTypes = {
    lists: PropTypes.array.isRequired,
    enterKeyDownCb: PropTypes.func.isRequired
  };

  static defaultProps = {
    lists: []
  };

  constructor(props) {
    super(props);
    this.state = {
      colorStyle: "#737373"
    };
    this.onEnterKeyDown = this.onEnterKeyDown.bind(this);
    // this.chooseAll = this.chooseAll.bind(this);
  }

  componentDidMount() {
    this.refs.theInput.focus();
  }


  //when the key whose code is 13 has been pressed down to add a new lists at the parent component(App)
  onEnterKeyDown(e) {
    const value = e.target.value.trim();
    if(e.keyCode===13) {
      if(value==="") {
        return;
      }
      const newList = {text: value, choose: false,id: this.props.id};

      //Call the parent function
      this.props.enterKeyDownCb(newList);
      e.target.value = "";
    }
  }



  render() {
    // const lists = this.props.lists;
    return (
      <div className="Enter">
        <i className="SelectAll iconfont" onClick={this.props.onSelectAllCb} style={{color:this.state.colorStyle}}>&#xe61a;</i>
        <input className="Enter__input" placeholder="What needs to be done?" onKeyDown={this.onEnterKeyDown}  ref="theInput" />
      </div>
    )
  }
}
