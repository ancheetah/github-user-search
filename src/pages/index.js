import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/space-mono';
import { css } from '@emotion/css';
import { Container, Row, Col, Card, Navbar } from 'react-bootstrap';
import { graphql } from 'gatsby';
import SearchBar from '../components/SearchBar';

const IndexPage = ({ data }) => {
    const [userData, setUserData] = useState(data.githubData.data.user);
    const [isDark, setIsDark] = useState(false);

    const getFormattedDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    };

    const lightText = '#F2F2F2';
    const pageStyles = {
        backgroundColor: isDark ? '#141D2F' : '#F6F8FF',
        fontFamily: 'Space Mono, monospace',
        fontSize: 13,
        fontWeight: 400,
        color: isDark ? lightText : '#4B6A9B',
        margin: 'auto',
        height: '100vh'
    };

    const mainCard = {
        background: 'transparent',
        border: 'none'
    };

    const cardBody = {
        backgroundColor: isDark ? '#1E2A47' : '#FEFEFE',
        boxShadow: isDark
            ? 'none'
            : '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)',
        border: 'none',
        borderRadius: 16
    };

    const userName = {
        fontWeight: 700,
        fontSize: 16,
        color: isDark ? lightText : '#2B3442'
    };

    const header = {
        devfinder: {
            fontWeight: 700,
            fontSize: 26,
            color: isDark ? lightText : '#222731'
        },
        mode: {
            fontWeight: 700,
            letterSpacing: 2.5,
            color: isDark ? '#90A4D4' : '#222731'
        }
    };

    const githubName = {
        color: '#0079FF',
        textDecoration: 'none'
    };

    const joinDate = {
        color: isDark ? lightText : '#697C9A',
        fontSize: 13,
        fontWeight: 400,
        marginTop: 6
    };

    const statsCard = {
        background: {
            backgroundColor: isDark ? '#141D2F' : '#F6F8FF',
            borderRadius: 10,
            padding: 18,
            marginBottom: 24
        },
        header: {
            fontSize: 11,
            fontWeight: 400,
            color: isDark ? lightText : '#4B6A9B',
            textAlign: 'center'
        },
        body: {
            fontSize: 16,
            fontWeight: 700,
            color: isDark ? lightText : '#2B3442',
            textAlign: 'center'
        }
    };

    return (
        <main className={css(pageStyles)}>
            <header>
                <Navbar>
                    <Container>
                        <Navbar.Brand className={css(header.devfinder)}>
                            devfinder
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className='justify-content-end'>
                            <Navbar.Text
                                className={css(header.mode)}
                                onClick={() => setIsDark(!isDark)}
                            >
                                DARK
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Container>
                <SearchBar setUserData={setUserData} isDark={isDark} />
            </Container>

            <Container>
                <Card className={css(mainCard)}>
                    <Card.Body className={css(cardBody)}>
                        <Container>
                            <Row className='mb-4'>
                                <Col xs='auto'>
                                    <img
                                        src={userData.avatarUrl}
                                        width='70'
                                        height='70'
                                        alt='User Avatar'
                                        className='rounded-circle'
                                    />
                                </Col>
                                <Col>
                                    <Card.Title
                                        className={`mb-0 ${css(userName)}`}
                                    >
                                        {userData.name}
                                    </Card.Title>
                                    <a
                                        href='/'
                                        className={css(githubName)}
                                    >{`@${userData.login}`}</a>
                                    <Card.Subtitle className={css(joinDate)}>
                                        {'Joined ' +
                                            getFormattedDate(
                                                userData.createdAt
                                            )}
                                    </Card.Subtitle>
                                </Col>
                            </Row>
                            <Row className='mb-4'>
                                <Card.Text>{userData.bio}</Card.Text>
                            </Row>
                        </Container>

                        <Container>
                            <Row className={css(statsCard.background)}>
                                <Col xs={4}>
                                    <Card.Title
                                        className={css(statsCard.header)}
                                    >
                                        Repos
                                    </Card.Title>
                                    <Card.Text className={css(statsCard.body)}>
                                        {userData.repositories.totalCount}
                                    </Card.Text>
                                </Col>
                                <Col xs={4}>
                                    <Card.Title
                                        className={css(statsCard.header)}
                                    >
                                        Followers
                                    </Card.Title>
                                    <Card.Text className={css(statsCard.body)}>
                                        {userData.followers.totalCount}
                                    </Card.Text>
                                </Col>
                                <Col xs={4}>
                                    <Card.Title
                                        className={css(statsCard.header)}
                                    >
                                        Following
                                    </Card.Title>
                                    <Card.Text className={css(statsCard.body)}>
                                        {userData.following.totalCount}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </Container>

                        <ul>
                            <li>{userData.location || 'Not Available'}</li>
                            <li>{userData.websiteUrl || 'Not Available'}</li>
                            <li>
                                {userData.twitterUsername || 'Not Available'}
                            </li>
                            <li>{userData.company || 'Not Available'}</li>
                        </ul>
                    </Card.Body>
                </Card>
            </Container>
        </main>
    );
};

export default IndexPage;

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
`;
