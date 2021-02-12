import React from "react";
import { data } from './data/question.json';
import "./Question.css";

class Question extends React.Component {
    state = {
      qId: 0,
      q: "",
      a: [
        {
          cate: "",
          text: "",
        }
      ],
      answer: []
    };
    conResult = (answer) => {
        let result = ""
        let e = 0, i = 0, n = 0, s = 0, f = 0, t = 0, j = 0, p = 0;
        answer.forEach(({ cate }, index) => {
            if(index<3) {
                cate === 'E' ? e++ : i++;
            }else if(index<6) {
                cate === 'N' ? n++ : s++;
            }else if(index<9) {
                cate === 'F' ? f++ : t++;
            }else if(index<12) {
                cate === 'J' ? j++ : p++; 
            }
        });
        result = e > i ? 'E' : 'I';
        result += n > s ? 'N' : 'S';
        result += f > t ? 'F' : 'T';
        result += j > p ? 'J' : 'P';
        console.log(result);
        return result;
    }
    nextQuestion = (qId, cate) => {
        const { history } = this.props;
        let { answer } = this.state;
        if(qId === 11) {
            const mbti = this.conResult(answer);
            history.push({
                pathname: "/result",
                state: { mbti : mbti }
            });
        }else{
            this.setState({ 
                qId: qId + 1 ,
                answer: answer.concat({ cate })
            });
        }
    }
    render() {
      const { qId } = this.state;
      return (
        <div className="question__container">
            <span id="q">
                {data[qId].q}
            </span>
            {data[qId].a.map((v, i) => {
                    return (
                        <button 
                            key={`key${i}`} 
                            id={`text${i}`}
                            onClick={() => this.nextQuestion(qId, v.cate)}            
                        >
                            {v.text}
                        </button>
                    )
                })
            }
        </div>
      );
    }
  }

export default Question;