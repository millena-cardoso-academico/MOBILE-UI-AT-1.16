import React from 'react';
import './UserComments.css';

function UserComments({ comments }) {
  const renderStars = (rating) => {
    const fullStar = '★';
    const emptyStar = '☆';
    const maxRating = 5;
    const fullStars = fullStar.repeat(rating);
    const emptyStars = emptyStar.repeat(maxRating - rating);
    return (
      <span className="user-comments__stars">
        {fullStars}
        {emptyStars}
      </span>
    );
  };

  return (
    <section className="user-comments">
      <h2 className="user-comments__title">Comentários dos Usuários</h2>
      {comments.map((comment, index) => (
        <div key={index} className="user-comments__card">
          <div className="user-comments__header">
            <p className="user-comments__user">{comment.user}</p>
            <p className="user-comments__rating">{renderStars(comment.rating)}</p>
          </div>
          <p className="user-comments__date">{comment.date}</p>
          <p className="user-comments__message">{comment.message}</p>
        </div>
      ))}
    </section>
  );
}

export default UserComments;
