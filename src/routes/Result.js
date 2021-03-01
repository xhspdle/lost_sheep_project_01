import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Result.css";

class Result extends React.Component {
    state = {
        isLoading: true,
        data: []
    }
    getResults = async () => {
        const { data: {
            data
        } } = await axios.get(
            "https://script.google.com/macros/s/AKfycbz1_cj4zp1iQ7V8oDqLr6Pi23_-0kEdawsApkSgP5LVn6fia9Gom-Sj/exec?sheetName=db_result"
        );
        this.setState({ data, isLoading: false });
    }
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }else{
            this.getResults();            
        }
    }
    render() {
        const { location } = this.props;
        const { isLoading, data } = this.state;
        if(location.state) {
            return (
                <div className="result__container">
                    {isLoading ? (
                        <div className="loader">
                            <span className="loader__text">결과생성중...</span>
                        </div>
                    ) : (
                        <div className="result">
                            {data.filter(d => d.mbti === location.state.mbti)
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