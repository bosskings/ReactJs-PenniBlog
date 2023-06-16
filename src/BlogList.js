const BlogList = ({blogsProp, title}) => {
        
    return ( 
        <div className="blog-list">
            <h1>{ title }</h1>
            {blogsProp.map((blogItems) =>(
                <div className="blog-preview" key={blogItems.id}>
                    <h3> { blogItems.title } </h3>
                    <p>Written by <i>{blogItems.author}</i> </p>
                    
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;