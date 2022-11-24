import React, {useState} from 'react';
import s from './RegionPopDiagram.module.css'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Region = ({region}) => {
    const labels = region.countries.map(country => country.name.common)
    const population = region.countries.map(country => country.population)
    const data = {
        labels: labels,
        datasets: [
            {
                label: '# population',
                data: population,
                backgroundColor: [
                    'rgb(200,108,102)',
                    'rgb(184,83,74)',
                    'rgb(160,62,54)',
                    'rgb(139,52,46)',
                    'rgb(125,45,39)',

                    'rgb(116,50,45)',
                    'rgb(106,53,49)',
                    'rgb(89,44,42)',
                    'rgb(68,34,31)',
                    'rgb(51,24,23)',
                ],
                borderColor: [
                    'rgb(200,108,102)',
                    'rgb(184,83,74)',
                    'rgb(160,62,54)',
                    'rgb(139,52,46)',
                    'rgb(125,45,39)',

                    'rgb(116,50,45)',
                    'rgb(106,53,49)',
                    'rgb(89,44,42)',
                    'rgb(68,34,31)',
                    'rgb(51,24,23)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return <div>
        <h1 style={{color: "#2c343c", fontStyle: "italic"}}>{region.region}</h1>
        <Doughnut data={data}/>
    </div>
}

const RegionPopDiagram = ({regions, view}) => {
    const [part, setPart] = useState(true)
    switch (view) {
        case 1:
            return <div>
                {part
                    ? <div className={s.diagramsBody}>
                        {regions.slice(0,3).map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
                    </div>
                    : <div className={s.diagramsBody}>
                        {regions.slice(3).map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
                    </div>}
                <div className={s.managePart}>
                    <button className={part && s.active}
                        onClick={() => setPart(true)}>1</button>
                    <button className={!part && s.active}
                        onClick={() => setPart(false)}>2</button>
                </div>
            </div>

        case 2:
            return <div>
                <div className={s.diagramsBody}>
                    {regions.slice(0,3).map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
                </div>
                <div className={s.diagramsBody}>
                    {regions.slice(3).map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
                </div>
            </div>

        default:
            return <div className={s.diagramsBodySmart}>
                {regions.map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
            </div>
    }
}

export default RegionPopDiagram;