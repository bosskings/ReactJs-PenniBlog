import { useState } from "react"

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'Drake gets the latest Maybach', body:'The limited edition maybach has been recently accquired by drake', author:'Master', id:1},
        {title:'Davido and new cats', body:'Afro beats start Davido calls burnaboy new cat', author:'Kings', id:3},
        {title:'Boss becomes a billionaire', body:'The Famous young entrerprenuer called Boss hits billionaire status', author:'Boss', id:3},
    ]);
    return ( 
        <div className="home">
            {blogs.map((blogItems) =>(
                <div className="blog-preview" key={blogItems.id}>
                    <h3> { blogItems.title } </h3>
                    <p>Written by <i>{blogItems.author}</i> </p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;