import React, { useEffect } from 'react';
import { ReactComponent as Icon } from './kakao_icon.svg';

const KakaoShareButton = (props) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    const kakaoBtn = () => {
        if(window.Kakao) {
            const kakao = window.Kakao;
            if(!kakao.isInitialized()) {
                kakao.init(process.env.REACT_APP_KAKAO_KEY);
            }
            kakao.Link.sendCustom({
                templateId: 48767,
                templateArgs: {
                  THU: props.img,
                  TITLE: '성경인물 TEST 결과: ' + props.name,
                  DESC: props.nick,
                  URL: 'result?' + props.MBTI,
                  SHARE: 10
                },
            });
        }
    }
    return (
        <button id="kakao-link-btn" 
            onClick={() => kakaoBtn()}
            style={{
                border: 0,
                outline: 'none',
                cursor: 'pointer',
                backgroundColor: 'transparent'
            }}
        >
            <Icon width="48" height="48"/>
        </button>
    );
}

export default KakaoShareButton;