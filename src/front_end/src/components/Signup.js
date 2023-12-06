import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { NavLink } from "react-router-dom";

export default function Signup() {
  return (
    <div style={{ backgroundColor: "#508bfc" }}>

      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Registration</h3>
                  <form>
                    <div className="form-group">
                      <label className="form-label" htmlFor="typeEmailX-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX-2"
                        name="email" 
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="typePasswordX-2">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX-2"
                        name="password" 
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="form1Example3"
                      />
                     
                    </div>
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
