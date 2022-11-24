import React from 'react';
import s from './Header.module.css'
import {connect} from "react-redux";
import {setView} from "../../redux/regions-reducer";

const CommandButton = ({label, setView, view, currentView}) => {
    const active = currentView === view
    return <div className={s.commandButton} onClick={() => setView(view)}>
        <div className={active && s.activeB}>&hearts;</div>
        <text className={active && s.activeB}>{label}</text>
    </div>
}

const Header = ({view, setView}) => {
    return <div className={s.headerBody}>
        <h1>World's <w>Population </w>🌎</h1>
        <div className={s.commandPart}>
            <CommandButton label={"1×3"} view={1} setView={setView} currentView={view}/>
            <CommandButton label={"2×3"} view={2} setView={setView} currentView={view}/>
            <CommandButton label={"smart"} view={0} setView={setView} currentView={view}/>
        </div>
    </div>
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