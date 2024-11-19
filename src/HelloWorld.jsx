import { Component } from "react";
import NotificationComponent from "./NotificationComponent";

export default class HelloWorld extends Component{
    constructor(){
        super();
        this.prevSate=undefined;
        this.state = {
            component:<p>Hello first</p>
        }
    }
    ClickBody=()=>{
        this.setState({component: <NotificationComponent/>})
    }
    //ila component tzadt
    componentDidMount(){
        console.log("component did mount");
        document.addEventListener('click',this.ClickBody)
        this.setState(this.prevSate)
    }
    //ila component update
    componentDidUpdate(prevSate){
        console.log("component did update");
        this.prevSate =prevSate
    }
    //ila component superemme
    componentWillUnmount(){
        console.log("component will unmount");
        document.removeEventListener('click',this.ClickBody)
    }
    render(){
        return(
            <div>
                {this.state.component}
            <h1>Hello,{this.props.LastName}</h1>
        </div>
        )
    }
}