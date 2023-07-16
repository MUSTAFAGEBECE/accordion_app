import { useState } from 'react';
import data from './data';
import Questions from './Questions';

function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default App;

/* 
                                ACCORDİON_APP
data
{questions.map((question) => {
    return (<SingleQuestion key={question.id} {...question}></SingleQuestion>);})}
    const SingleQuestion = ({ title, info }) => {
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
<button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
{showInfo && <p>{info}</p>}
*/
