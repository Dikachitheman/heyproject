import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import { pad } from '@cloudinary/url-gen/actions/resize';
import { ar16X9 } from '@cloudinary/url-gen/qualifiers/aspectRatio';
import { generativeFill } from '@cloudinary/url-gen/qualifiers/background';
import { generativeReplace } from "@cloudinary/url-gen/actions/effect";
import { replaceColor } from "@cloudinary/url-gen/actions/adjust";
import { backgroundRemoval } from '@cloudinary/url-gen/actions/effect';
// import { UploadWidget } from "./cldimg"

const CLOUD_NAME="dfagovcfl"
const API_KEY=426192398468526
const API_SECRET="_XEvOs1OT6YjvStWsmt2WSYMhS4"
const CLOUDINARY_URL="cloudinary://426192398468526:_XEvOs1OT6YjvStWsmt2WSYMhS4@dnrp3hjng"



function ImageUpload( props ) {
    let files = [] 
    const [selectedImages, setSelectedImages] = useState([]); // Array for multiple images
    const [message, setMessage] = useState('');
    const [previewUrls, setPreviewUrls] = useState([]);
    const [transformedUrl, settransformedUrl] = useState([]) 

    const handleImageChange = (event) => {
        files = event.target.files;
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

    const [publicId, setPublicId] = useState("null")

    const UploadWidget = () => {
        const cloudinaryRef = useRef()
        const widgetRef = useRef()
        useEffect(() => {
            cloudinaryRef.current = window.cloudinary
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: "dfagovcfl",
                uploadPreset: "kug0sp2o",
                publicId: "bnxs79hd0shhx"
                    // () => { 
                    //     const timestamp = Date.now();
                    //     return `my-custom-prefix-${timestamp}`;
                    // }
                    , 
                function (error, result) {
                    // if (error) {
                        // console.error("Upload error:", error);
                    // } else {
                        console.log("Upload result:", result.info);
                        const uploadedFile = result.info;
                        setPublicId(uploadedFile.public_id);
                        console.log(publicId) // Update state with uploaded public ID
                    // }
                }
            });
        }, []);

        return (
          <button onClick={() => widgetRef.current.open()}>
            upload
          </button>
        )
    }

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
            formData.append('myId', props.myId)
        }

        try {
        const response = await axios.post('/upload', formData, 
                // myId: props.myId
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
        );

        setMessage(response.data.message); // Replace with your backend response message
        setSelectedImages([]); // Clear state after successful upload
        setPreviewUrls([]);
        } catch (error) {
        console.error('Error uploading images:', error);
        setMessage('An error occurred during upload. Please try again.');
        }
    }

    const cld = new Cloudinary({
        cloud: {
            cloudName: CLOUD_NAME
        }
    }); 
    
    const handleFill = () => {
        const myImg = cld.image(publicId)
        new CloudinaryImage(myImg).resize(
            pad()
            .width(1500)
            .aspectRatio(ar16X9)
            .background(generativeFill())
        )
        settransformedUrl(myImg);
    }

    const handleRemoveBackground = () => {
        try {
            const myImg = cld.image(publicId)
    
            new CloudinaryImage(myImg).effect(backgroundRemoval())
            settransformedUrl(myImg);
        } catch (error) {
            console.error('Error transforming images:', error);
            setMessage('An error occurred during upload. Please try again.');
        }

    }

    const handleChangeColor = () => {
        const myImg = cld.image(publicId)

        new CloudinaryImage(myImg).adjust(
            replaceColor("maroon")
            .fromColor("#2b38aa")
            .tolerance(80)
        )
        settransformedUrl(myImg);

    };

    const handleReplaceObject = () => {
        const myImg = cld.image(publicId)

        new CloudinaryImage(myImg).effect(
        generativeReplace().from("shirt").to("cable knit sweater").preserveGeometry()
        );
        settransformedUrl(myImg);
    }


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

            {transformedUrl && ( // Conditionally render transformed image
            <div>
                <h2>Transformed Image</h2>
                <div>
                    <AdvancedImage cldImg={transformedUrl}/>
                </div>
            </div>
            )}

            <p>{message}</p>
        </div>
        { publicId && (<div> public id {publicId} </div>)}

        <div className='flex-col ml-7'>
            <div>
                <UploadWidget />
            </div>
            <div>
                <button onClick={handleFill}>Fill</button>
            </div>
            <div>
                <button onClick={handleRemoveBackground}>Remove Background</button>
            </div>
            <div>
                <button onClick={handleChangeColor}>Change Color</button>
            </div>
            <div>
                <button onClick={handleReplaceObject}>Change Color</button>
            </div>
        </div>

    </div>
  );
}

export default ImageUpload;
