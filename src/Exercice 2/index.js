import { Component } from "react";

export default class Compteur extends Component {
    
    constructor(props){
        super(props)
        this.state={
            debut: props.debut,
            fin: props.fin,
            pas: props.pas,
            compteur: props.debut,
            resultat:''
        }
        this.Initialiser = this.Initialiser.bind(this);
        this.Jouer = this.Jouer.bind(this);
    }

        Initialiser(){
            this.setState((prev)=>{return {...prev,compteur:prev.debut}})
        }
        Jouer(){
            
            this.setState((prev)=>{return {...prev,compteur:prev.compteur-prev.pas}})
        }
        render(){
            return(
                <>
                    <h1>Composant Compteur Decremental</h1>

                    <ul>
                        <li>Pas : {this.state.pas}</li>
                        <li>Debut : {this.state.debut}</li>
                        <li>Fin : {this.state.fin}</li>
                    </ul>
                    
                    <input type="button" value="Jouer" onClick={()=>{this.Jouer()}} />
                    <input type="button" value="Initialier Jeu" onClick={()=>{this.Initialiser()}} />

                    {this.state.compteur > this.state.fin ? <h2>Compteur est : {this.state.compteur}</h2> : <h2>Fin de Jeu</h2>}

                </>
            )
        }
}