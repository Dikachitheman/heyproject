import React, { useState } from 'react';
import axios from 'axios';

CLOUD_NAME="dnrp3hjng"
API_KEY=426192398468526
API_SECRET="_XEvOs1OT6YjvStWsmt2WSYMhS4"
CLOUDINARY_URL="cloudinary://426192398468526:_XEvOs1OT6YjvStWsmt2WSYMhS4@dnrp3hjng"

import { CloudinaryContext, Image, Transformation } from '@cloudinary/react';
import {
  fader,
  colorize,
  pad,
  w,
  h,
  ar16X9,
  fetch,
  generativeFill,
  compass,
  backgroundRemoval,
} from '@cloudinary/url-gen/actions/effect';


function ImageUpload() {
  const [selectedImages, setSelectedImages] = useState([]); // Array for multiple images
  const [message, setMessage] = useState('');
  const [previewUrls, setPreviewUrls] = useState([]); // Array for image previews

  const handleImageChange = (event) => {
    const files = event.target.files;
    setSelectedImages([...files]); // Update state with all selected files

    // Generate previews for each selected image
    const newPreviewUrls = [];
    for (const file of files) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviewUrls.push(reader.result);
        setPreviewUrls(newPreviewUrls); // Update preview URLs array
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedImages.length) {
      setMessage('Please select one or more images to upload.');
      return;
    }

    const formData = new FormData();
    for (const image of selectedImages) {
        console.log(image)
        formData.append('image', image); // Add each image to the form data
    }

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message); // Replace with your backend response message
      setSelectedImages([]); // Clear state after successful upload
      setPreviewUrls([]);
    } catch (error) {
      console.error('Error uploading images:', error);
      setMessage('An error occurred during upload. Please try again.');
    }

  };

  const handleFill = () => {
    const cloudName = CLOUD_NAME; // Replace with your Cloudinary Cloud Name
    const transformedUrl = fetch(`upload/${selectedImages[0].name}`)
      .url(
        new CloudinaryContext({ cloudName }).image('fill'),
        [
          fader('red', 30),
          pad(w: 400, h: 400),
          ar16X9(),
          generativeFill({ color: 'skyblue', opacity: 80 }),
        ]
      );
    setTransformedImageUrl(transformedUrl);
  };

  const handleRemoveBackground = () => {
    const cloudName = CLOUD_NAME; // Replace with your Cloudinary Cloud Name
    const transformedUrl = fetch(`upload/${selectedImages[0].name}`)
      .url(
        new CloudinaryContext({ cloudName }).image('remove_background'),
        [
          backgroundRemoval(opacity: 150, radius: 10),
          pad(w: 400, h: 400),
          ar16X9(),
        ]
      );
    setTransformedImageUrl(transformedUrl);
  };

  const handleChangeColor = () => {
    const cloudName = CLOUD_NAME; // Replace with your Cloudinary Cloud Name
    const transformedUrl = fetch(`upload/${selectedImages[0].name}`)
      .url(
        new CloudinaryContext({ cloudName }).image('change_color'), // Assuming you have a transformation for color change
        [
          colorize('purple'), // Use your desired color here
          pad(w: 400, h: 400),
          ar16X9(),
        ]
      );
    setTransformedImageUrl(transformedUrl);
  };

  return (
    <div className='flex'>
        <div className='flex-col'>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" multiple onChange={handleImageChange} />
                <button type="submit">Upload Images</button>
            </form>
            {previewUrls.length > 0 && ( // Conditionally render preview images
                <div className='flex'>
                {previewUrls.map((previewUrl, index) => (
                    <img key={index} src={previewUrl} alt="Selected Image Preview" width="200" height="200" />
                ))}
                </div>
            )}

            {transformedImageUrl && ( // Conditionally render transformed image
            <div>
                <h2>Transformed Image</h2>
                <CloudinaryContext cloudName="dnrp3hjng" >
                    <Image publicId={transformedImageUrl} width="400" height="400" />
                </CloudinaryContext>
            </div>
            )}

            <p>{message}</p>
        </div>

        <div className='flex-col ml-7'>
            <div>
                <button onClick={handleFill}>Fill</button>
            </div>
            <div>
                <button onClick={handleRemoveBackground}>Remove Background</button>
            </div>
            <div>
                <button onClick={handleChangeColor}>Change Color</button>
            </div>
        </div>

    </div>
  );
}

export default ImageUpload;
