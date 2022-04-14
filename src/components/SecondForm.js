import React, { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

function SecondForm() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit=""
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>firstName</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback type="invalid">error</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>lastName </Form.Label>
              <Form.Control
                type="text"
                name="lastName "
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>lastName </Form.Label>
              <Form.Control
                type="text"
                name="address  "
                value={values.address}
                onChange={handleChange}
                isValid={touched.address && !errors.address}
              />
            </Form.Group>
            <Button mb="4" type="submit">
              Submit form
            </Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default SecondForm;
