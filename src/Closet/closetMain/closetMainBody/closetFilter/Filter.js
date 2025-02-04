import React, { useState } from "react";
import data from "./closetFilterBody/closetComponent/data";
import TypeRadio from "./closetFilterBody/closetFilterType-Texture-Style/FilterTypeTextureStyle";
import ColorCheck from "../closetFilter/closetFilterBody/closetFilterColor/FilterColorCheck"
import "./Filter.css"

// [내 옷장] Filter 구성 요소


// 재질 라디오 버튼
const TextureRadio = () => {
    const [radio, setRadio] = useState([]);
    const handleClickRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
            <label className="m-l-20">
                <input
                    id='radio1'
                    type='radio'
                    value='면'
                    checked={radio === '면'}
                    onChange={handleClickRadioButton}
                />
                면
            </label>

            <label className="m-l-20">
                <input
                    id='radio2'
                    type='radio'
                    value='니트'
                    checked={radio === '니트'}
                    onChange={handleClickRadioButton}
                />
                니트
            </label>

            <label className="m-l-20">
                <input
                    id='radio3'
                    type='radio'
                    value='벨벳'
                    checked={radio === '벨벳'}
                    onChange={handleClickRadioButton}
                />
                벨벳
            </label>
            <label className="m-l-20">
                <input
                    id='radio4'
                    type='radio'
                    value='합성섬유'
                    checked={radio === '합성섬유'}
                    onChange={handleClickRadioButton}
                />
                합성섬유
            </label>

            <label className="m-l-20">
                <input
                    id='radio5'
                    type='radio'
                    value='재질 기타'
                    checked={radio === '재질 기타'}
                    onChange={handleClickRadioButton}
                />
                기타
            </label>
        </div>
    );
}

// 스타일 라디오 버튼
const StyleRadio = () => {
    const [radio, setRadio] = useState([]);
    const handleClickRadioButton = (e) => {
        setRadio(e.target.value);
        console.log(e.target.value);
    }
    return (
        <div>
            <label className="m-l-20">
                <input
                    id='casual'
                    type='radio'
                    value='캐주얼'
                    checked={radio === '캐주얼'}
                    onChange={handleClickRadioButton}
                />
                캐주얼
            </label>

            <label className="m-l-20">
                <input
                    id='lovely'
                    type='radio'
                    value='러블리'
                    checked={radio === '러블리'}
                    onChange={handleClickRadioButton}
                />
                러블리
            </label>

            <label className="m-l-20">
                <input
                    id='highteen'
                    type='radio'
                    value='하이틴'
                    checked={radio === '하이틴'}
                    onChange={handleClickRadioButton}
                />
                하이틴
            </label>
            <label className="m-l-20">
                <input
                    id='spoty'
                    type='radio'
                    value='스포티'
                    checked={radio === '스포티'}
                    onChange={handleClickRadioButton}
                />
                스포티
            </label>

            <label className="m-l-20">
                <input
                    id='street'
                    type='radio'
                    value='스트릿'
                    checked={radio === '스트릿'}
                    onChange={handleClickRadioButton}
                />
                스트릿
            </label>

            <label className="m-l-20">
                <input
                    id='modern'
                    type='radio'
                    value='모던'
                    checked={radio === '모던'}
                    onChange={handleClickRadioButton}
                />
                모던
            </label>

            <label className="m-l-20">
                <input
                    id='styleEtc'
                    type='radio'
                    value='스타일 기타'
                    checked={radio === '스타일 기타'}
                    onChange={handleClickRadioButton}
                />
                기타
            </label>
        </div>
    );
}

const Accordion = () => {

    const [cardOnOff, setCardOnOff] = useState(data);
    const showList = data;
    // const [search, setSearch] = useState('');
    const [text, setText] = useState('필터 열기'); // 필터 열기/닫기 state


    const getQnACard = (item, index) => {
        return (
            <div className="faq-card" key={index}>
                <div>
                    <button
                        className="filter-btn"
                        onClick={() => {
                            let tempCard = cardOnOff;
                            tempCard[index].show = !tempCard[index].show;
                            setCardOnOff([...tempCard]);
                            console.log(text)
                            text === '필터 열기' ? setText('필터 닫기') : setText('필터 열기')
                        }}>
                        {text}
                    </button>

                    {/* <BiSearchAlt2 className="search-item" />
                    <input type='text' value={search} onChange={onChange} /> */}
                </div>
                <div

                    className={
                        data[index].show
                            ? "faq-card-answer"
                            : "faq-card-answer faq-card-none"
                    }
                >
                    <div>
                        <hr className="hr-gray" />
                        <p className="bold">{item.type}</p>
                        <TypeRadio />
                        <hr className="hr-style" />
                        <p className="bold">{item.color}</p>
                        <ColorCheck />
                        <hr className="hr-style" />
                        <p className="bold">{item.texture}</p>
                        <TextureRadio />
                        <hr className="hr-style" />
                        <p className="bold">{item.style}</p>
                        <StyleRadio />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className="fqa-parent ">
                <div className="faq-list batch">
                    {showList.map((item, index) => getQnACard(item, index))}
                </div>

            </div>
            <hr />
        </div>
    );
};

export default Accordion;