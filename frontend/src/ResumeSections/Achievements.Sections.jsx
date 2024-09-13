import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Achievements.css';
const Achievements=()=>{
    const [inputList,setInputList] = useState([{Achievement:'',start_mm:'',start_yyyy:'',end_mm:'',end_yyyy:'',Description:''}]);
    const [val,newvalue] = useState("Achievements");
    const handleOnChange =(e,index)=>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleOnClick = () => {
        setInputList([...inputList,{Achievement:'',start_mm:'',start_yyyy:'',end_mm:'',end_yyyy:'',Description:''}])
      }

      const handlevalchange=(e)=>{
        const value= e.target.value;
        newvalue(value);
      }

    return(
        <div>
           <input type={"text"} value={val} name={"header"} className="section-header" onChange={e=>handlevalchange(e)}/>
            { inputList.map((x,i)=>{
            return(    
                <div className="Achievements">
                <div>
                <input
                    type={"text"}
                    name="Achievement"
                    className="Achievement-title"
                    placeholder={"Achievement"}
                    onChange={e=>handleOnChange(e,i)}
                />
                </div>
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
          <div>
          <input
            type={"text"}
            name="Description"
            className="Description"
            placeholder={"Description"}
            onChange={e=>handleOnChange(e,i)}
            />
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

export default Achievements;