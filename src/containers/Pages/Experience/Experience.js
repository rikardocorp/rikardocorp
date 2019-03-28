import React, { Component } from 'react';
import SubTitle from '../../../components/SubTitle'
import ItemExperience from './ItemExperience'
class Experience extends Component {
    render() {

        const { data = [], title=[], titleTextColor=null } = this.props
        if (!data || data.length === 0) return null

        const _experience = data.map((item, index) => {
            return <ItemExperience key={index} data={item}/>    
        })

        return (
            <section>
                <SubTitle texto={title}  size={0.6} titleTextColor={titleTextColor} />
                <div className='spacing-left-top list-type-2 container-fluid'>
                    {
                        _experience
                    }
                </div>
            </section>
        );
    }
}

export default Experience;