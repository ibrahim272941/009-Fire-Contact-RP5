import React from "react";
import { options } from "../../utils/constants";
import { Grid, Form, Segment, Button } from "semantic-ui-react";

const FormComponent = ({ info, setInfo, handleFormSubmit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleOptionChange = (e, values) => {
    const { name, value } = values;
    setInfo({ ...info, [name]: value.toUpperCase() });
    console.log(values);
  };
  return (
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ width: 300 }}>
        <div className="ui piled segments">
          <div className="ui segment brand">
            <a
              href="https://github.com/clarusway"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              <code>{"<Clarusway/> "}</code>
            </a>
            <span className="design header">design</span>
          </div>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              value={info.username}
              onChange={handleInputChange}
              required
            />
            <Form.Input
              fluid
              name="phoneNumber"
              icon="phone"
              iconPosition="left"
              placeholder="Phone Number"
              value={info.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <Form.Dropdown
              options={options}
              onChange={handleOptionChange}
              placeholder="Gender"
              name="gender"
              fluid
              selection
              // value={info.gender}
              required
            />
            <Button color="teal" fluid size="large">
              Add
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default FormComponent;
