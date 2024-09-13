import React,{useRef} from 'react';
import '../TemplateStyles/Template1.css';
import User from '../utils/user.png';
import WorkExperience from '../ResumeSections/WorkExperience.Sections';
import Educations from '../ResumeSections/Education.Sections';
import Skills from '../ResumeSections/Skills.Sections';
import PersonalProjects from '../ResumeSections/PersonalProjects.Sections';
import Achievements from '../ResumeSections/Achievements.Sections';
import Languages from '../ResumeSections/Languages.Sections';
import Interest from '../ResumeSections/Interests.Sections';
import jsPDF from "jspdf";
import * as htmlToImage from "html-to-image";
import ControlButtons from '../Components/ControlButtons.components';

const Template1=()=>{
  const resumeRef = useRef(null);
  
  const getImage = async () => {
    const element = resumeRef.current;
    element.onload = async () => {
      // Call the image capture code here
    };
    element.onerror = (error) => {
      console.error("Image loading error:", error);
    };
    if (!element) {
      console.error("Unable to capture content. The DOM element is null.");
      return;
    }
    try {
      const dataUrl = await htmlToImage.toJpeg(element);
      console.log(dataUrl);
      return dataUrl;
    } catch (error) {
      console.error("Oops, something went wrong!", error.message);
      return null; // Return a default value or handle the error appropriately
    }
  };
  const generatePDF = async () => {
    const element = resumeRef.current;
    if(!element){
      // Alert.alert("Unable")
      console.log("Unable to capture the content at the moment");
    }
    htmlToImage.toPng(element).then((dataUrl)=>{
      const a4Width = 210;
      const a4Height = 297;
      var pdf = new jsPDF({
        orientation:"p",
        unit:"mm",
        format:[a4Width,a4Height],
      });
      const aspectRatio = a4Width/a4Height;
      const imgWidth = a4Width;
      const imgHeight = imgWidth/aspectRatio;

      const verticalMargin = (a4Height - imgHeight)/2;

      pdf.addImage(dataUrl,"PNG",0,verticalMargin,imgWidth,imgHeight);
      pdf.save("resume.pdf");
    }).catch((error)=>{
        console.log(error);
    })
  };


  return (
    <div className='back'>
      {/* <input type='button' value={"generate PDF"} onClick={generatePDF}/> */}
      <ControlButtons download={generatePDF}/>
      <div className='temps'>
        <div className='template1' ref={resumeRef} >
        <div className='biodata'>
            <div className='aboutperson'>
            <input type='text' value={"Amrit Joshi"} className='name'/>
            <input type='text' value={"Software Engineer"} className='profession'/>
            <input type='text' value={"A software Engineer"} className='biography'/>
            </div>
            <div className='picture'>
            <img src={User} alt="user" className='user'/>
            </div>
        </div>
        <div className='contact'>
          <input type='text' value={"amritscience2012@gmail.com"} className='email'/>
        </div>
        <div className='details'>
        <div className='fst-details'>
          <div className='work-exp'>
            <WorkExperience/>
          </div>
          <div>
            <Educations/>
          </div>
        </div>
          <div className='second-details'>
            <div>
            <Skills/>
            </div>
            <div>
              <PersonalProjects/>
            </div>
            <div>
              <Achievements/>
            </div>
            <div>
              <Languages/>
            </div>
            <div>
              <Interest/>
            </div>
          </div>
      </div>
        </div>
    </div>
    </div>
  )
}

export default Template1