import {React,useState} from 'react'
import Button from '../UtilComps/Button'
import ContactInput from '../UtilComps/ContactInput';
import '../Styles/DialogBox.css';
function DialogBox() {
  const [toggledtab,setToggledTab] = useState(1);

  const handletoggledstate=(index)=>{
    // console.log(index);
      setToggledTab(index);
  }

  return (
    <div className='Dialog-Box'>
        <div>
            <Button value={"Discard"} size={"button--small"} color={"button--red"}/>
            <Button value={"Save"} size={"button--small"} color={"button--green"}/>
        </div>
        <div>
            <h3>Add Contact Details</h3>
        </div>
        <div className='block-tabs'>
          <div className={toggledtab === 1?"tabs active-toggled-tab": "tabs" } onClick={()=>handletoggledstate(1)}>Main Contact</div>
          <div className={toggledtab === 2?"tabs active-toggled-tab": "tabs" } onClick={()=>handletoggledstate(2)}>Social Media</div>
        </div>
        <div className={toggledtab === 1?"contents active-content": "contents" }>
          <div className='content1'>
        <div>
        <ContactInput text={"Email"}/>
        <ContactInput text={"Phone Number"}/>
        </div>
        <div>
        <ContactInput text={"Country"}/>
        <ContactInput text={"City"}/>
        <ContactInput text={"Address"}/>
        </div>
        </div>
        </div>
        <div className={toggledtab === 2?"contents active-content": "contents" }>
          <div className='content2'>
          <div>
          <ContactInput text={"Website"}/>
          <ContactInput text={"Twitter"}/>
          <ContactInput text={"Skype"}/>
          </div>
          <div>
          <ContactInput text={"LinkedIn"}/>
          <ContactInput text={"Quora"}/>
          <ContactInput text={"Facebook"}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default DialogBox;