import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getUserDetail, updateUserProfile } from 'actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import { Message, Loading } from 'components/shared';
import { USER_UPDATE_PROFILE_RESET } from 'constants/userConstants';
import MainLayout from 'layouts/MainLayout';
import { deleteStory, myStories } from 'actions/storyActions';
import { Link } from 'react-router-dom';

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [avatar, setAvatar] = useState('');
    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const userDetail = useSelector(state => state.userDetail);
    const { loading, error, user } = userDetail;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    const storyListMy = useSelector(state => state.storyListMy);
    const { loading: loadingStories, error: errorStories, stories } = storyListMy;

    const storyDelete = useSelector(state => state.storyDelete);
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = storyDelete

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        } else {
            if (!user || !user.name || success) {
                dispatch({ type: USER_UPDATE_PROFILE_RESET });
                dispatch(getUserDetail('profile'));
                dispatch(myStories());
            } else {
                setName(user.name);
                setEmail(user.email);
                setAvatar(user.avatar);
            }
        }
    }, [dispatch, history, userInfo, user, success, successDelete]);

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
            dispatch(deleteStory(id));
        }
    };

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "blog_post");
        formData.append("cloud_name", "dsvc4kfvh");
        setUploading(true);

        try {
            const { data } = await axios.post(
                `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/upload`,
                formData,
            );

            setAvatar(data.secure_url);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, avatar, password }));
        }
    };

    return (
        <MainLayout>
            <Row>
                <Col md={3}>
                    <h2>User Profile</h2>
                    {message && <Message variant='danger'>{message}</Message>}
                    { }
                    {success && <Message variant='success'>Profile Updated</Message>}
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <Message variant='danger'>{error}</Message>
                    ) : (
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId='name'>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type='name'
                                    placeholder='Enter name'
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='avatar'>
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter image url'
                                    value={avatar}
                                    onChange={(e) => setAvatar(e.target.value)}
                                ></Form.Control>
                                <Form.File
                                    id='image-file'
                                    label='Choose File'
                                    custom
                                    onChange={uploadFileHandler}
                                ></Form.File>
                                {uploading && <Loading />}
                            </Form.Group>

                            <Form.Group controlId='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Enter password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Form.Group controlId='confirmPassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Confirm password'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                ></Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Update
                            </Button>
                        </Form>
                    )}
                </Col>
                <Col md={9}>
                    <h2>My Stories</h2>
                    {loadingDelete && <Loading />}
                    {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
                    {loadingStories ? (
                        <Loading />
                    ) : errorStories ? (
                        <Message>{errorStories}</Message>
                    ) : (
                        <Table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TITLE</th>
                                    <th>DATE</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {stories.map((story) => (
                                    <tr key={story._id}>
                                        <td>{story._id}</td>
                                        <td>{story.title}</td>
                                        <td>{story.createdAt.substring(0, 10)}</td>
                                        <td>
                                            <Link to={`/story/${story._id}/edit`}>
                                                <Button variant='light' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </Link>
                                            <Button
                                                variant='danger'
                                                className='btn-sm'
                                                onClick={() => deleteHandler(product._id)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </Col>
            </Row>
        </MainLayout>
    );
};

export default ProfileScreen;
