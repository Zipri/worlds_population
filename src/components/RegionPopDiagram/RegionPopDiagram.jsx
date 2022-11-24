import React from 'react';
import s from './RegionPopDiagram.module.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
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
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',

                    'rgba(112, 224, 12, 0.2)',
                    'rgba(0, 21, 255, 0.2)',
                    'rgba(168, 140 ,0, 0.2)',
                    'rgba(220, 0, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',

                    'rgba(112, 224, 12, 1)',
                    'rgba(0, 21, 255, 1)',
                    'rgba(168, 140 ,0, 1)',
                    'rgba(220, 0, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return <div>
        <h1>{region.region}</h1>
        <Doughnut data={data} />
    </div>
}

const RegionPopDiagram = ({regions}) => {
    return <div className={s.diagramsBodySmart}>
        {regions.map(regionInfo => <Region key={regionInfo.region[1]} region={regionInfo}/>)}
    </div>
}

export default RegionPopDiagram;