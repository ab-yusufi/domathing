import React from 'react';
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'

const Base = ({children}) => {
    return(
        <>
        <Header/>
          <div>{children}</div>
        <Footer/>
        </>
    )
}

export default Base