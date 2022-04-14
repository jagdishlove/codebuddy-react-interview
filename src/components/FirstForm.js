import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function firstForm() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/secondForm');
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit=""
      initialValues={{
        emailId: '',
        password: '',
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Email id</Form.Label>
              <Form.Control
                type="email"
                name="emailId"
                value={values.emailId}
                onChange={handleChange}
                isInvalid={!!errors.emailId}
              />
              <Form.Control.Feedback type="invalid">{errors.emailId}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>

            <div>
              <Button type="submit" onClick={() => handleNavigate()}>
                Save and Next
              </Button>
            </div>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default firstForm;
