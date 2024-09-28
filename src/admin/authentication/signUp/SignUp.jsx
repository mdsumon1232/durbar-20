import React from "react";

const SignUp = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const full_name = form.full_name.value;
    const email = form.email.value;
    const mobile = form.mobile.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    const mobileValidate = /^01[3-9]\d{8}$/;
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (mobileValidate.test(mobile)) {
      if (passwordValidation.test(password)) {
        if (password === confirm_password) {
          const adminRequestedData = {
            full_name: full_name,
            email: email,
            mobile: mobile,
            password: password,
          };

          const xhr = new XMLHttpRequest();
          xhr.onreadystatechange = () => {
            if (xhr.status == 200 && xhr.readyState == 4) {
              console.log(xhr.response);
            } else {
              console.log("network error");
            }
          };

          xhr.open(
            "POST",
            "http://localhost/durbar-20-client/admin_register.php",
            true
          );

          xhr.send(JSON.stringify(adminRequestedData));
        } else {
          alert("password does not match");
        }
      } else {
        alert("must be 6 character and 1 letter,number and special character");
      }
    } else {
      alert("not valid mobile number");
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleForm}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name:</span>
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered"
              required
              name="full_name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mobile</span>
            </label>
            <input
              type="number"
              placeholder="phone number"
              className="input input-bordered"
              required
              name="mobile"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
              autoComplete="Off"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="confirm_password"
              autoComplete="off"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
