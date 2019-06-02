import React, { Component } from 'react';

import './header.scss';


const Header = (props) => {
    return (
        <div className="b2b-header">
            <h1 className="b2b-header__title">
                B2B Group
            </h1>

            <div className="b2b-header__language">
                <select value={props.locale} onChange={(event)=>props.onLanguageChange(event)} name="locale" id="langLocale">
                    <option value="en">English</option>
                    <option value="ar">العربية</option>
                </select>
            </div>
        </div>
    )
}

export default Header;