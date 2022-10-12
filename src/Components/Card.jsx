import { Card } from "react-bootstrap";

export default function PokemonesCard({pokemon}) {
  // const {name, stats, src, types} = pokemon;
  return (
    <div>
      <Card style={{width: "36rem"}} className="mt-4 mx-auto flex-row p-3">
        <Card.Img height="300" variant="top" src={pokemon.src} />
        <Card.Body>
          <Card.Title className="fw-bold">{pokemon.name}</Card.Title>
          <ul className="text-left">
            <Card.Text style={{width:"300px"}}>
              {pokemon.stats?.map((stat, i) => ( //AL PONER UN ? ANTES DE UN MAP, APLICA UNA CONDICIÓN (COMO EL TERNARIO)
                <li key={i}>
                  {stat.name}: {stat.base}
                </li>
                ))}
            </Card.Text>
          </ul>
          <Card.Text className="text-secondary">{pokemon.types}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
