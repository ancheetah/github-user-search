import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, 
  Row, 
  Column, 
  Card,
  Button,
  Navbar,
  Form,
  InputGroup,
 } 
 from "react-bootstrap"

const pageStyles = {
  backgroundColor: "#F6F8FF",
  // padding: 96,
  // fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

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
