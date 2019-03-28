import React, { Component } from 'react';
import SubTitle from '../../components/SubTitle'

class Expertise extends Component {
    render() {

        const { data = [] } = this.props
        if (!data || data.length === 0) return null


        const _expertise = data.map((item, index) => {
            return (
                <div key={index} className="col-12 col-md-6 col-xl-6">
                    <div className="row">
                        <div className="col-8">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <img src={item.url} alt=""/>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <section>
                <SubTitle texto={['Skills']} size={0.7} />
                <div className='spacing-left-top list-type-1 container-fluid'>
                    <div className="row">
                        {
                            _expertise
                        }
                    </div>

                </div>
            </section>
        );
    }
}

export default Expertise;