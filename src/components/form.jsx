import { navigate } from '@reach/router'
import React, { useState } from 'react'


const Form = props => {
    const [id, setId] = useState("")
    const [extras, setExtras] = useState(["people", "species", "Starships", "Vehicles", "planets", "Films"])
    const [myForm, setMyForm] = useState({
        id: 1,
        extras: "poeple"
    })
    const onChangeHandler = e => {

        setMyForm({ ...myForm, [e.target.name]: e.target.value })
    }
    const onSubmitHandler = e => {
        e.preventDefault()
        props.pullSw(myForm)
        const setid = id;
        const setExtras = extras;
    };
    const submit = () => {
        navigate('/results')
    }
    const Enter = () => {
        navigate('/')
    }
    return (
        <div className="col-4 mt-5 ml-5 "><button className="btn btn-info border border-warning border-rounded shadow" onClick={Enter}>Home</button>

            <form className="border border-rounded border-warning shadow p-5 text-left p-3" onSubmit={onSubmitHandler}>
                <label htmlFor="form">Search to find Starwas information here!</label>
                <div className="form-group mt-5">
                    <label htmlFor="name">Categories</label>
                    <select className=" input-lg border border-rounded border-warning shadow form-control text-left form-control" type="text" name="extras" onChange={onChangeHandler}>
                        <option value="">--Select--</option>
                        <option value="people">People</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="planets">Planets</option>
                        <option value="films">Films</option>
                    </select>
                    <div className="form-goup">
                        <label htmlFor="id" className="mt-5">ID</label>
                        <input className="border border-rounded border-warning shadow form-control text-left " type="text" name="id" />
                    </div>
                </div>
                <div className="form-group-2  ml-5 text-right ">
                    <input className="btn btn-reg btn-info border border-rounded border-secondary shadow  mt-4 text-warning" type="submit" value="Star Wars" onClick={submit} />
                </div>
            </form>
        </div>
    )
}
export default Form;