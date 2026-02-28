import './ListeModules.css'
import moduleData from '../data/modules.json'
import Module from './Module'



export default function ListeModules() {


	return (
		<section className='ListeModules'>
			{moduleData.map((mod, i) => (
				<Module key={i} {...mod} />
			))}
		</section>
	)
}