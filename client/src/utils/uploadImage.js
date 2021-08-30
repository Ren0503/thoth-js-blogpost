import axios from 'axios';

export const uploadImage = async () => {
    const formData = new FormData();
    formData.append("upload_preset", "blog");
    formData.append("file", file);

    const { data } = await axios.post(
        `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/image/upload`,
        formData,
        config,
    );

    return data.secure_url;
};
