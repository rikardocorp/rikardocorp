import React from 'react';

const ItemPublication = (props) => {

    const {year='', full_title=null, where=null, url=null, authors=null} = props.data

    return (
        <div className='list-item row mt-4'>
            {/* <div className="col col-md-12 col-xl-3">
                <span>{year}</span>
            </div>
            <div className="col col-md-12 col-xl-9">
                <p className='title'>{full_title}</p>
                <p className='location'><i>{where}</i></p>
                {
                    thesis_title && thesis_title!=='' ? (
                        <p className='title_thesis'><i>Thesis:</i> {thesis_title}</p>
                    ) : null
                }
                <p className='advisor'>{advisor}</p>
                <p className='advisor'>{detail}</p>
            </div> */}
        </div>
    );
};

export default ItemPublication;