import "./Registration.css";

const Registration = () => {
  const DonarData = (e) => {
    e.preventDefault();
    const formData = e.target;
    const full_name = formData.full_name.value;
    const mobile = formData.mobile.value;
    const email = formData.email.value;
    const last_donate = formData.date.value;
    const blood_group = formData.blood_group.value;
    const division = formData.division.value;
    const district = formData.district.value;
    const sub_district = formData.sub_district.value;
    const password = formData.password.value;
    const confirm_password = formData.confirm_password.value;

    const mobileValidate = /^01[3-9]\d{8}$/;
    const passwordValidation =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (
      full_name === null &&
      mobile === null &&
      email === null &&
      last_donate === null &&
      blood_group === null &&
      division === null &&
      district === null &&
      sub_district === null &&
      password === null
    ) {
      return alert("all flied are required");
    } else {
      if (mobileValidate.test(mobile)) {
        if (passwordValidation.test(password)) {
          if (password === confirm_password) {
            const donarInformation = {
              full_name: full_name,
              mobile: mobile,
              email: email,
              last_donate: last_donate,
              blood_group: blood_group,
              division: division,
              district: district,
              sub_district: sub_district,
              password: password,
            };

            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
              if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(xhr.response);
              }
            };

            xhr.open(
              "POST",
              "http://localhost/durbar-20-client/readyDonar.php",
              true
            );
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xhr.send(JSON.stringify(donarInformation));
          } else {
            alert("password not match");
          }
        } else {
          alert(
            "password must be one number , small and capital letter , special character and it's length 6 character"
          );
        }
      } else {
        alert("not a valid number");
      }
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content  md:w-1/3 ">
        <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
          <form
            onSubmit={DonarData}
            className="card-body registration-form registration-form"
          >
            <h2 className="text-center text-[20px] py-5 mb-2">
              Donar Registration
            </h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name :</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered"
                name="full_name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile :</span>
              </label>
              <input
                type="number"
                placeholder="Your Mobile"
                className="input input-bordered"
                required
                name="mobile"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email :</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Donate :</span>
              </label>
              <input
                type="date"
                placeholder="last Donate"
                className="input input-bordered"
                required
                name="date"
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Blood Group :</span>
              </label>
              <select
                name="blood_group"
                id="blood-group"
                className="border py-2"
              >
                <option value="">Select group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B-">B+</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            <fieldset className="border border-gray-300 p-5">
              <legend>Present Address</legend>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Division :</span>
                </label>
                <input
                  type="text"
                  placeholder="Division"
                  className="input input-bordered"
                  required
                  name="division"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">District:</span>
                </label>
                <input
                  type="text"
                  placeholder="District"
                  className="input input-bordered"
                  required
                  name="district"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sub District :</span>
                </label>
                <input
                  type="text"
                  placeholder="Sub District"
                  className="input input-bordered"
                  required
                  name="sub_district"
                />
              </div>
            </fieldset>

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
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                required
                name="confirm_password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
