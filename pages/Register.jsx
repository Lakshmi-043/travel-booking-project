import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Enter a valid email.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      validationErrors.phone = "Enter a valid mobile number.";
    }

    if (formData.password.length < 6) {
      validationErrors.password =
        "Password must contain at least 6 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!formData.agree) {
      validationErrors.agree =
        "Please accept the terms and conditions.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration Successful!");

      navigate("/login");
    }
  };

  return (
    <div className="section">

      <div className="register-container">

        <div className="register-card">

          <h1>Create Account</h1>

          <p>
            Join TravelGo and start planning your dream vacation.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <span className="error">
                {errors.fullName}
              </span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <span className="error">
                {errors.phone}
              </span>
            )}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">
                {errors.password}
              </span>
            )}

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error">
                {errors.confirmPassword}
              </span>
            )}

            <label className="remember-box">

              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />

              I agree to the Terms & Conditions

            </label>

            {errors.agree && (
              <span className="error">
                {errors.agree}
              </span>
            )}

            <button type="submit">
              Register
            </button>

          </form>

          <div className="login-footer">

            <p>
              Already have an account?
            </p>

            <Link to="/login">
              Login Here
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Register;