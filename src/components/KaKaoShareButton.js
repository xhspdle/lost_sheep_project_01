import React, { useEffect } from 'react';

const KakaoShareButton = () => {
    useEffect(() => {
        createKakaoButton();
    }, []);

    const createKakaoButton = () => {
        if(window.Kakao) {
            const kakao = window.Kakao;
            if(!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }
            kakao.Link.createDefaultButton({
                container: '#kakao-link-btn',
                objectType: 'feed',
                content: {
                    title: '성경인물TEST',
                    description: '#성경인물 #LostSheepProject',
                    imageUrl: ''
                }
            });
        }
    }

    return (
        <div className="kakao-share-button">
            <button id="kakao-link-btn">
                <img src="/icons/kakao.png" alt="kakao-share-icon"/>
            </button>
        </div>
    );
}

export default KakaoShareButton;