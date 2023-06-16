import { useState } from "react"

const Home = () => {

    const [name, setName] = useState('Boss');
    const [age, setAge] = useState(82);

    const handleClick = () =>{
        setName('Master')
        setAge(43)
    }

    return ( 
        <div className="home">

            <h1>Home Page</h1> 
            <p>{name} is { age } years old</p>
            <button onClick={handleClick}>Click me</button>         
        </div>
    );
}
 
export default Home;