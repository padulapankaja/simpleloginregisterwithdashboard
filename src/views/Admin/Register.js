import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import top bar
import Topbar from '../../components/Topbar';

// import controll file 

// imporrt css
import './login.css'
import TopBar from '../../components/topbar/Topbar'


class Register extends Component {
    constructor() {
        super();
        this.state = {
            uEmail: '',
            uPass: ''

        };



    }

    // ---------------------------------------- functions ----------------------------------------
    // ---------------------------------------- functions ----------------------------------------
    // ---------------------------------------- functions ----------------------------------------

    // user email
    onChangeEmail(e) {
        this.setState({
            uEmail: e.target.value
        })
    }
    // user passsword
    onChangePassword(e) {
        this.setState({
            uPass: e.target.value
        })
    }


    // sign in

    async OnSignIn(e) {
        e.preventDefault();

        await window.location.replace("/dashboard");

        // const SignIn = {
        //     uEmail: this.state.uEmail,
        //     uPass: this.state.uPass
        // }

        // var signStatus = await A_Admin.adminSign(SignIn)
        // await console.log(signStatus);

        // switch (signStatus.status) {
        //     case 200:
        //         const SignedInUser = {
        //             status: signStatus.data.status,
        //             id: signStatus.data.user.id,
        //             name: signStatus.data.user.name,
        //             email: signStatus.data.user.email,
        //             phone: signStatus.data.user.phone
        //         }
        //         A_Admin.setCookies(SignedInUser.status, SignedInUser.id, SignedInUser.name, SignedInUser.email, SignedInUser.phone);
        //         window.location.replace("/dashboard");
        //         break;
        //     default:
        //         window.location.replace("/");
        // }


    }


    // ---------------------------------------- render functions ----------------------------------------
    // ---------------------------------------- render functions ----------------------------------------
    // ---------------------------------------- render functions ----------------------------------------
    render() {
        return (
            <>
                                <TopBar/>

                <div className="wrapper bg-darks" >
                    <div className="container bg-light ">
                        <div className="row mt-5">
                            <div className="col-sm-8 col-md-8  mx-auto mt-5">
                                <div className="card card-signin my-5  shadow">
                                    <div className="card-body">
                                        <center></center>
                                        <h5 className="card-title text-center">Sign Up</h5>
                                        <br />
                                        <form className="form-signin" onSubmit={(e) => this.OnSignIn(e)}>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label >First Name</label>
                                                        <input type="email"  className="form-control" name="fname" placeholder="Enter first name" required autoFocus  />
                                                    </div>

                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label >Last name</label>
                                                        <input type="text"  className="form-control" name="lanme" placeholder="Enter last name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-label-group">
                                                        <label >Email</label>
                                                        <input type="email"  className="form-control" name="lanme" placeholder="Enter email " required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label >Password</label>
                                                        <input type="password"  className="form-control" name="pass"  required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-label-group">
                                                        <label >Confirm Password</label>
                                                        <input type="password"  className="form-control" name="conpass"  required />
                                                    </div>
                                                </div>
                                            </div>



                                            <hr className="my-4"></hr>
                                            <button className="btn btn-md btn-secondary btn-block text-uppercase" type="submit">Sign Up</button>


                                            <div className="form-label-group">
                                                <br />
                                                <label >Already have an account? <Link to="/" style={{ color: '#6c757d' }}> Sign In</Link></label>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


export default Register;