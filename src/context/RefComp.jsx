import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const RefComp = () => {
  console.log("hello ref");
  const [formdata, setformdata] = useState({
    email: "",
    password: "",
  });
  //form where values of the input are controlled by state such form are called controlled forms
  return (
    <>
      <div>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="REFCOMP1" title="COMP1">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Card
                border="primary"
                variant="primary"
                style={{
                  width: "18rem",
                  backgroundColor: "lightblue",
                }}
              >
                <Card.Body color="blue">
                  <Card.Title>
                    <b>REFCOMP1</b>
                  </Card.Title>
                  <Card.Text>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={formdata?.email}
                          onChange={(e) => {
                            setformdata((prev) => {
                              return { ...prev, email: e.target.value };
                            });
                          }}
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        id="1"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={formdata?.password}
                          onChange={(e) => {
                            setformdata((prev) => {
                              return { ...prev, password: e.target.value };
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="reset"
                        onClick={() => setformdata({ email: "", password: "" })}
                      >
                        RESET
                      </Button>
                    </Form>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <b>COMMING SOON</b>
          </Tab>
          <Tab eventKey="contact" title="Contact">
            <b>
              <i>Contact comming soon</i>
            </b>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};
export default RefComp;
