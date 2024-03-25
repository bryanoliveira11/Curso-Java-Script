import React from 'react';
import { useInterval } from '../hooks/useInterval';
import { secondsToTime } from '../utils/seconds-to-time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>olá mundo {secondsToTime(mainTime)}</div>;
}
