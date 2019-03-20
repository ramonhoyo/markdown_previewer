import React,  {Component} from 'react'
import {defaultText} from '../values/values'
import {primaryColorDark, primaryColor, lightColor} from '../values/values'

const marked = window.marked
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
    breaks: true,
  });

class Previewer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const parsed = marked(this.props.text)
        return(
            <div style={{width: "100%"}}>
                <div id="previewerContainer" style={previewerContainerStyle} >
                    <div style={{marginTop: 10, textAlign: "center"}}> 
                        <h2 style={{margin:0, color:"#fff"}} >Previewer</h2>
                    </div>
                    <div>
                         <div id="preview" style={previewerStyle} dangerouslySetInnerHTML={{__html: parsed}} >
                    </div>                    
                    </div>
                </div>
            </div>
        );
    }
   
}


const previewerContainerStyle = {
    backgroundColor : primaryColor,
    display : "inline-block",
    marginTop: 20,
    borderRadius: 5,
    boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
    width: "50%",
    minHeight: 500,
    textAlign: "left",
    margin: 20
}

const previewerStyle = {
    marginTop: 10,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: lightColor,
    minHeight: 500,
    padding: 30
 }
 


export default Previewer;