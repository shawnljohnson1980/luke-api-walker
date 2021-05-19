import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Results = props => {
    // http://https://pokeapi.co/api/v2/
    console.log(props.id);
    const [res, setRes] = useState({});
    useEffect(() => {
        axios.all(`https://swapi.dev/api/people/${props.id}`,
            `https://swapi.dev/api/planets/${props.id}`,
            `https://swapi.dev/api/starships/${props.id}`,
            `https://swapi.dev/api/vehicles/${props.id}`,
            `https://swapi.dev/api/films/${props.id}`)
            .then(response => setRes(response.data))
    }, [props]);
    const back = (e) => {
        navigate("/form")
    }

    return (
        <div className="row"><button type="button" className="btn btn-info shadow border border-rounded border-warning " value="back" onClick={back}>Back</button>
            <div className="col-7 border border-rounded border-secondary shadow ml-5 mt-5 ">
                <h1 className="ml-1 text-warning">Your Star Wars Results:</h1>

                <p className="text-warning">Name: {res.people.name}</p>
                <p className="text-warning">Species: {res.species}</p>
                <p className="text-warning">StarShip: {res.starship}</p>
                <p className="text-warning">Vehicles: {res.vehicles}</p>
                <p className="text-warning">Planet: {res.planet}</p>
                <p className="text-warning">Planet: {res.film}</p>
                <div className="form-group-2 mt-5 text-right p-3">
                </div>
            </div >
        </div>
    );
}
export default Results;