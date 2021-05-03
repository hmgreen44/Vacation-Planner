import { Link } from "react-router-dom"

export default function LandingPage(props) {

    return (
        <div className="landingPage container fluid text-center">
            <div className="row position-relative justify-content-center text-center mt-5 pt-4">
                <div className="col-md-8 text-center">
                    <div className="heroText text-center mb-4 mt-5">
                        <div className="trans card p-5">
                            <div className="heroText">
                                <h1>Vacation Planner</h1>
                                <p>Allow me to help organize your trip!</p>
                                <p>Already a current user? Sign in below</p>
                                <div className="input-group mt-3 mb-3">
                                    <input type="text" className="form-control" placeholder="Email" aria-label="Username" />
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Password" aria-label="Password" />
                                </div>
                                <Link to="/home/">
                                    Login</Link>
                                <div className="row text-center mt-3">
                                    <div className="col">
                                        <p>Don't have an account?</p>
                                        <Link to="/registration/">
                                            Register Here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}


