import React from 'react';

type SuperRangePropsType = {
  onChangeRange: (value: number[]) => void
  value: number[]
};

const SuperRange: React.FC<SuperRangePropsType> = ({ value, onChangeRange }) =>
  <input
    type={'range'}
    onChange={(event) => onChangeRange([+event.target.value, value[1]])}
    value={value[0]}
  />;

export default SuperRange;
