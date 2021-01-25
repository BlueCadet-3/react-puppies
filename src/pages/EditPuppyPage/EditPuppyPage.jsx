import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditPuppyPage(props) {
  const location = useLocation();

  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState(location.state.puppy);

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleUpdatePuppy(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Edit Puppy</h1>
      <form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pup's Name (required)</label>
          <input
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pup's Breed (required)</label>
          <input
            className="form-control"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Pup's Age</label>
          <input
            className="form-control"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-xs" disabled={invalidForm}>
          SAVE PUPPY
        </button>
        &nbsp;&nbsp;
        <Link to="/">CANCEL</Link>
      </form>
    </>
  );
}
