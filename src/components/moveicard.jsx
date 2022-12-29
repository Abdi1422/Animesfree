import "./moviecard.css"


const moviecard = ({image,id,a})=>{ 
    return(
        <div className="carddiv">
            <a href={a} className="cardlink">
            <img src={image} className="img" ></img>
            <div className="info" >
                <p>{id}</p>
            </div>
            </a>
        </div>
    )
}
export default moviecard;