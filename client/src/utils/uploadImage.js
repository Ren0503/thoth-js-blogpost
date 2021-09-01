import axios from 'axios';

export const checkImage = (file) => {
    const types = ['image/png', 'image/jpeg']
    let err = ''
    if (!file) return err = "File does not exist."

    if (file.size > 1024 * 1024) // 1mb
        err = "The largest image size is 1mb"

    if (!types.includes(file.type))
        err = "The image type is png / jpeg"

    return err;
}

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "blog_post");
    formData.append("cloud_name", "dsvc4kfvh");

    const { data } = await axios.post(
        `${process.env.REACT_APP_CLOUDINARY_ENDPOINT}/upload`,
        formData,
    );

    const data = await res.json()
    return { public_id: data.public_id, url: data.secure_url };
};
