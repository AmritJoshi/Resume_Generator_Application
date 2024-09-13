import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowDown,faPenToSquare,faFilePdf,faFileImage } from '@fortawesome/free-solid-svg-icons';
import '../Styles/ControlButtons.css';
const ControlButtons=(props)=>{
  return (
    <div className='controls'>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} className='edit'/>
        <span>Themes</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faCloudArrowDown} className='download' onClick={props.download}/>
        <span>Downloads</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faFilePdf} className='pdf'/>
        </div>
        <div>
        <FontAwesomeIcon icon={faFileImage} className='png' />
        </div>
    </div>
  )
}

export default ControlButtons;