import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-dark bg-primary mb-3">
                        <div className="container">
                        <a className="navbar-brand" href="/">WikiCountries</a>
                        </div>
                    </nav>
            </div>
        )
    }
}
