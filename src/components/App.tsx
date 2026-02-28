import './App.css'
import Couverture from './Couverture'
import ListeModules from './ListeModules'
import Sommaire from './Sommaire'



export default function App() {

    
    return (
        <main className='App'>
            <Couverture/>
            <Sommaire/>
            <ListeModules/>
        </main>
    )
}