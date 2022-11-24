import React, {useEffect} from 'react';
import RegionPopDiagram from "./RegionPopDiagram";
import {connect} from "react-redux";
import {getRegion} from "../../redux/regions-reducer";

const RegionPopDiagramContainer = ({view, loading, regions, getRegion}) => {
    useEffect(() => {
        const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
        regions.forEach(region => getRegion(region))
    }, [])

    if (loading || regions.length !== 5) return <h1>Loading...</h1>
    //TODO ^ исправить!
    return <RegionPopDiagram regions={regions} view={view}/>
};

const mapStateToProps = (state) => ({
    regions: state.regions.regions,
    loading: state.regions.loading,
    view: state.regions.view,
})

export default connect(mapStateToProps, {
    getRegion
})(RegionPopDiagramContainer);