import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';
import KakaoShareButton from '../components/KakaoShareButton';
import { ReactComponent as LinkIcon } from '../components/link-black.svg';
import "./Result.css";

class Result extends React.Component {
    state = {
        isLoading: true,
        data: []
    }
    submit = () => {
        confirmAlert({
            title: '성경인물TEST',
            message: '링크가 복사되었습니다'
        });
    }
    getResults = async () => {
        const { data: {
            data
        } } = await axios.get(
            process.env.REACT_APP_FETCH_URL
        );
        this.setState({ data, isLoading: false });
    }
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined && location.search === "") {
            history.push("/");
        }else{
            this.getResults();            
        }
    }
    render() {
        const { location } = this.props;
        const { isLoading, data } = this.state;
        if(location.state || location.search !== "") {
            let getMbti = (location.search === "") ? location.state.mbti : location.search.replace('?', '');
            return (
                <div className="result__container">
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader__text">결과생성중...</span>
                        </div>
                    ) : (
                        <div className="result">
                            {data.filter(d => d.mbti === getMbti)
                                 .map((v,i) => {
                                    return (
                                        <div key={i} className="result_div">
                                            {/* <h3>MBTI: {v.mbti}</h3> */}
                                            <p>{v.nick}</p>
                                            <h1>{v.name}</h1>
                                            <img src={`${v.img}`} alt={`pic of ${v.name}`}/>
                                            <p className="result_desc">{v.desc}</p>
                                            <ul>
                                                <li>{v.adv1}</li>
                                                <li>{v.adv2}</li>
                                                <li>{v.dis1}</li>
                                                <li>{v.avs1}</li>
                                            </ul>
                                            <p className="bible_title">{v.bible_title}</p>
                                            {v.bible_content ? 
                                            <p className="bible_content">"{v.bible_content}"</p>
                                            :
                                            <p>성경말씀 채워주세용~_~</p>
                                            }
                                            <div className="link-btn-box">
                                                <p id="link-btn-text">
                                                    결과 공유하기
                                                </p>
                                                <KakaoShareButton 
                                                    img={v.img} 
                                                    MBTI={v.mbti}
                                                    name={v.name}
                                                    nick={v.nick}
                                                />
                                                <CopyToClipboard
                                                    text={window.location.href + '?' + v.mbti}
                                                    onCopy={this.submit}
                                                >
                                                    <div id="link-btn">
                                                        <LinkIcon width="46" height="46"/>
                                                    </div>
                                                </CopyToClipboard>
                                            </div>
                                            <Link to="/">
                                                <button className="restart_btn">테스트 다시하기</button>
                                            </Link>
                                        </div>
                                    );
                                 })
                            }
                        </div>
                    )}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Result;