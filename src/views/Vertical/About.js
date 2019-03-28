import React, { Component } from 'react';
import { Element } from 'react-scroll'

// import TextZone from '../../components/TextZone'
import Divisor from '../../components/Divisor'
import Profile from '../../containers/Profile/Profile'
import Summary from '../../containers/Pages/Summary'
import Education from '../../containers/Pages/Education/Education'
import Expertise from '../../containers/Pages/Expertise'
import Experience from '../../containers/Pages/Experience/Experience'
import { StickyContainer, Sticky } from 'react-sticky'
import { connect } from 'react-redux'

let PROFILE_SCROLL = window.innerWidth >= 768
class About extends Component {

    state = {
        aux: true
    }

    render() {
        const _background = this.props.background ? { background: this.props.background } : null
        const _textColor = this.props.textColor ? { color: this.props.textColor } : null
        const _titleTextColor = this.props.titleTextColor ? this.props.titleTextColor : null

        const about_me = this.props.about_me
        const education = this.props.education
        const expertise = this.props.expertise
        const experience = this.props.professional_experience
        const academic_experience = this.props.academic_experience
        const _summary = about_me.summary
        const _keywords = about_me.keywords

        delete about_me['summary']
        delete about_me['keywords']

        return (
            <StickyContainer>
                <div className='container-page container-fluid' style={_background}>
                    {/* <span className="tags top-tags">&lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span> */}
                    <div className="row">
                        {
                            PROFILE_SCROLL ? (
                                <div className="col-12 col-sm-12 col-md-4 col-xl-4">
                                    <Sticky bottomOffset={80}>
                                        {({ style, isSticky }) => (
                                            <div style={style} >
                                                <Profile dataProfile={about_me} isSticky={isSticky} />
                                            </div>
                                        )}
                                    </Sticky>
                                </div>
                            ) : (
                                    <div className="col-12 col-sm-12 col-md-4 col-xl-4">
                                        <div>
                                            <Profile dataProfile={about_me} />
                                        </div>
                                    </div>
                                )
                        }

                        <div className="col-12 col-sm-12 col-md-8 col-xl-8">
                            <Element name="summary">
                                <Summary summary={_summary} keywords={_keywords} />
                            </Element>
                            <Divisor count={1}></Divisor>
                            <Element name="expertise">
                                <Expertise data={expertise} />
                            </Element>
                            <Divisor count={2}></Divisor>
                            <Element name="education">
                                <Education data={education} />
                            </Element>
                            <Divisor count={3}></Divisor>
                            <Element name="experience">
                                <Experience
                                    data={experience}
                                    title={['Professional', 'Experience']} />
                                <Experience
                                    data={academic_experience}
                                    title={['Academic', 'Experience']}
                                    titleTextColor='gray' />
                            </Element>
                        </div>
                    </div>
                    {/* <span className="tags bottom-tags"> &nbsp;&nbsp;&nbsp;&lt;/body&gt;<br></br> &lt;/html&gt; </span> */}
                </div>
            </StickyContainer>
        );
    }
}

const mapStateToProps = state => {
    return {
        about_me: state.general.about_me,
        education: state.general.education,
        expertise: state.general.expertise,
        professional_experience: state.general.professional_experience,
        academic_experience: state.general.academic_experience
    }
}

export default connect(mapStateToProps)(About);
