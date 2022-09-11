import { React, useState, useEffect } from 'react'
import { 
    Button,
    Form,
    InputGroup,
   } 
   from "react-bootstrap"

const SearchBar = () => {

    const [userInput, setUserInput] = useState('');

    const handleSubmit = (event) => {
        alert(userInput + ' submitted!')
        event.preventDefault()

        // Fetch new user data
        async function getData() {
            await fetch(
                "https://api.github.com/users/octocat", 
                {
                  headers: {
                    authorization: `token ${process.env.GITHUB_TOKEN}`
                  }
                }
              )
              .then( response => response.json() )
              .then( data => console.log("data = ", data))
        }
        
        getData()
    }

    useEffect(() => {
        console.log('user input: ', userInput)
    }, [userInput]) 

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <InputGroup>
                <InputGroup.Text>O</InputGroup.Text>
                <Form.Control 
                    type="text" 
                    name="username" 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Search Github username..." 
                />
                <Button type="submit">Search</Button>
                </InputGroup>
            </Form.Group>
        </Form>
    )
}

export default SearchBar