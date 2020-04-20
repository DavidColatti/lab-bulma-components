import React, { Component } from 'react'
import Navbar from '../navbar/Navbar';
import FormField from '../formfield/FormField';
import CoolButton from '../coolbutton/CoolButton';

export default class Signup extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g. John Doe" />
                <FormField label="Email" type="email" placeholder="e.g. johndoe@gmail.com"  />
                <FormField label="Password" type="password" placeholder="e.g. 123456"  />
                <CoolButton text="Submit" classProp="button is-small is-success"/>
            </div>
        )
    }
}
