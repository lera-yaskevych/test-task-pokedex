import React from 'react';

interface Props {
  text: string;
  className: string;
  action: () => void;
  disablingCondition: boolean;
}

export const Button: React.FC<Props> = (props) => {
  const {
    text,
    className,
    action,
    disablingCondition,
  } = props;

  return (
    <button
      type="button"
      className={className}
      onClick={action}
      disabled={disablingCondition}
    >
      {text}
    </button>
  );
};
