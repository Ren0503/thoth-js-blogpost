import React, { useEffect, useState } from 'react';
import { detailStory, updateStory } from 'actions/storyActions';
import { Loading } from 'components/shared';
import { STORY_UPDATE_RESET } from 'constants/storyConstants';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from 'layouts/MainLayout';
import Quill from 'react-quill';

const EditScreen = () => {
    const storyId = match.params.id;

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [uploading, setUploading] = useState(false);

    const dispatch = useDispatch();

    const storyDetail = useSelector(state => state.storyDetail);
    const { loading, error, story } = storyDetail;

    const storyUpdate = useSelector(state => state.storyUpdate);
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = storyUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: STORY_UPDATE_RESET });
            history.pushState('/story');
        } else {
            if (!story.title || story._id !== storyId) {
                dispatch(detailStory(storyId));
            } else {
                setTitle(story.title);
                setImage(story.image);
                setCategory(story.category);
                setDescription(story.description);
                setBody(story.body);
            }
        }
    }, [
        dispatch,
        history,
        storyId,
        story,
        successUpdate
    ]);

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

            setImage(data.secure_url);
            setUploading(false);
        } catch (error) {
            console.error(error);
            setUploading(false);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(updateStory({
            _id: storyId,
            title,
            image,
            category,
            description,
            body,
        }));
    };

    return (
        <MainLayout>
            <h1>Edit Story</h1>
            {loadingUpdate && <Loading />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='title'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='title'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter category'
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='category'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='image'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter image url'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        ></Form.Control>
                        <Form.File
                            id='image-file'
                            label='Choose File'
                            custom
                            onChange={uploadFileHandler}
                        ></Form.File>
                        {uploading && <Loader />}
                    </Form.Group>

                    <Quill 
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />

                    <Button type="submit" variant="primary">
                        Update
                    </Button>
                </Form>
            )}
        </MainLayout>
    );
};

export default EditScreen;
