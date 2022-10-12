//Llamado a la api
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import PokemonesCard from "../Components/Card";


export default function Detalles() {
    const {name} = useParams();//RECIBE EL DATO DESDE LA API, EN ESTE CASO EL NOMBRE (NAME)

    const [pokemon, setPokemon] = useState({});//ESTADO QUE GUARDA LA INFORMACIÓN DE UN ÚNICO POKEMON Y LA MUESTRA

    const url = "https://pokeapi.co/api/v2/pokemon";

    const getPokemon = async (name) =>{
        const res = await fetch(`${url}/${name}`);
        const data = await res.json();
        const src = data.sprites.other.dream_world.front_default;// VARIABLE SRC QUE NAVEGA EN LA API Y TRAE LA IMAGEN DEL POKEMON
        //DESGLOSE DE LA INFO DE LA API, Y MAPEO DE LA INFORMACION QUE SE QUIERE MOSTRAR
        const stats = data.stats.map((stat) =>({
            name: stat.stat.name,
            base: stat.base_stat
        }));
        const types = data.types.map((elem)=> elem.type.name).join(" - "); //.join=AGREGA UN STRING.
        setPokemon({name,stats,src,types});
    };

    //console.log(pokemon)

    useEffect(()=>{
        getPokemon(name);
    }, [name]);

  return (
    <>
        <PokemonesCard pokemon={pokemon}/>
    </>
  )
}
