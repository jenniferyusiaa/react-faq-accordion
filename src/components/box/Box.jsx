import "./box.scss";
import Qna from "./qna/QNA";

const Box = () => {
  return (
    <div className="box">
      <div className="titleContainer">
        <img src="/images/icon-star.svg" alt="starimg" />
        <h1>FAQs</h1>
      </div>
      <div className="answerContainer">
        <div className="question"></div>
        <Qna />
      </div>
    </div>
  );
};

export default Box;
