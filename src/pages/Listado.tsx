import  { useEffect, useState } from "react";

import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getPokemons } from "../controller/getpokemon";
import { Pokemon } from "../models/pokemon.m";

const Listado = () => {

    const [Pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [query,setQuery]=useState("");

    useEffect(() => {
        const ObtenerTodos = async () => {
            const allPokemons = await getPokemons();
            setPokemons(allPokemons);
        }
        ObtenerTodos();
    });

    const filtrarpokemon=Pokemons?.slice(0,151).filter((pokemon)=>{
        return pokemon.name.toLowerCase().match(query.toLowerCase());
    })
    
    return (
        <>
            <h1>POKEDESK PARA JULIETA</h1>


            <header>
                <input value={query} placeholder="Buscar Pokemon" onChange={(event) => setQuery(event.target.value.trim())} type="text"/>
            </header>
            <div className="content-wrapper" >
                <div className="content">
                    <div className="row gap-2">

                        {filtrarpokemon?.slice(0, 151).map((pokemon) => (
                            <Card className="mx-auto" style={{ width: '18rem' }}>
                                <Card.Header>Tipo: {pokemon.type}</Card.Header>
                                <Card.Img width={80} height={120} variant="top" src={pokemon.imggif} className="d-block mx-auto w-50" />
                                <Card.Body>
                                    <Card.Title className="text-center">{pokemon.id} - {pokemon.name}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/833/833472.png"
                                            /> 
                                            <b>HP:</b> {pokemon.hp}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/297/297837.png"
                                            />
                                            <b>Ataque:</b> {pokemon.hp}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/4204/4204018.png"
                                            />
                                            <b>Defensa:</b> {pokemon.defense}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/6305/6305274.png"
                                            />
                                            <b>E.Ataque:</b> {pokemon.sp_atk}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/4211/4211006.png"
                                            />
                                            <b>E.Defensa:</b> {pokemon.sp_def}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Figure.Image
                                                width={16}
                                                height={16}
                                                src="https://cdn-icons-png.flaticon.com/128/55/55240.png"
                                            />
                                            <b>Velocidad:</b> {pokemon.speed}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        ))}

                    </div>
                </div>

            </div>


        </>
    )
}

export default Listado;