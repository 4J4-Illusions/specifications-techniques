import Detail from './Detail'
import './ListeDetails.css'
import detailData from '../data/details.json'



export default function ListeDetails(){


	return (
		<div className='ListeDetails'>
			{detailData.map((data, i) => <Detail key={i} {...data}/>)}
		</div>
	)
}