import { Link } from "react-router-dom"

export default function LandingPage(props) {

    return (
        <div className="heroContainer row text-center mb-4 mt-5">
        <div className="col-md-12 col-sm-12">
                <h1>Hello!</h1>
                <p>Allow me to help organize your trip</p>
                <p>Already a current user? Sign in below</p>
            </div>
            <div className="row text-center mt-3">
                <div className="col-md-12 col-sm-12">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email" aria-label="Username" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                    </div>
                    <Link to="/MainPage/">
                        Login</Link>
                    <div className="row text-center mt-4"></div>
                    <div className="col-md-12 col-sm-12">
                            <p>Don't have an account?</p>
                            <Link to="/registration/">
                                Register Here</Link>
                        </div>
                    </div>
                </div>
            </div>
    )
}