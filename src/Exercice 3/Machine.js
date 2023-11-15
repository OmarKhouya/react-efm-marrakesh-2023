
export default function Machine (props){

    const {id,reference, marque, prix, description} = props.infos;
    const SetPanier = props.setPanier
    const panier = props.panier 
    const styleMachine = {border: '5px solid blue', backgroundColor: 'pink', marginBottom: '10px', padding: '10px'} 
    function AjouterAuPanier() {
        SetPanier([...panier,props.infos])
        alert(`le PC de réference : ${reference} est bien ajouté dans le panier`)
    }
    return (
        <li style={styleMachine}>
            {`id : ${id}, reference : ${reference}, marque : ${marque}, prix : ${prix}, description : ${description}`}<br />
            <input type="button" value="Ajouter au panier" onClick={()=>{AjouterAuPanier()}} />
        </li>
    )
}

