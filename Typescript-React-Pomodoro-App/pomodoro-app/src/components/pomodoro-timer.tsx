import React from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are : Working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="teste" onClick={() => alert('tá pegando ??????')} />
        <Button text="teste" onClick={() => alert('tá pegando ??????')} />
        <Button text="teste" onClick={() => alert('tá pegando ??????')} />
      </div>

      <div className="details">
        <p>some text</p>
        <p>some text</p>
        <p>some text</p>
        <p>some text</p>
      </div>
    </div>
  );
}
