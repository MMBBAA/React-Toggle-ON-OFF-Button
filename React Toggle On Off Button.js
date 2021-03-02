
import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state ={text : "ON"}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
     let text = this.state.text;
    if(text==="ON"){
      text="OFF";
    }
    else{
       text="ON";
    }
    this.setState({text:text})
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.text}</button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);