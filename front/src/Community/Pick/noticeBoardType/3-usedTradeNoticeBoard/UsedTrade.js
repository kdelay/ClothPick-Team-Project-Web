import React, { useState, useEffect } from 'react';
import '../NoticeBoard.css'
import Header from "../../../../Header/communityHeader/Header"
import TestMethod from "../../../../Test/TestMethod";
import { FaRegHandshake } from 'react-icons/fa'
import ListBox from "../../noticeBoardComponent/MainPostComponent";


const UsedTrade = () => {
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
                <FaRegHandshake size="80" color='#BDC2BB' />
                <h2 className='text-margin-top-30 text-margin-left-10 '>옷 추천</h2>
            </div>

            {/* box */}
            {community && community
                .filter((data) => data.boardType === '2')
                .map((data) => (
                    <ListBox
                        key={data.boardId}
                        boardId={data.boardId}
                        boardType={data.boardType}
                        boardTitle={data.boardTitle}
                        boardContent={data.boardContent}
                        createAt={data.createAt}
                        userName={data.userName}
                    />
                ))}

        </div>
    );
};

export default UsedTrade;