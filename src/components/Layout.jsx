import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    // console.log(props);
    // const {children} = props;
    return (
        <div className="d-flex flex-column align-content-between">
            <Header/>
                {props.children}
            <Footer/>
        </div>
    )
}

export default Layout