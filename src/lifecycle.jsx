import { Component } from "react";
import HelloWorld from "./HelloWorld";
import NotificationComponent from "./NotificationComponent";

export default class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dispalyName : true
        }
    }
    clickChangeDispalyName=()=>{
        this.setState(prevSate=>{
            return {dispalyName : !prevSate.dispalyName}
        })
    }
    render(){
        return(<div>
                    <div>
                        <button onClick={this.clickChangeDispalyName}>{this.state.dispalyName.toString()}</button>
                        {this.state.dispalyName ===true ?<HelloWorld LastName={"Noamne Elhansali"}/>:undefined}
                        
                    </div>
            </div>
        )
    }
}