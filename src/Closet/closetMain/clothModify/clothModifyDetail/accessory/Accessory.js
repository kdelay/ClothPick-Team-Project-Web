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
function MAc(props) {

    return (
        <div className='ac'>
            <br></br>
            <RadioInput label="반지" value="반지" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="귀걸이" value="귀걸이" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="목걸이" value="목걸이" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="팔찌" value="팔찌" checked={props.detail} setter={props.setDetail} />
            <RadioInput label="기타" value="기타" checked={props.detail} setter={props.setDetail} />
        </div>
    )
}
export default MAc;