import React from 'react';
import './UserQuestions.css';

function UserQuestions({ questions }) {
  return (
    <section className="user-questions">
      <h3 className="user-questions__title">Perguntas dos Usuários</h3>
      <div className="user-questions__container">
        {questions.map((item, index) => (
          <div key={index} className="user-questions__card">
            <div className="user-questions__header">
              <p className="user-questions__user">{item.user}</p>
              <p className="user-questions__date">{item.date}</p>
            </div>
            <p className="user-questions__question"><strong>Pergunta:</strong> {item.question}</p>
            <p className="user-questions__answer"><strong>Resposta:</strong> {item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UserQuestions;
