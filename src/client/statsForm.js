import React, { Component } from 'react'

export default class EntryForm extends Component {
    render() {
        return (
            <span>Stats :</span>
            <div>
                <label>stats</label>
                <input onClick={props.statssHandler} type="button" />
                <input type="text" placeholder="Please enter your module" />
            </div>
        )
    }
}