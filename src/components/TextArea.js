import React , { Component } from 'react'
import {primaryColorDark, primaryColor, lightColor} from '../values/values'
class TextArea extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div style={{width: "100%"}}>
                <div id="textArea" style={textAreaStyle}>
                    <div id="textAreaHeader" style={textAreaHeaderStyle}> 
                        <h2 style={{margin:0}}>editor </h2>
                    </div>
                    <textarea id="editor" style={editorStyle} rows="20" onChange={this.props.onChangeText}>{this.props.text}</textarea>
                </div>
            </div>
        );
    }
}


const textAreaStyle = {
    backgroundColor : primaryColor,
    display : "inline-block",
    marginTop: 20,
    borderRadius: 5,
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    width: "50%"
}

const textAreaHeaderStyle = {
    margin: 10,
    color: "#fff",
}

const editorStyle = {
   marginTop: 10,
   backgroundColor: lightColor,
   fontSize: 18,
   width: "98%"
}

export default TextArea;