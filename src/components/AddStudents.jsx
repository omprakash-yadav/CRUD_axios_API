import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddStudents() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [Batch, setClass] = useState("");
  const url = "https://625fa90292df0bc0f337f5e7.mockapi.io/students/";
  //Using fetch
  // let handleSubmit = async()=>{
  //     await fetch(url,{
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify({
  //             name,
  //             email,
  //             mobile,
  //             Batch
  //         })
  //     })
  //     .then(response=>response.json())
  //     .then(res=>{
  //         navigate("/all-students")
  //     })
  //     .catch(err=>{
  //         console.log(err)
  //     })

  // }

  //using axios
  let handleSubmit = async () => {
    try {
      let response = await axios.post(url, {
        name,
        email,
        mobile,
        Batch,
      });
      console.log(response);
      if (response.status === 201) navigate("/all-students");
      else alert("Internal server error!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form className="forms">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="text"
            placeholder=" Enter mobile number"
            onChange={(e) => setMobile(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your mobile number with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter batch name"
            onChange={(e) => setClass(e.target.value)}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddStudents;
