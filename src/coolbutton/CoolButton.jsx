import React, { Component } from 'react';


class CoolButton extends Component {
    render() {
        return (
            <div>
                <button className={this.props.classProp}>{this.props.text}</button>
            </div>
        );
    }
}

export default CoolButton;