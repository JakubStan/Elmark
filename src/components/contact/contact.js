import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./contact.scss";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ypd9h8b",
        "template_y9th3yo",
        form.current,
        "xRVnjw86DArwm0tBL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div id="contact">
        <Container>
          <h2>POZOSTAŃMY W KONTAKCIE</h2>

          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                name="user_name"
                placeholder="Imię i nazwisko"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="let"
                name="user_number"
                placeholder="Numer Telefonu"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                name="message"
                cols="30"
                rows="10"
                placeholder="Wiadomość"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              WYŚLIJ
            </Button>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default Contact;
