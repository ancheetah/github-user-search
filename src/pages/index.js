import { React, useEffect, useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fontsource/space-mono"
import { 
  Container, 
  Row, 
  Col, 
  Card,
  Navbar,
 } 
 from "react-bootstrap"
import { graphql } from "gatsby";
import SearchBar from "../components/SearchBar";

const pageStyles = {
  backgroundColor: "#F6F8FF",
  fontFamily: "Space Mono, monospace",
}

const IndexPage = ({data}) => {
  const [userData, setUserData] = useState(data.githubData.data.user)
  // console.log("gql data = ", data, "gql user data = ", userData);

  const getFormattedDate = (isoDate) => {
    const date = new Date(isoDate)
    const options = { day: 'numeric', month: 'long', year: 'numeric' }
    // console.log('date = ', date.toLocaleDateString(undefined, options))
    return date.toLocaleDateString('en-GB', options)
  }

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
      <SearchBar setUserData={setUserData}/>
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
                <a href="/">{`@${userData.login}`}</a>
                <Card.Subtitle className="mb-2 text-muted">
                  {'Joined ' + getFormattedDate(userData.createdAt)}
                </Card.Subtitle>
                <Card.Text>{userData.bio}</Card.Text>
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
            <li><Card.Link href="#">{userData.location || 'Not Available'}</Card.Link></li>
            <li><Card.Link href="#">{userData.websiteUrl || 'Not Available'}</Card.Link></li>
            <li><Card.Link href="#">{userData.twitterUsername || 'Not Available'}</Card.Link></li>
            <li><Card.Link href="#">{userData.company || 'Not Available'}</Card.Link></li>
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