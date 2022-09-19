import React, { useState } from 'react';
import styled from 'styled-components';
import './CSSContents.css'

// Contents 함수에서 사용하는 styles
const ContentsBlock = styled.div`
        width: 700px;
        height: 80px;
        background: white;
        border-radius: 8px;
        box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.25);

        margin-left: 15px;
        margin-top: 10px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
      `;

// 상의 세부사항
const TopContents = () => {
    const [topRadio, setTopRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setTopRadio(e.target.value);

    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='1'
                        checked={topRadio === '1'}
                        onChange={handleClickTopRadioButton}
                    />
                    민소매

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='2'
                        checked={topRadio === '2'}
                        onChange={handleClickTopRadioButton}
                    />
                    반팔
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='3'
                        checked={topRadio === '3'}
                        onChange={handleClickTopRadioButton}
                    />
                    5부 반팔
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='4'
                        checked={topRadio === '4'}
                        onChange={handleClickTopRadioButton}
                    />
                    긴팔
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5'
                        checked={topRadio === '5'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 아우터 세부사항
const OuterContents = () => {
    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='1'
                        checked={radio === '1'}
                        onChange={handleClickTopRadioButton}
                    />
                    가디건

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='2'
                        checked={radio === '2'}
                        onChange={handleClickTopRadioButton}
                    />
                    자켓
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='3'
                        checked={radio === '3'}
                        onChange={handleClickTopRadioButton}
                    />
                    코트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='4'
                        checked={radio === '4'}
                        onChange={handleClickTopRadioButton}
                    />
                    패딩
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5'
                        checked={radio === '5'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 하의 세부사항
const BottomContents = () => {
    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='1'
                        checked={radio === '1'}
                        onChange={handleClickTopRadioButton}
                    />
                    숏팬츠

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='2'
                        checked={radio === '2'}
                        onChange={handleClickTopRadioButton}
                    />
                    롱팬츠
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='3'
                        checked={radio === '3'}
                        onChange={handleClickTopRadioButton}
                    />
                    미니스커트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='4'
                        checked={radio === '4'}
                        onChange={handleClickTopRadioButton}
                    />
                    롱스커트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5'
                        checked={radio === '5'}
                        onChange={handleClickTopRadioButton}
                    />
                    원피스/세트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='6'
                        checked={radio === '6'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 신발 세부사항
const ShoesContents = () => {
    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='1'
                        checked={radio === '1'}
                        onChange={handleClickTopRadioButton}
                    />
                    슬리퍼/쪼리

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='2'
                        checked={radio === '2'}
                        onChange={handleClickTopRadioButton}
                    />
                    샌들
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='3'
                        checked={radio === '3'}
                        onChange={handleClickTopRadioButton}
                    />
                    플랫/로퍼
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='4'
                        checked={radio === '4'}
                        onChange={handleClickTopRadioButton}
                    />
                    스니커즈
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5'
                        checked={radio === '5'}
                        onChange={handleClickTopRadioButton}
                    />
                    운동화
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='6'
                        checked={radio === '6'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 가방 세부사항
const BagContents = () => {

    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='1'
                        checked={radio === '1'}
                        onChange={handleClickTopRadioButton}
                    />
                    크로스백

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='2'
                        checked={radio === '2'}
                        onChange={handleClickTopRadioButton}
                    />
                    숄더백
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='3'
                        checked={radio === '3'}
                        onChange={handleClickTopRadioButton}
                    />
                    에코백
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='4'
                        checked={radio === '4'}
                        onChange={handleClickTopRadioButton}
                    />
                    클러치
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5'
                        checked={radio === '5'}
                        onChange={handleClickTopRadioButton}
                    />
                    백팩
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='6'
                        checked={radio === '6'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}

// 악세사리 세부사항
const AccessoryContents = () => {

    const [radio, setRadio] = useState([]);

    const handleClickTopRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }

    return (
        <ContentsBlock>
            <h5 className='text-detail'>세부사항
                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='1'
                        checked={radio === '1'}
                        onChange={handleClickTopRadioButton}
                    />
                    반지

                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='2'
                        checked={radio === '2'}
                        onChange={handleClickTopRadioButton}
                    />
                    귀걸이
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='3'
                        checked={radio === '3'}
                        onChange={handleClickTopRadioButton}
                    />
                    목걸이
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='4'
                        checked={radio === '4'}
                        onChange={handleClickTopRadioButton}
                    />
                    팔찌
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='5'
                        checked={radio === '5'}
                        onChange={handleClickTopRadioButton}
                    />
                    원피스/세트
                </label>

                <label className='radio-contents'>
                    <input
                        type='radio'
                        value='6'
                        checked={radio === '6'}
                        onChange={handleClickTopRadioButton}
                    />
                    기타
                </label>
            </h5>

        </ContentsBlock>
    );
}


const TypeRadio = () => {

    const [radio, setRadio] = useState([]);

    // 세부사항 컴포넌트의 초기값을 false로 설정한다.
    const [topContents, setTopContents] = useState(false);
    const [outerContents, setOuterContents] = useState(false);
    const [bottomContents, setBottomContents] = useState(false);
    const [shoesContents, setShoesContents] = useState(false);
    const [bagContents, setBagContents] = useState(false);
    const [accessoryContents, setAccessoryContents] = useState(false);

    const handleClickRadioButton = (e) => {
        // const { name, type } = e.target.value
        // setShow({
        //     ...show,
        //     [name]: type
        // })
        setRadio(e.target.value);
        console.log(e.target.value);
        e.target.value === '1' ? setTopContents(true) : setTopContents(false);
        e.target.value === '2' ? setOuterContents(true) : setOuterContents(false);
        e.target.value === '3' ? setBottomContents(true) : setBottomContents(false);
        e.target.value === '4' ? setShoesContents(true) : setShoesContents(false);
        e.target.value === '5' ? setBagContents(true) : setBagContents(false);
        e.target.value === '6' ? setAccessoryContents(true) : setAccessoryContents(false);
    }

    return (
        <div>
            <label>
                <input
                    id='radio1'
                    type='radio'
                    value='1'
                    checked={radio === '1'}
                    onChange={handleClickRadioButton}
                />
                상의
            </label>

            <label>
                <input
                    id='radio2'
                    type='radio'
                    value='2'
                    checked={radio === '2'}
                    onChange={handleClickRadioButton}

                // onClick={() => {
                //     setOuterShow(!outerShow)
                // }
                // }

                />
                아우터
            </label>

            <label>
                <input
                    id='radio3'
                    type='radio'
                    value='3'
                    checked={radio === '3'}
                    onChange={handleClickRadioButton}
                />
                하의
            </label>
            <label>
                <input
                    id='radio4'
                    type='radio'
                    value='4'
                    checked={radio === '4'}
                    onChange={handleClickRadioButton}
                />
                신발
            </label>

            <label>
                <input
                    id='radio5'
                    type='radio'
                    value='5'
                    checked={radio === '5'}
                    onChange={handleClickRadioButton}
                />
                가방
            </label>

            <label>
                <input
                    id='radio6'
                    type='radio'
                    value='6'
                    checked={radio === '6'}
                    onChange={handleClickRadioButton}
                />
                악세사리
            </label>

            <label>
                <input
                    id='radio7'
                    type='radio'
                    value='7'
                    checked={radio === '7'}
                    onChange={handleClickRadioButton}
                />
                기타
            </label>
            {topContents ? <TopContents /> : <span></span>}
            {outerContents ? <OuterContents /> : <span></span>}
            {bottomContents ? <BottomContents /> : <span></span>}
            {shoesContents ? <ShoesContents /> : <span></span>}
            {bagContents ? <BagContents /> : <span></span>}
            {accessoryContents ? <AccessoryContents /> : <span></span>}

        </div>
    );
};

export default TypeRadio;