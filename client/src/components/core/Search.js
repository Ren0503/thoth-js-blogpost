import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Search = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/');
        }
    }
    return (
        <Form className="search" onSubmit={submitHandler} inline>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                placeholder='Search story...'
                className='mr-sm-2 ml-sm-5'
            ></Form.Control>
            <Button type='submit' className='p-2 btn-primary'>
                <i className="fas fa-search"></i>
            </Button>
        </Form>
    )
}

export default Search;
