import './Module.css'



export default function Module(props: IModuleProgrammable) {

    return (
        <table className='Module'>
            <thead>
                <tr className="row-nom">
                    <th>Module</th>
                    <th>{props.module}</th>
                </tr>
            </thead>

            <tbody>
                <tr className="row-responsable">
                    <th>Responsable(s)</th>
                    <td>{props.responsables.join(', ')}</td>
                </tr>
                <tr className="row-info">
                    <th>Spécifications</th>
                    <td>
                        <div className="sous-module">
                            {props.sousModules.map((sMod, i) => (
                                <section key={i}>
                                    <h3>{sMod}</h3>
                                    <ul>
                                        <li className="detail">Liste détails</li>
                                        <ul>
                                            <li className="sous-detail">Liste sous-détails</li>
                                        </ul>
                                    </ul>

                                </section>
                            ))}
                            {/* <ul>
                                <li className="detail">Liste détails</li>
                                <ul>
                                    <li className="sous-detail">Liste sous-détails</li>
                                </ul>
                            </ul> */}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}