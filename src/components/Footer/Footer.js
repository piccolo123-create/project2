import React from 'react';
import classes from './Footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <h1 className={"copyright"}>Ⓒ2022 All Rights Reserved.</h1>
            <div className="footer-social-icons">
                <ul className="social-icons">
                    <li><a href="" className="social-icon"> <i className="fa fa-youtube"></i></a></li>
                    <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                    <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                </ul>
            </div>
            <h1 className={"contact"}>Contact us</h1>
            <h1 className={"privacy"}>Privacy Policies</h1>
            <h1 className={"help"}>Help</h1>
        </div>
    );
};

export default Footer;