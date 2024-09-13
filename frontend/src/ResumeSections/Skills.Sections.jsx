import React,{useEffect, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Skills.css';
function Skills() {
  const [inputList,setInputList] = useState([{skills:''}])
  const [val,newvalue] = useState("Skills");
  const handleInputChange=(e,index)=>{
    const {name,value} = e.target;
    const list = [...inputList]
    list[index][name] = value;
    setInputList(list);
  }

  useEffect(()=>{
    const data = window.localStorage.getItem('MY_SKILLS_ITEM');
    if(data!==null) {setInputList(JSON.parse(data))};
  },[]);

  useEffect(()=>{
    window.localStorage.setItem('MY_SKILLS_ITEM',JSON.stringify(inputList))
  },[inputList]);

  const handleOnRemove=index=>{
    const list = [...inputList];
    console.log(index);
    list.splice(index,1);
    setInputList(list)
  }

  const handleOnClick = () => {
    setInputList([...inputList,{skills:''}])
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
      <div className='skills-div'>
        
      <div className='ski'>
      <input type='text' name='skills' className='form-control' onChange={e=>handleInputChange(e,i)}/>
      </div>
      {/* { inputList.length!==1 &&
      <button onClick={()=>handleOnRemove(i)}>Remove</button>
      } */}
      { 
      inputList.length -1 === i &&
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

export default Skills;