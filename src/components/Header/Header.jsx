import React from 'react';
import s from './Header.module.css'
import {connect} from "react-redux";
import {setView} from "../../redux/regions-reducer";

const CommandButton = ({label, setView, view, currentView}) => {
    let classStyle = currentView === view
        ? s.nav__button_active
        : s.nav__button
    return <li className={classStyle} onClick={() => setView(view)}>
        <div>&hearts;</div>
        <p>{label}</p>
    </li>
}

const Header = ({view, setView}) => {
    return <header className={s.header}>
        <img src="./assets/logo.svg" alt="Logo" className={s.logo}/>
        <ul className={s.nav}>
            <CommandButton label={"1×3"} view={1} setView={setView} currentView={view}/>
            <CommandButton label={"2×3"} view={2} setView={setView} currentView={view}/>
            <CommandButton label={"smart"} view={0} setView={setView} currentView={view}/>
        </ul>
    </header>
};

const HeaderContainer = ({view, setView}) => {
    return <Header view={view} setView={setView}/>
}

const mapStateToProps = (state) => ({
    view: state.regions.view,
})

export default connect(mapStateToProps, {
    setView
})(HeaderContainer);
;