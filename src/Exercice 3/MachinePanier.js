
export default function MachinePanier({panier}) {
    const {id,reference, marque, prix, description} = panier;
    return (
        <li>
            <li style={{border:"3px solid black",padding:"5px",margin:"5px"}}>
                {`id : ${id}, reference : ${reference}, marque : ${marque}, prix : ${prix}, description : ${description}`}
            </li>
        </li>
    )
}
