import "./HowWorks.css";
import uplaodImage from "../../assets/images/undraw_uploading_go67.svg";
import drawingImage from "../../assets/images/undraw_making_art_759c (1).svg";
import chooseStyleImage from "../../assets/images/undraw_Choose_bwbs.svg";


const HowWorks = () => {
  return (
    <div className="order-steps-container">
      <h2>How It Works</h2>
      <div className="order-steps">
        <div className="step1-left">
          <div className="step1-left-image-box">
            <img className="step1-left-image" src={chooseStyleImage} alt='choose style'/>
          </div>
        </div>

        <div className="step1-right">
          <h3 className="step1-right-title">Choose Art Style and Size</h3>
          <p className="step1-right-dec">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
        </div>

        <div className="step2-left">
          <h3 className="step2-left-title">Upload Your Photo</h3>
          <p className="step2-left-dec">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
        </div>

        <div className="step2-right">
          <div className="step2-right-image-box">
            <img className="step2-right-image" src={uplaodImage} alt=' upload' />
          </div>
        </div>

        <div className="step3-left">
          <div className="step3-left-image-box">
            <img className="step3-left-image" src={drawingImage}  alt='artist illustrator'/>
          </div>
        </div>

        <div className="step3-right">
          <h3 className="step3-right-title">Payment</h3>
          <p className="step3-right-dec">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
