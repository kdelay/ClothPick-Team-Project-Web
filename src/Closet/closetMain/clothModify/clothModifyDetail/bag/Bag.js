import React from 'react'
import '../ModifyDetail.css'

const RadioInput = ({ label, value, checked, setter }) => {
    return (
        <label>
            <input type="radio" id='mchoice' checked={checked == value}
                onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
    )
}
function MBag(props) {


    return (
        <div className='ac'>
            <RadioInput label="크로스백" value="크로스백" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="숄더백" value="숄더백" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="에코백" value="에코백" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="클러치" value="클러치" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="백팩" value="백팩" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail} />
        </div>
    )
}
export default MBag;