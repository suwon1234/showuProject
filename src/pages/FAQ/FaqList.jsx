import React from 'react';

const FaqList = ({ isOpen, setIsOpen }) => {

  const faqDatas = [
    {
      id : 1,
      question : "질문 1",
      answer : "답변 1"
    },
    {
      id : 2,
      question : "질문 2",
      answer : "답변 2"
    },
    {
      id : 3,
      question : "질문 3",
      answer : "답변 3"
    },
    {
      id : 4,
      question : "질문 4",
      answer : "답변 4"
    },
    {
      id : 5,
      question : "질문 5",
      answer : "답변 5"
    },
    {
      id : 6,
      question : "질문 6",
      answer : "답변 6"
    },
    {
      id : 7,
      question : "질문 7",
      answer : "답변 7"
    },
    {
      id : 8,
      question : "질문 8",
      answer : "답변 8"
    },
    {
      id : 9,
      question : "질문 9",
      answer : "답변 9"
    },
    {
      id : 10,
      question : "질문 10",
      answer : "답변 10"
    }
  ]

  return (
    <div>
      <div className='question'>
        {
            <ul
              onClick={() => setIsOpen(!isOpen)}
              >
                { faqDatas.map((state, i) => (
                  <li key={i}>
                    {state.question}
                  </li>
                ))
                }
            </ul>
          }
      </div>
      <div className='answer'>
          {
            // isOpen &&
            // <ul>
            //   { faqDatas.map((state, i) => (
            //     <li key={i}>
            //       {state.answer}
            //     </li>
            //   ))}
            // </ul>
          }
      </div>
    </div>
  );
};

export default FaqList;