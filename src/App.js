import './App.css';
import {worldsPopApi} from "./api/api";

const App = () => {
    const getAll = async () => {
        const data = await worldsPopApi.getAll()
    }
    const getRegion = async (regionName) => {
        const data = await worldsPopApi.getRegion(regionName)
        // сортируем и возвращаем первые 10 элементов (регионы с наибольшим населением)
        return data.sort((a,b) => b.population - a.population).slice(0, 10)
    }



    return <div className="App">
        <button onClick={() => getRegion('europe').then(resp => console.log(resp))}>click</button>
    </div>
}

export default App;
