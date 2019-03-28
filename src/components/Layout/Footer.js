import React,{ Component } from 'react'
// import { NavLink } from 'react-router-dom'

class Footer extends Component{

    render() {
        return (
            <footer className={"footer" + (this.props.transparent !== undefined ? " footer-transparent":"")}>
                <div className="container-fluid d-flex flex-wrap justify-content-between">
                    <nav>
                        <ul className="footer-menu">
                            <li>
                                <a href='/' className="nav-link">
                                    Home
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright text-center">
                        &copy; Coded with
                        <i className="fa fa-heart heart"></i> by
                        <a href="https://github.com/rikardocorp" target="_blank"> Ricardo Coronado</a>.
                        Designed by <a href="https://rikardocorp.github.io/" target="_blank">rikardo.corp@gmail.com</a>.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
