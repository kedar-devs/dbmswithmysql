import React from 'react'
import {Link} from 'react-router-dom'
function Routest() {
    return (
        <div>
        <div className="row text-center">
        <div className="col-md-4" style={{padding: "32px 25px"}}>
        <Link to="/addsailor"><button type="button" class="btn btn-primary">ADD</button></Link>
        </div>
        <div className="col-md-4" style={{padding: "32px 25px"}}>
        <Link to="/search"><button type="button" class="btn btn-primary">Search</button></Link>
        </div>
        <div className="col-md-4" style={{padding: "32px 25px"}}>
        <Link to="/display"><button type="button" class="btn btn-primary">Display</button></Link>
        </div>
        </div>
        </div>
    )
}

export default Routest
