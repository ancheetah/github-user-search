import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/space-mono"
import { Container, 
  Row, 
  Col, 
  Card,
  CardGroup,
  Button,
  Navbar,
  Form,
  InputGroup,
 } 
 from "react-bootstrap"

const pageStyles = {
  backgroundColor: "#F6F8FF",
  fontFamily: "Space Mono, monospace",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>

    <header>
      <Navbar>
        <Container>
          <Navbar.Brand>devfinder</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              DARK
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
      
    <Container>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <InputGroup>
          <InputGroup.Text>O</InputGroup.Text>
          <Form.Control type="text" placeholder="Search Github username..." />
          <Button>Search</Button>
        </InputGroup>
      </Form.Group>
      </Form>
    </Container>

    <Container>
      <Card>
        <Card.Body>

          <Card.Title>The Octocat</Card.Title>
          <a href="#">@octocat</a>
          <Card.Subtitle className="mb-2 text-muted">Joined 25 Jan 2011</Card.Subtitle>
          <Card.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </Card.Text>

          <Container>
            <Row>
              <Col xs={4}>
                  <Card.Title>Repos</Card.Title>
                  <Card.Text>8</Card.Text>
              </Col>
              <Col xs={4}>
                  <Card.Title>Followers</Card.Title>
                  <Card.Text>8</Card.Text>
              </Col>
              <Col xs={4}>
                  <Card.Title>Following</Card.Title>
                  <Card.Text>8</Card.Text>
              </Col>
            </Row>
          </Container>

          <ul>
            <li><Card.Link href="#">San Francisco</Card.Link></li>
            <li><Card.Link href="#">www.example.com</Card.Link></li>
            <li><Card.Link href="#">Twitter</Card.Link></li>
            <li><Card.Link href="#">@github</Card.Link></li>
          </ul>
      
        </Card.Body>
      </Card>
    </Container>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
