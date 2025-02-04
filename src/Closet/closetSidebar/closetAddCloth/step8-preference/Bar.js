import React, { useState } from "react";
import styled from "styled-components";
import './Pd.css';

function Bar(props) {
    const [count, setCount] = useState(0);

    function add_count() {
        if (count >= 4) {
            setCount(0);

        }
        else {
            setCount(count + 1);
        }
    }

    const num1 = () => {
        setCount(0);
        <Progress width={(count * 1)} />
    }

    function num2() {
        setCount(1);
        <Progress width={(count)} />
    }

    function num3() {
        setCount(2);
        <Progress width={(count * 1)} />

    }

    function num4() {
        setCount(3);
        <Progress width={(count * 1)} />

    }

    function num5() {
        setCount(4);
        <Progress width={(count * 1)} />

    }
    return (
        <div className="preference">
            <div className='pre'>
                <span id='1' onClick={num1} >완전 별로</span>
                <span id='2' onClick={num2} >별로</span>
                <span id='3' onClick={num3}>보통</span>
                <span id='4' onClick={num4}>좋아</span>
                <span id='5' onClick={num5}>완전 좋아</span>
            </div>
            <div className="bar">
                <Container onClick={() => { add_count(); }}>
                    <Progress width={(count / 4) * 100 + "%"} onChange={props.setPro(count)} />
                    <Dot />
                </Container>
            </div>
        </div>
    )
}
export default Bar;

const Container = styled.div`

margin-top:40px;
margin-left:200px;
background-color: #eee;
width: 560px;
height: 40px;
display: flex;
align-items: center;
border-radius: 20px;
`;
const Progress = styled.div`
background-color:#E8E7D2;
width: ${props => props.width};
height: 100%;
transition: width 1s;
border-radius: 20px;
justify-content: center;

`;
//프로그레스 바에 원 달아서 프로그레스 바가 차오를 때 같이 차오름
const Dot = styled.div`
  width: 70px;
  height: 70px;
  box-sizing: border-box;
  border: 10px solid #BDC2BB;
  border-radius: 35px;
  background: #BDC2BB;;
  margin-left: -35px;
  `