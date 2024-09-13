import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Languages.css';
function Languages() {
  const [inputList,setInputList] = useState([{Languages:''}])
  const [val,newvalue] = useState("Languages");
  const handleInputChange=(e,index)=>{
    const {name,value} = e.target;
    const list = [...inputList]
    list[index][name] = value;
    setInputList(list);
  }

  const handleOnRemove=index=>{
    const list = [...inputList];
    console.log(index);
    list.splice(index,1);
    setInputList(list)
  }
  
  const handleOnClick = () => {
    setInputList([...inputList,{Languages:''}])
  }

  const handlevalchange=(e)=>{
    const value= e.target.value;
    newvalue(value);
  }
  
  return (
    <div>
        <input type={"text"} value={val} name={"header"} className="section-header" onChange={e=>handlevalchange(e)}/>
      { inputList.map((x,i) =>{
        return(
      <div>
        <div className="lang-div">
          <div className='lang'>
      <input type='text' name='Languages' className='form-control' onChange={e=>handleInputChange(e,i)}/>
      </div>
      {/* { inputList.length!==1 &&
      <button onClick={()=>handleOnRemove(i)}>Remove</button>
      } */}
      { inputList.length -1 === i &&
      <FontAwesomeIcon icon={faCirclePlus} onClick={handleOnClick} className="button"/>
      }
      </div>
      </div>
      );
      })}
    </div>
  )
}

export default Languages;