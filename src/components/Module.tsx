import './Module.css'



export default function Module(props: IModuleProgrammable) {
    // console.log(props);
    // if(props.description){
    //     console.log(props);
    //     console.log(props.description);
    //     // props.description.map(el => console.log(el));
    //     props.description.forEach(el => el.map(el2 => console.log(el2)));
    // }

    return (
        <table className='Module parag'>
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
                            {props.sousModules.map((sMod, iMod) => (
                                <section key={iMod}>
                                    <h3>{sMod}</h3>
                                    {props.description?.[iMod].map((desc, iDesc) => (
                                        <ul key={iDesc}>
                                            {typeof (desc) === "string" ? (
                                                <li className="detail">{desc}</li>
                                            ) : (
                                                <>
                                                    <li className="detail">{desc.main}</li>
                                                    <ul>
                                                        {desc.subMod.map((m, iM) => <li key={iM} className="sous-detail">{m as string}</li>)}
                                                    </ul>
                                                </>
                                            )}
                                        </ul>
                                    ))}

                                    {/* <ul>
                                        <li className="detail">Liste détails</li>
                                        <ul>
                                            <li className="sous-detail">Liste sous-détails</li>
                                        </ul>
                                    </ul> */}
                                </section>
                            ))}
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}