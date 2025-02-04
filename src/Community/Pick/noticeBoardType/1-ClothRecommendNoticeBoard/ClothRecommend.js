import React, { useState, useEffect } from 'react';
import Header from "../../../../Header/communityHeader/Header"
import { AiFillSkin } from 'react-icons/ai';
import TestMethod from "../../../../Test/TestMethod";
import ListBox from '../../noticeBoardComponent/MainPostComponent';

import '../NoticeBoard.css'


const ClothRecommend = () => {
    const [community, setCommunity] = useState([]);
    const [click, setClick] = useState(true);

    useEffect(() => {
        const get = TestMethod.CommunityTestListGet();
        const getData = () => {
            get.then(data => {
                setCommunity(data);
            });
        };
        getData();
    }, [click]);



    return (
        <div>
            <Header />
            <div className='flex commu-type margin'>
                <AiFillSkin size="80" color='#BDC2BB' />
                <h2 className='m-l-10 '>옷 추천</h2>
            </div>

            {/* box */}
            {community && community
                .filter((data) => data.boardType === '1')
                .map((data) => (
                    <ListBox
                        key={data.boardId}
                        boardId={data.boardId}
                        boardType={data.boardType}
                        boardTitle={data.boardTitle}
                        boardContent={data.boardContent}
                        boardCreateAt={data.boardCreateAt}
                        userNickname={data.userNickname}
                    />
                ))}

        </div>
    );
};


export default ClothRecommend;