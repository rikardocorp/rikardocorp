import React, { Component } from 'react';
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
// import photo from '../../assets/img/logo.png';
import * as actions from "../../store/actions"

class HeaderScroll extends Component {
    render() {
        console.log('ROUTES')
        const routes = this.props.routes ? this.props.routes : null 
        const socials = this.props.socials ? this.props.socials : null 
        routes.pop()
        console.log(routes)

        const links = routes.map((li, index) => {
            return (
                <Link 
                    key={index} 
                    activeClass="active" 
                    to={li.rel}
                    // className={li.className}
                    smooth={true}
                    spy={true}
                    offset={-70}
                    duration={1000}
                >
                    <i className={li.icon}></i>
                </Link>
            )
        })

        const links_socials = socials.map((li, index)=> {
            return (
                <li key={index}>
                    <a className='hvr-pulse-grow' href={li.url} target="_blank" rel='noopener noreferrer' ><i className={"fa fa-" + li.icon}></i></a>
                </li>
            )
        })

        return (
            <div id="nav_bar">
                <NavLink className="logo" to={"/home"}>
                    <span>{this.props.initials}</span>
                    {/* <img src={photo} alt="Front-end Developer Logo, Web Developer Logo , Front End Developer Logo" /> */}
                </NavLink>
                <nav className="en">
                {
                    links
                }
                </nav>
                <ul className='socials'>
                {
                    links_socials
                }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        showing: state.general.showing,
        isHide: state.general.isHide,
        initials: state.general.portada.initials,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        isHidden: () => dispatch(actions.isHidden()),
        clickit: () => dispatch(actions.clickit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderScroll);