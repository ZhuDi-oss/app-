import React, { Component } from 'react'
import oneJpg from "../../assets/img/1.jpg"
import './Mine.css'

export default class Mine extends Component {
    out() {
        sessionStorage.clear()
        this.props.history.push("/login")
    }
    render() {
        return (
            <div className="Mine">
                <div className="mine_y">
                    <img src={oneJpg} alt="" />
                </div>
                <div onClick={this.out.bind(this)} className="button">退出</div>
            </div>
        )
    }
}
