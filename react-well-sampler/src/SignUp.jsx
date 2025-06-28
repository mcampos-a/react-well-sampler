import React, { useState } from 'react';

const MainPage = () => {

    return (
        <div>
            <form action="/signup" method="POST">
                    <div className="mb-3">
                        <label for="userName" class="form-label">User Name</label>
                        <input type="text" class="form-control" id="userName" name="userName"/>
                      </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email"/>
                      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                      <label for="password" class="form-label">Password</label>
                      <input type="password" class="form-control" id="password" name="password"/>
                    </div>
                    <div className="mb-3">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="confirmPassword" name="confirmPassword"/>
                      </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
        </div>
    )
}

export default MainPage