import React from 'react';

class InputBox extends React.Component {

  constructor(props) {
    super(props);

    var initialText = props.initialText || "Penis";
    this.state = {initialText: initialText, value: initialText};

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    let text = event.target.value;
    if(!text.length){
      text = this.state.initialText;
    }
    this.setState({value: text});
  }

  render() {
    return (
      <div className="small-4">
        <input type="text" onChange= {this.handleChange} />
        <div>
          {this.state.value}
        </div>
      </div>
    )
  }
}


export default InputBox;