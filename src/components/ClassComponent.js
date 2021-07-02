import React, { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.array = ['item1','item2'];
    }
    render() {
        return (
            <div>
                <h1>Prueba</h1>
                {this.array}
            </div>
        )
    }
}
