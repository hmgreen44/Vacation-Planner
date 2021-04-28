import { Link } from "react-router-dom"

export default function RegisterPage(props) {

    return (
        <div className="row text-center mb-4 mt-5">
            <div className="col-md-12 col-sm-12">
                <h2>Create A New Account</h2>
                <div className="row text-center mb-4 mt-5">
                    <div className="col-md-12 col-sm-12">
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text"></div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                            </div>
                            <div class="row mx-5 mb-5 mt-1 align-items-center">
                                <div class="col-12">
                                    <label for="inputFirstName6" class="col-form-label">First Name</label>
                                </div>
                                <div class="col-12 mb-2">
                                    <input type="First Name" id="inputFirstName6" class="form-control" aria-describedby="FirstName" />
                                </div>
                                <div class="col-12 mb-2">
                                    <label for="inputFirstName6" class="col-form-label">Last Name</label>
                                </div>
                                <div class="col-12">
                                    <input type="First Name" id="inputFirstName6" class="form-control" aria-describedby="FirstName" />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )

}


