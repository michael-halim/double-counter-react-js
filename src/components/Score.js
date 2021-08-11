import React, { useState, useEffect } from 'react';
import Card from './Card';
import classes from './Score.module.css';

const MAX_SCORE = 14;
function Score(props) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    setScore(0);
    props.onToggleReset();
  }, [props.resetStatus]);

  
  const scoreClickHandler = () => {
    props.onToggleReset();
    setScore(score + 1);
    if (score >= MAX_SCORE - 1) {
      props.onWin(props.team);
      setScore(0);
    }
  };

  return (
    <Card>
      <div className={classes['card-container']}>
        <h1 className={classes.score__label}>Score</h1>
        <h3 className={classes.team}>Team {props.team}</h3>
        <h1 className={classes.score}>{score}</h1>
        <button onClick={scoreClickHandler} className={classes.addButton}>
          {props.team}
        </button>
      </div>
    </Card>
  );
}

export default Score;
