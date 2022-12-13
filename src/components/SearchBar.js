import { React, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { css } from '@emotion/css';

const SearchBar = ({ setUserData, isDark }) => {
    const [userInput, setUserInput] = useState('');

    const inputText = {
        fontSize: 13,
        color: '#4B6A9B',
        backgroundColor: isDark ? '#1E2A47' : '#FFFFFF',
        border: 'none'
    };

    const searchBar = {
        boxShadow: isDark
            ? 'none'
            : '0px 16px 30px -10px rgba(70, 96, 187, 0.198567)'
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Fetch new user data
        async function getData() {
            await fetch(`https://api.github.com/users/${userInput}`)
                .then((response) => response.json())
                .then((data) => {
                    // console.log("api fetched data = ", data)
                    setUserData({
                        avatarUrl: data.avatar_url,
                        bio: data.bio,
                        company: data.company,
                        createdAt: data.created_at,
                        followers: { totalCount: data.followers },
                        following: { totalCount: data.following },
                        location: data.location,
                        login: data.login,
                        name: data.name,
                        repositories: {
                            totalCount:
                                (data.public_repos || 0) +
                                (data.owned_private_repos || 0)
                        },
                        websiteUrl: data.blog,
                        twitterUsername: data.twitter_username
                    });
                });
        }

        getData();
    };

    return (
        <Form onSubmit={handleSubmit} className='mb-4'>
            <Form.Group className={css(searchBar)} controlId='formBasicEmail'>
                <InputGroup>
                    <InputGroup.Text>O</InputGroup.Text>
                    <Form.Control
                        type='text'
                        name='username'
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder='Search Github username...'
                        className={css(inputText)}
                    />
                    <Button type='submit'>Search</Button>
                </InputGroup>
            </Form.Group>
        </Form>
    );
};

export default SearchBar;
