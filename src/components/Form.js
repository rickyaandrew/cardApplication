import React from "react";

export default class Form extends React.Component {
    render() {
        return (
            <form action=""> 
                <input type="text" placeholder="username"/>
                <button>Add card</button>
            </form>
        )
    }
}