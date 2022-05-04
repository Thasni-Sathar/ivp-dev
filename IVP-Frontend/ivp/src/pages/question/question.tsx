import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Card, Col, Row, Container, Dropdown } from "react-bootstrap";
import SideBar from "../../components/sideBar/sideBar";
import "./question.css";
import axiosConfig from "../../helpers/axiosConfig";
import axios from "axios";
import ToggleSwitch from '../../components//toggle/toggle';

function Question() {
  const [category, setCategory] = useState([]);
  const [question, setQuestion] = useState({});
  const [choice, setChoice] = useState("node js");

  useEffect(() => {
    axios
      .get("http://localhost:4000/admin/categories")
      .then((response: any) => {
        setCategory(response.data.data);
      })
      .catch(() => {
        alert("Category doesn't exist");
      });
  }, []);

  function handleChange(event: any) {
    const name = event.target.name;
    const value = event.target.value;
    setQuestion((values) => ({ ...values, [name]: value, choice }));
  }
  console.log(question);
  console.log(choice);

  function handleSubmit(event: any) {
    event.preventDefault();

    axios
      .post(`http://localhost:4000/admin/questions`, question)
      .then((response) => {})
      .catch((error) => {
        alert("'''error"); //=> response payload
      });
  }

  return (
    <>
      <SideBar />
      <Container>
        <h1 className="questionHeading">Question</h1>
        <Row style={{ marginLeft: "150px" }}>
          <Dropdown>
            <Dropdown.Toggle className="dropdownHeader">
              {choice}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {category.map((data) => (
                <Dropdown.Item
                  onClick={(e) => {
                    setChoice(data["categoryName"]);
                  }}
                >
                  {data["categoryName"]}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="userTextFeild"
            />
             <ToggleSwitch label="Active"/>
            <button type="submit" className="btntheme">
              Add
            </button>
          </form>
        </Row>
      </Container>
      <br></br>
    </>
  );
}

export default Question;
