import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Education.css';
const Educations =()=>{
    const [inputList,setInputList] = useState([{Program:'',Institute:'',start_mm:'',start_yyyy:'',end_mm:'',end_yyyy:'',City:'',Course:''}])
    const [val,newvalue] = useState("Education");

    const handleOnChange =(e,index)=>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleOnClick = () => {
        setInputList([...inputList,{Program:'',Institute:'',start_mm:'',start_yyyy:'',end_mm:'',end_yyyy:'',City:'',Course:''}])
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
           <div>
                <div>
                    <input type='text' name={"Program"} placeholder='Study Program' className='Program'/>
                </div>
                <div>
                    <input type='text' name={"Institute"} placeholder='Institution/Place of Education' className='Institute'/>
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
        <input type={"text"} placeholder={"city/country"} name={"City"} className={"city"} onChange={e=>handleOnChange(e,i)}/>
        </div>
            <div className='courses'>
                <p>Courses:</p>
                <input type={"text"} placeholder={"course/thesis/project"} name={"Course"} onChange={e=>handleOnChange(e,i)}/>
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
    )
}


export default Educations;