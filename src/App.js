import React, { Component } from 'react';
import './App.css';
import TextArea from '../src/components/TextArea'
import Previewer from '../src/components/Previewer'
import {defaultText} from './values/values'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      text: defaultText
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(event){
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div style={{fontSize:25}}>Made with ❤ by Andres Hoyo</div>
        <TextArea onChangeText={this.handleChangeText} text={this.state.text}/>
        <Previewer text={this.state.text}/>
      </div>
    );
  }
}

export default App;
