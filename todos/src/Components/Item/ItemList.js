import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { stopPropagation } from 'react-event-utils';
import './ItemList.css';

export default class ItemList extends Component {

  static propTypes = {
    lists: PropTypes.array.isRequired,
    reSetCb: PropTypes.func.isRequired,
    onSelectCb: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputId:'',
      textStyle: {}
    };

    this.onBlur = this.onBlur.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
    this.onTrigger = this.onTrigger.bind(this);
    this.onSelectDouble = this.onSelectDouble.bind(this);
  }

  // delete a list from lists
  onDelete (id) {
    const reservedList = this.props.lists.filter((ele)=>{
      return ele.id !== id;
    });
    this.props.reSetCb(reservedList);
  }

  //show he hide input when doubleClick happened
  onDoubleClick(id) {
    let style;
    this.props.lists.forEach((ele)=>{
      if(ele.id===id){
        ele.choose===true?style={textDecoration:"line-through",color:"#D9D9D9"}:style={textDecoration:"none",color:"#4D4D4D"};
      }
    });

    this.setState({
      inputId:id,
      textStyle:style
    });


    //it is important because this setState() function reset the lists is Asynchronous
    setTimeout(()=>{
      this.refs.input.focus();
    },0);
  }


  // trigger blur() to update the lists
  onInputKeyDown(e) {
    if(e.keyCode===13) {
      this.refs.input.blur();
    }
  }


  onTrigger(e,id) {
    e.stopPropagation();
    this.props.onSelectCb(id);
  }


  onSelectDouble(e) {
    e.stopPropagation();
    return false;
  }


  //when the input lose focus update the lists
  onBlur(id) {
    this.setState({
      inputId:''
    });

    let index;
    let updateList = this.props.lists.filter((ele,i) => {
      if(ele.id===id) {
        index = i;
      }
      return ele.id===id;
    });
    
    updateList[0].text = this.refs.input.value;


    this.props.updateListsCb(updateList[0],index);

  }

  render() {
    let Input;
    return (
      <div className="Item">
        {
          this.props.renderList.map((ele,i)=>{

            if(ele.id===this.state.inputId) {
              Input =  <input  className="Item__input--show" onKeyDown={this.onInputKeyDown} style={this.state.textStyle} defaultValue={ele.text} ref="input" onBlur={this.onBlur.bind(this,ele.id)} />;
            }else {
              Input="";
            }
            return (
              <div className="Item_list clearfix" key={ele.id} onDoubleClick={this.onDoubleClick.bind(this,ele.id)}>
                <div className="Item_list__icon">
                  <i className={ele.choose?"Item_list__icon--choose iconfont":"Item_list__icon--no_choose iconfont"} onClick={(e)=>this.onTrigger(e,ele.id)} onDoubleClick={this.onSelectDouble} ref="trigger">&#xe65e;</i>
                </div>
                <ul className="Item_list__ul">
                  <li className={ele.choose?"Item_list__li--choose":"Item_list__li--no_choose"}>{ele.text}</li>
                  <span className="Item_list--delete iconfont" onClick={this.onDelete.bind(this,ele.id)}>&#xe60b;</span>
                </ul>

                {Input}

              </div>
            )
          })
        }
      </div>
    )
  }
}



