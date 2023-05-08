import React,{Component} from "react";

class Option extends Component{
    render(){
return (
    <>
    <option value={this.props.id}>{this.props.name}</option>
    </>
);
    }
}
export default Option;