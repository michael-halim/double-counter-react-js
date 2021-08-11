import React, { useState } from 'react';
import classes from './Scores.module.css';
import Score from './Score';
import Modal from './Modal';

function Scores() {
  const [isReset, setIsReset] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [modalMsg, setModalMsg] = useState('');

  const resetHandler = () => {
    setIsReset(true);
  };
  const toggleResetHandler = () => {
    setIsReset(false);
  };
  const onWinHandler = (message) => {
    setModalMsg(message + ' Is Winning');
    setIsModal(true);
  };

  const onCloseModalHandler = () => {
    setIsModal(false);
  };
  return (
    <>
      {isModal && <Modal onClose={onCloseModalHandler}>{modalMsg}</Modal>}
      <div className={classes['score-container']}>
        <Score
          team='A'
          resetStatus={isReset}
          onToggleReset={toggleResetHandler}
          onWin={onWinHandler}
        />
        <Score
          team='B'
          resetStatus={isReset}
          onToggleReset={toggleResetHandler}
          onWin={onWinHandler}
        />
      </div>
      <div className={classes['reset-container']}>
        <button onClick={resetHandler} className={classes['reset-button']}>
          Reset
        </button>
      </div>
    </>
  );
}

export default Scores;
