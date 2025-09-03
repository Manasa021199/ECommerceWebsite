import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const ContactPage = () =>{
    return(
        <>
        <NavBar />
        <div className="container my-3 py-3">
            <h1 className="text-center">Contact Us</h1>
            <hr />
            <div className="row my-4 h-100">
                <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <form>
                        <div className="form my-3">
                            <label for="name">Name</label>
                            <input type="text" id="name" className="form-control" placeholder="Enter your Name" />
                        </div>
                        <div className="form my-3">
                            <label for="email">Email</label>
                            <input type="email" id="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="form my-3">
                            <label for="password">Password</label>
                            <textarea id="password" className="form-control" rows="5" placeholder="Enter your Password"></textarea>
                        </div>
                        <div className="text-center">
                         <button type="submit" className="my-2 px-4 mx-auto btn btn-dark disabled">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        
        </>
    )
}

export default ContactPage;
