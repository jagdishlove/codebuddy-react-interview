import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import FirstForm from '../components/FirstForm';

const Home = () => {
  const navigate = useNavigate();
  // const [form, setForm] = useState(false);

  const onSubmit = () => navigate('/posts');
  const handle = () => navigate('/firstform');

  return (
    <main>
      <div className="bg-light p-5 mb-5">
        <h1>React + Bootstrap v4</h1>
        <p>React template with Bootstrap version v4</p>
        <p>
          <Button variant="primary" onClick={() => handle()}>
            Learn more
          </Button>
        </p>
      </div>
      <Container>
        <Form>
          <Button onClick={onSubmit}>Goto Posts</Button>
        </Form>
      </Container>
    </main>
  );
};

export default Home;
