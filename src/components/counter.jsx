import React,{Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state ={
           counter :0
        }

        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    render(){
        return(
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Increment</button>
            </div>
        );
    }

    handleIncrement = ()=>{
        this.setState((prevState)=>({
            counter: prevState.counter+1,
        }));
    }

    handleDecrement = ()=>{
        this.setState((prevState)=>({
            counter: prevState.counter-1,
        }));
    }
};

export default Counter;