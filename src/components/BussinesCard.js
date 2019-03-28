import React, { Component } from 'react';

class BussinesCard extends Component {
    render() {
        return (
            <div className="flip-container centered">
                <div className="flipper">
                    <div className="front"></div>
                    <div className="back">
                        <h1>Petrus Rex</h1>
                        <p>Web Design & Development</p>
                        <div className="font-a-icons">
                            <div class="icon-group">
                                <span className="bold">T: </span><span className="contact">512-773-0889</span>
                                <div className="icon-group">
                                    <span className="bold">E: </span><a className="contact" href="mailto:hello@petrusrex.com" target="_top">hello@petrusrex.com</a>
                                </div>
                                <div className="icon-group">
                                    <a className="contact" href="http://www.petrusrex.com" target="_blank">www.petrusrex.com</a>
                                </div>
                            </div>
                        </div>
                        <a className="icon-box" href="https://www.facebook.com/xpetrus.rex" target="_blank"><i className="fa fa-facebook"></i></a>
                        <a className="icon-box" href="https://twitter.com/Gothburz" target="_blank"><i className="fa fa-twitter"></i></a>
                        <a className="icon-box" href="https://plus.google.com/u/0/+PetrusRex/" target="_blank"><i className="fa fa-google-plus"></i></a>
                        <a className="icon-box" href="https://www.linkedin.com/in/xpetrus" target="_blank"><i className="fa fa-linkedin"></i></a>
                        <a className="icon-box" href="https://codepen.io/Gothburz/" target="_blank"><i className="fa fa-codepen"></i></a>
                        <a className="icon-box" href="https://github.com/Gothburz" target="_blank"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default BussinesCard;