import React, { useEffect, useState, useCallback } from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './timer';
import { secondsToTime } from '../utils/seconds-to-time';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellStart = require('../sounds/bell-start.mp3');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cyclesQtdManager: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCouting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setcyclesQtdManager] = useState(
    new Array(props.cyclesQtdManager - 1).fill(true),
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setfullWorkingTime] = useState(0);
  const [numberOfPomodoros, setnumberOfPomodoros] = useState(0);

  const configureWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    props.pomodoroTime,
  ]);

  const configureRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(props.longRestTime);
      } else {
        setMainTime(props.shortRestTime);
      }

      audioStopWorking.play();
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setcyclesQtdManager(new Array(props.cyclesQtdManager - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setnumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureWork();
  }, [
    working,
    resting,
    mainTime,
    configureRest,
    configureWork,
    setcyclesQtdManager,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    props.cyclesQtdManager,
  ]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setfullWorkingTime(fullWorkingTime + 1);
    },
    timeCouting ? 1000 : null,
  );

  return (
    <div className="pomodoro">
      <h2>You are : {working ? 'Working' : 'Resting'}</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()} />
        <Button text="Rest" onClick={() => configureRest(false)} />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timeCouting ? 'Pause' : 'Play'}
          onClick={() => setTimeCounting(!timeCouting)}
        />
      </div>

      <div className="details">
        <p>Cycles Finished = {completedCycles}</p>
        <p>Hours Worked = {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros Finished = {numberOfPomodoros}</p>
      </div>
    </div>
  );
}
