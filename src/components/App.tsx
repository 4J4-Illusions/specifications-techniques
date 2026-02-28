import './App.css'
import moduleData from '../data/modules.json'
import Module from './Module';

export default function App() {
    console.log(moduleData);

    return (
        <main className='App'>
            <button onClick={print}></button>
            {moduleData.map((mod, i) => (
                <Module key={i} {...mod} />
            ))}
        </main>
    )
}