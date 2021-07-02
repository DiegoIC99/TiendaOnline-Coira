import React, { Component } from 'react'

export default class ItemListContainer extends Component {
    render () {
        return(
            <div className="contCart">
                <h1>{this.props.greeting}</h1>
            </div>
        )
    }
}
