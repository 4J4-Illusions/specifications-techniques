import type { JSX } from 'react/jsx-runtime';
import './Module.css'



export default function Module(props: IModuleProgrammable) {
    // console.log(props);
    const specs: JSX.Element[] = [];
    props.sousModules.map((mod, i) => specs.push(
        <section key={i}>
            <h3>{mod}</h3>
            {props.description?.[i].map((desc, i) => (
                <ul key={i}>
                    {/* {typeof (desc) !== "string" && (
                        <li className="detail">{(desc as INestedModuleList).main}</li>
                    )} */}
                    {processLiDepth(desc)}
                </ul>
            ))}
        </section>
    ));
    // console.log(specs);


    function processLiDepth(elem: (string | INestedModuleList), key: (string | number) = 0) {
        let output;
        if (typeof (elem) === "string") {
            output = <li key={key} className='detail'>{elem as string}</li>
        } else {
            output =
                <>
                    <li className='detail'>{elem.main}</li>
                    <ul>
                        {elem.subMod.map((m, i) => processLiDepth(m, i))}
                    </ul>
                </>;
        }
        return output
    }


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
                            {/* {props.sousModules.map((sMod, iMod) => (
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
                                </section>
                            ))} */}
                            {specs}
                        </div>
                    </td>
                </tr>
            </tbody>
            {/* 
            <ul>
                <li className="detail">Liste détails</li>
                <ul>
                    <li className="sous-detail">Liste sous-détails</li>
                </ul>
            </ul>
            */}
        </table>
    )
}