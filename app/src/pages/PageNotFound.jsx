import NavBar from "../components/NavBar"
import { Link } from "react-router-dom";



const PageNotFound = () =>{
    return(
        <>
         <NavBar />
         <div className="container my-3 py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5 bg-light text-center">
                        <h4 className="p-3 display-5">404: Page NotFound</h4>
                        <Link to="/" className="btn btn-dark">
                        <i className="fa fa-arrow-left"></i>Go to Home
                        </Link>
                    </div>
                </div>
            </div>

         </div>
        </>
    )
}

export default PageNotFound;