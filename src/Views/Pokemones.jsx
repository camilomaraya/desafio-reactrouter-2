import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Pokemones() {
    const [pokemones, setPokemones] = useState([]); //ESTADO PARA LOS POKEMONES EXTRAIDOS DE LA API
    const [pokemonSelected, setPokemonSelected] = useState(""); //ESTADO PARA EL POKEMON SELECCIONADO 
    const navigate = useNavigate();

    const url = "https://pokeapi.co/api/v2/pokemon/?limit=256&offset=0" //ENDPOINT PARA MOSTRAR POKEMONES EN EL SELECT.

    const getPokemones = async () => {
        const res = await fetch(url);
        const {results} = await res.json();
        setPokemones(results);
    }; //FUNCION ASINCRONA QUE PERMITE UTILIZAR LOS DATOS DE LA API

    const irToPokemonDetalle = async () => {
        if (pokemonSelected) navigate(`/pokemones/${pokemonSelected}`); //NAVIGATE INDICA AL NAVEGADOR QUE CREE ESA URL CON EL NOMBRE DEL POKEMON SELECCIONADO
        else alert("Selecciona un pokemon");
    }; //VALIDACIÓN DE LA OPCION SELECCIONADA


    useEffect( () => {
        getPokemones();
    }, []);

  return (
    <>
        <div className="mt-5 text-center">
            <h1>Selecciona un pokemon</h1>
            <div className="col-5 col-sm-3 col-lg-2 mx-auto">
                <select 
                value={pokemonSelected} 
                className="form-select text-center"
                onChange={({target}) => setPokemonSelected(target.value)}//
                >
                    <option value="" disabled>
                        Pokemones
                    </option>
                    {pokemones?.map(({ name }, i) => ( //METODO MAP PARA MOSTRAR LOS POKEMONES EN EL SELECT
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <Button onClick={irToPokemonDetalle} variant="dark" className="mt-3"> 
                    Details
                </Button>
                {/* BOTÓN CON EVENTO ONCLICK QUE */}
            </div>
        </div>
    </>
  );
}
