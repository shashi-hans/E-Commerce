import React, { Component } from 'react';


export default class CustomerTable   extends Component {
    

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.number}</td>
                <td>{this.props.obj.password}</td>
                
            </tr>
        );
    }
}