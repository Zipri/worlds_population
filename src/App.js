import './App.css';
import RegionPopDiagramContainer from "./components/RegionPopDiagram/RegionPopDiagramContainer";
import HeaderContainer from "./components/Header/Header";

const App = () => {

    return <main className="App">
        <HeaderContainer/>
        <RegionPopDiagramContainer/>
    </main>
}

export default App;
