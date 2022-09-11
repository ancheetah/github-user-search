import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/space-mono"
import { Container, 
  Row, 
  Col, 
  Card,
  Navbar,
 } 
 from "react-bootstrap"
import { graphql } from "gatsby";
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import SearchBar from "../components/SearchBar";

const pageStyles = {
  backgroundColor: "#F6F8FF",
  fontFamily: "Space Mono, monospace",
}

const IndexPage = ({data}) => {
  const userData = data.githubData.data.user;
  console.log("data = ", data, userData);

  // const avatar = getImage(data.avatarUrl);

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
      <SearchBar/>
    </Container>

    <Container>
      <Card>
        <Card.Body>

          <Container>
            <Row>
              <Col xs="auto">
                {/* <GatsbyImage image={avatar} alt={data.avatarUrl}/> */}
                <img src={userData.avatarUrl} width="70" height="70"/>
              </Col>
              <Col>
                <Card.Title>{userData.name}</Card.Title>
                <a href="/">{userData.login}</a>
                <Card.Subtitle className="mb-2 text-muted">{`Joined ${userData.createdAt}`}</Card.Subtitle>
                <Card.Text>{userData.bioHTML}</Card.Text>
              </Col>
            </Row>
          </Container>

          <Container className="bg-light">
            <Row>
              <Col xs={4}>
                  <Card.Title>Repos</Card.Title>
                  <Card.Text>{userData.repositories.totalCount}</Card.Text>
              </Col>
              <Col xs={4}>
                  <Card.Title>Followers</Card.Title>
                  <Card.Text>{userData.followers.totalCount}</Card.Text>
              </Col>
              <Col xs={4}>
                  <Card.Title>Following</Card.Title>
                  <Card.Text>{userData.following.totalCount}</Card.Text>
              </Col>
            </Row>
          </Container>

          <ul>
            <li><Card.Link href="#">{userData.location}</Card.Link></li>
            <li><Card.Link href="#">{userData.websiteUrl}</Card.Link></li>
            <li><Card.Link href="#">Twitter</Card.Link></li>
            <li><Card.Link href="#">{userData.company}</Card.Link></li>
          </ul>
      
        </Card.Body>
      </Card>
    </Container>

    </main>
  )
}

export default IndexPage

export const userQuery = graphql`
query {
  githubData {
    data {
      user {
        name
        login
        createdAt
        bio
        repositories {
          totalCount
        }
        followers {
          totalCount
        }
        following {
          totalCount
        }
        location
        websiteUrl
        company
        avatarUrl
      }
    }
  }
}
`