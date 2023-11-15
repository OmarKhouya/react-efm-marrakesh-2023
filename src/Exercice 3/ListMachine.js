import Machine from './Machine'
import MachinePanier from'./MachinePanier'
import {useState} from 'react';

export default function ListMachine(){
    const listMachine = [
        {id:1, reference: 'ref1', marque: 'LG', prix: 5000, description: 'Machine à laver LG 8kg'},
        {id:2, reference: 'ref2', marque: 'WHIRLPOOL', prix: 9000, description: 'Refrigerateur whirlpool'},
        {id:3, reference: 'ref3',marque: 'Nespresso', prix: 1500, description: 'Machine à café Nespresso'},
    ]
    const [panier, setPanier] = useState([])
    const styleListMachine = {border: '5px solid red', padding: '5px', width: "640px"}
    return (
        <div style={styleListMachine}>
            <h1> Liste des Machines </h1> 
            <ul style={{listStyleType: 'none', padding: '5px'}}>
                {listMachine.map(machine=><Machine infos={machine} setPanier={setPanier} panier={panier}/>)}
            </ul>
            {panier.length === 0 ?  <h1>votre panier est vide </h1> :
                <div>
                    <h2>lists des articles de votre panier sont : </h2>
                    <ul style={{listStyleType: 'none', padding: '5px'}}>
                        {panier.map(machine=><MachinePanier panier={machine} />)}
                    </ul>
                </div>}
        </div>
    )
}







