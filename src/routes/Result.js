import React from "react";
import "./Result.css";

class Result extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        console.log(location.state.mbti);
        if(location.state) {
            return <h1>{location.state.mbti}</h1>;
        } else {
            return null;
        }
    }
}

export default Result;