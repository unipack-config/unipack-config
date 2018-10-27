import React, { Component } from 'react'

export default class EntryForm extends Component {
    render() {
        return (
            <span>Plugins :</span>
            <div>
                <label>Plugins</label>
                <input onClick={props.pluginsHandler} type="button" />
                <input type="text" placeholder="Please enter your module" />
            </div>
        )
    }
}