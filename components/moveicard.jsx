import "./moviecard.css"

const moviecard = ({img,name})=>{
    return(
        <div className="carddiv">
            <img src={img} className="img" ></img>
            <div className="info" >
                <p>{name}</p>
            </div>
        </div>
    )
}
export default moviecard;