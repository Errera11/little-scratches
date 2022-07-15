import React from 'react';

const Pagintation = ({currentPage, setCurrentPage, pagesArray}) => {
    return (
        <div className={'page__wrapper'}>
            {
                pagesArray.map(number =>
                    <span key={number} onClick={() => setCurrentPage(number)}
                          className={number === currentPage ? 'page current__page' : 'page'}>{number}</span>
                )
            }
        </div>
    );
};

export default Pagintation;