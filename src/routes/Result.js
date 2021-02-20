import React from "react";
import axios from "axios";
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
            // if(!isLoading) {
            //     document.getElementsByClassName("App-body")[0].setAttribute("style", "")
            // }
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
                                            <h3>MBTI: {v.mbti}</h3>
                                            <p>{v.nick}</p>
                                            <h1>{v.name}</h1>
                                            <p>{v.desc}</p>
                                            <p>{v.adv1}</p>
                                            <p>{v.adv2}</p>
                                            <p>{v.dis1}</p>
                                            <p>{v.avs1}</p>
                                            <p>{v.bible_title}</p>
                                            <p>{v.bible_content}</p>
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