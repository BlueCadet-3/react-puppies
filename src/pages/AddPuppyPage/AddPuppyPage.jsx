import React, { useState, useRef, useEffect } from "react";

export default function AddPuppyPage(props) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    breed: "Mixed",
    age: "0",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddPuppy(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Puppy</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
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
        <button type="submit" className="btn" disabled={invalidForm}>
          ADD PUPPY
        </button>
      </form>
    </>
  );
}
