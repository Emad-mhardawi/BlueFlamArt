import React, { useRef, useState, useEffect, forwardRef } from "react";
import Button from "../Button/Button";
import "./ImageUpload.css";
import imagePreview from "../../assets/images/uploadImagePlaceholder.svg";
import { useDispatch, useSelector } from "react-redux";
import { collectFormData } from "../../redux-store/actions/orderActions";

const ImageUpload = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state.collectOrderData);
  const { image } = orderData;

  console.log(image);
  const [previewUrl, setPreviewUrl] = useState();

  const filePickerRef = useRef();

  useEffect(() => {
    if (!image) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(image);
  }, [image]);

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  const pickHandler = (event) => {
    if (event.target.files && event.target.files.length === 1) {
      const pickedFile = event.target.files[0];
      dispatch(collectFormData({ image: pickedFile }));
    } else {
      return;
    }
  };

  return (
    <div className="image-upload__container">
      <input
        {...props}
        id={props.id}
        ref={filePickerRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg , jpeg, .png"
        onChange={pickHandler}
      />
      <div className={`image-upload ${props.className}`}>
        <div className="image-upload__preview">
          <img
            className="preview-image"
            src={previewUrl ? previewUrl : imagePreview}
            alt="Preview "
          />
        </div>
      </div>
      <Button
        className="image-upload__button"
        type="button"
        clicked={pickImageHandler}
      >
        Pick Image
      </Button>
    </div>
  );
});

export default ImageUpload;
