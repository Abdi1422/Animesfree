import "./navbar.css"

const navbar = ({cat})=>{  
    
    return(
        <nav className="nav">
            <h1 className="genres">Genres</h1>
            <button className="btn awardbtn" onClick={cat} >Supernatural</button>
            <button className="btn actionbtn" onClick={cat}>Action</button>
            <button className="btn" onClick={cat} >Suspense</button>
            <button className="btn" onClick={cat} >Horror</button>
            <button className="btn" onClick={cat}>Sports</button>
            <button className="btn" onClick={cat}>Comedy</button>
            <button className="btn" onClick={cat}>Adventure</button>
            <button className="btn" onClick={cat}>Romance</button>
            <button className="btn" onClick={cat}>Fantasy</button>
            <button className="btn" onClick={cat}>Slice of Life</button>
        </nav>
    )
    
}
export default navbar;