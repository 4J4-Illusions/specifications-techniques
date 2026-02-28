import Detail from './Detail'
import './ListeDetails.css'



export default function ListeDetails(){


	return (
		<div className='ListeDetails'>
			{[...Array(5)].map((_, i) => <Detail key={i}/>)}
		</div>
	)
}