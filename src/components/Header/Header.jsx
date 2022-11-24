import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return <div className={s.headerBody}>
        <h1>World's <w>Population </w>🌎</h1>
        <div className={s.commandPart}>
            <div className={s.commandButton}>
                <div>&hearts;</div>
                <text>1&times;3</text>
            </div>
            <div className={s.commandButton}>
                <div>&hearts;</div>
                <text>2&times;3</text>
            </div>
            <div className={s.commandButton}>
                <div>&hearts;</div>
                <text>smart</text>
            </div>
        </div>
    </div>
};

export default Header;