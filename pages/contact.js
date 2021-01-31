import Head from "next/head";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import PageHeader from "../components/PageHeader";
import { FiMail, FiTwitter, FiGithub, FiCoffee } from "react-icons/fi";

const Contact = () => {
  const getContact = (bg, text, icon, name, href, button) => (
    <Card
      bg={bg}
      style={{ width: "150px", height: "150px" }}
      className="mb-1"
      text={text}
    >
      <Card.Body className="d-flex align-items-center align-self-center">
        <div style={{ display: "inline" }}>
          {icon}
          <a href={href} style={{ textDecoration: "none" }} target="_blank">
            <Button
              style={{ borderRadius: "30px" }}
              size="sm"
              variant={button}
              block
            >
              {name.toUpperCase()}
            </Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );

  return (
    <>
      <Head>
        <title>Nokz | Contact</title>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1"
        />
      </Head>

      <PageHeader title={"Contact"} description={"Get in touch with me"} />

      <Container className="text-center page-content">
        <Row className="justify-content-center">
          <Col className="" xs="auto" md={3} lg={2}>
            {getContact(
              "dark",
              "light",
              <FiMail size={50} />,
              "Email",
              "mailto:nmebron@protonmail.com",
              "light"
            )}
          </Col>
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "light",
              "dark",
              <FiGithub size={50} />,
              "Github",
              "https://github.com/DreamWithNokz",
              "dark"
            )}
          </Col>
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "primary",
              "light",
              <FiTwitter size={50} />,
              "Twitter",
              "https://twitter.com/DreamWithNokz",
              "light"
            )}
          </Col>
          <Col xs="auto" md={3} lg={2}>
            {getContact(
              "info",
              "light",
              <FiCoffee size={50} />,
              "Ko-fi",
              "https://ko-fi.com/dreamwithnokz",
              "danger"
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
