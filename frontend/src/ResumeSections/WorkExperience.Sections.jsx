import React, { useState } from "react";
import "../Styles/WorkExperience.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

const WorkExperience = () => {

    const [inputList,setInputList] = useState([{position:'', Company:'',start_mm:'',start_yyyy:'',end_mm:'',end_yyyy:'',city:'',description:'',responsibility:'',contact_person:'',contact_info:''}]);
    const [val,newvalue] = useState("Work Experience");
    const handleOnChange=(e,index)=>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }
    const handleOnClick = () => {
        setInputList([...inputList,{position:'', Company:'',start_mm:'',start_yyyy:'',end_mm:'',end_yyyy:'',city:'',description:'',responsibility:'',contact_person:'',contact_info:''}])
      }

      const handlevalchange=(e)=>{
        const value= e.target.value;
        newvalue(value);
    }
  return (
    <div>
        <input type={"text"} value={val} name={"header"} className="section-header" onChange={e=>handlevalchange(e)}/>
        { inputList.map((x,i)=>{
    return(
    <div className="workexp">
      <input
        type={"text"}
        name="position"
        className="position-header"
        placeholder={"Title/Position"}
        onChange={e=>handleOnChange(e,i)}
      />
      <input
        type={"text"}
        name="Company"
        className="Company-name"
        placeholder={"Workplace/Company"}
        onChange={e=>handleOnChange(e,i)}
      />
      <div className={"date-container"}>
      <div className={"start-date-container"}>
        <input
          type={"text"}
          placeholder={"mm"}
          maxlength={"2"}
          name={"start_mm"}
          pattern="[0-9]"
          className={"mm-class"}
          onChange={e=>handleOnChange(e,i)}
        />
        <div>/</div>
        <input type={"text"} placeholder={"yyyy"} maxlength={"4"} 
        name={"start_yyyy"}
        className={"yyyy-class"}
        onChange={e=>handleOnChange(e,i)}
        />
      </div>
      <div className={"end-date-container"}>
        <input
          type={"text"}
          placeholder={"mm"}
          name={"end_mm"}
          maxlength={"2"}
          pattern="[0-9]"
          className={"mm-class"}
          onChange={e=>handleOnChange(e,i)}
        />
        <div>/</div>
        <input type={"text"} placeholder={"yyyy"} maxlength={"4"} 
            name={"end_yyyy"}
          className={"yyyy-class"}
          onChange={e=>handleOnChange(e,i)}
          />
      </div>
    </div>
      <div className="citandcodesc">
        <input type={"text"} placeholder={"city/country"} name={"city"} onChange={e=>handleOnChange(e,i)} className="city"/>
        <input type={"text"} placeholder={"company description"} name={"description"} onChange={e=>handleOnChange(e,i)} className="description"/>
      </div>

      <div>
        <p>Achievements/Tasks</p>
        <div>
          <input type={"text"} name={"responsibility"} placeholder=    
            {"Accomplishment/Responsibility/Task"} onChange={e=>handleOnChange(e,i)} className="responsibility"/>
        </div>
        <div className={"ContactPerson"}>
          <p>Contact</p>
        <input type={"text"} name={"contact_person"} placeholder={"Contact Person"} onChange={e=>handleOnChange(e,i)}/>
        <input type={"text"} name={"contact_info"} placeholder={"Contact Info"} onChange={e=>handleOnChange(e,i)}/>
        </div>
      </div>
      { inputList.length -1 === i &&
      <div>
      <FontAwesomeIcon icon={faCirclePlus} onClick={handleOnClick} className="button"/>
      </div>
        }
    </div>
    );
    })}
    </div>
  );
};

export default WorkExperience;
