import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

function Interest() {
  const [inputList,setInputList] = useState([{interest:''}])

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
    setInputList([...inputList,{interest:''}])
  }
  return (
    <div>
        <h1>Interest</h1>
      { inputList.map((x,i) =>{
        return(
      <div>
      <input type='text' name='interest' className='form-control' onChange={e=>handleInputChange(e,i)}/>
      { inputList.length!==1 &&
      <button onClick={()=>handleOnRemove(i)}>Remove</button>
      }
      { inputList.length -1 === i &&
      <FontAwesomeIcon icon={faCirclePlus} onClick={handleOnClick} className="button"/>
      }
      </div>
      );
      })}
    </div>
  )
}

export default Interest;