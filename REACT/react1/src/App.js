import './App.css';
import CharBox from "./components/characters/charBox";

function App() {
    return (
        <div>
            <h1>Random images set</h1>
            <CharBox title={'first block'}
                     image={'https://picsum.photos/300/200'}
            />
            <CharBox title={'second block'}
                     image={'https://picsum.photos/g/300/200'}
            />
            <CharBox title={'third block'}
                     image={'https://picsum.photos/300/200/?blur'}
            />
        </div>
    );
}

export default App;
