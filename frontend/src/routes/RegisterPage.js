import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEnvelope,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register } from "../api/helpers"; // Assuming you've added a register function in helpers.
import "../style/auth.css";

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((l) => ({ ...l, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await register(formData);
    if (!result) return <div>loading...</div>;
    if (result.success) {
      navigate("/");
    } else {
      setFormErrors(result.errors);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>GET STARTED!</h1>
        <p>
          Already Have an Account? <Link to="/login">Login</Link>
        </p>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="firstName"
            name="firstName"
            placeholder="enter first name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faUser} />
          <input
            type="lastName"
            name="lastName"
            placeholder="enter last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faUserCircle} />
          <input
            type="username"
            name="username"
            placeholder="enter username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            type="email"
            name="email"
            placeholder="enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <FontAwesomeIcon icon={faLock} />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="enter password "
            onChange={handleChange}
            required
          />
        </label>
        {formErrors.length ? (
          <Alert type="error" messages={formErrors} />
        ) : null}
        <button
          className="register-button"
          type="submit"
          value="Register"
          onClick={register}
        >
          Sign Up
        </button>
        <p>
          <Link to="/">Go Back</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
