import { useState } from "react";

export default function Conctenation () {
    const [mot1,setMot1] = useState('')
    const [mot2,setMot2] = useState('')
    const [motComplet,setMotComplet] = useState('')

    function handleChangeMot1(event){
        setMot1(event.target.value)
    }
    function handleChangeMot2(event){
        setMot2(event.target.value)
    }
    function AffichierInfos(event){
        setMotComplet(mot1+" "+mot2)
    }
    const styleConctenation = {backgroundColor: 'pink',width: '400px'}
    return (
        <div style={styleConctenation}>
            <label htmlFor="mot1">Mot 1 : </label>
            <input type="text" name="mot1" onChange={(event)=>{handleChangeMot1(event)}} />(*) <br />
            <label htmlFor="mot2">Mot 2 : </label>
            <input type="text" name="mot2" onChange={(event)=>{handleChangeMot2(event)}} />(*) <br />
            <input type="button" value="Afficher mot Complet" onClick={()=>{AffichierInfos()}} /><br />
            {motComplet && <p>Mot Complet est : {motComplet}</p>}
        </div>
    )

}