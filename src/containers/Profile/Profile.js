import React, { Component } from 'react';
import { ImageProfile } from '../../config/data'
import { connect } from 'react-redux'

class Profile extends Component {

    render() {
        const { dataProfile = {}, isSticky = false } = this.props
        const about_me = dataProfile
        const socials = this.props.socials ? this.props.socials : null 
        
        const links_socials = socials.map((li, index)=> {
            return (
                <li key={index}>
                    <a className='hvr-pulse-grow' href={li.url} target="_blank" rel='noopener noreferrer' ><i className={"fa fa-" + li.icon}></i></a>
                </li>
            )
        })

        return (
            <div className="profile m-auto" style={{ paddingTop: isSticky ? '60px' : '0px' }}>
                <div className="image">
                    <img src={ImageProfile} alt={about_me.fullname} />
                </div>

                <div className="mt-3 data-profile text-center">
                    <h2 className='p-0 m-0 pb-1 fullname'><strong>{about_me.fullname}</strong></h2>
                    <p className='title'>{about_me.title}</p>
                    <p>{about_me.email}</p>
                    <p>{about_me.address}</p>
                </div>

                <div className="socials">
                    <a className="flat-button" target="_blank" rel='noopener noreferrer' href={about_me.cv_url}>DOWNLOAD CSV <i className='fa fa-download' /></a>
                </div>

                <div className="nav-profile d-flex justify-content-center">
                    <ul className='profile-socials'>
                        {
                            links_socials
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        socials: state.general.about_me.socials
    }
}

export default connect(mapStateToProps)(Profile);
