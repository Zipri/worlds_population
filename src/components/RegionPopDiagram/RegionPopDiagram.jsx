import React from 'react';

const Region = ({region}) => {
    return <div>
        <h1>{region.region}</h1>
    </div>
}

const RegionPopDiagram = ({regions}) => {
    return <div>
        {regions.map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
    </div>
}

export default RegionPopDiagram;