import { navigate } from '@reach/router';



const Home = props => {
    const Enter = (e) => {
        navigate('/form')
    }
    return (
        <section className="section border border-warning border-rounded ">
            <h2 className="bg-half-white text-center p-3">Looking for information about your favorite Starwars characters, ships, and more?</h2>
            <h3 className=" bg-half-white text-center mt-5 ">Enter Here<button onClick={Enter} type="button" className="btn btn-info border border-rounded border-warning shadow ml-5 ">Enter here</button></h3>
        </section>
    );
}
export default Home;