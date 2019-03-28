import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Home from './Home'
import About from './About'
import Footer from '../../components/Layout/Footer'

class VerticalPages extends Component {
    render() {
        return (
            <div className='vertical-page'>
                <section className='background-principal'>
                    <Element name="home" style={{ height: '100vh' }}>
                        <Home></Home>
                    </Element>
                </section>
                <section className='section'>
                    <About background={'white'}></About>
                </section>

                <section className='section' style={{minHeight: 'initial'}}>
                    <div className="background-principal w-100" style={{height: '15px'}}></div>
                    <Footer className='section'></Footer>
                </section>

                {/* <section className='background-principal'><Home></Home></section> */}
                {/* <section><About background={'white'} textColor={'black'}></About></section> */}
                {/* <section><About background={'red'} textColor={'black'}></About></section> */}
            </div>
        );
    }
}

export default VerticalPages;