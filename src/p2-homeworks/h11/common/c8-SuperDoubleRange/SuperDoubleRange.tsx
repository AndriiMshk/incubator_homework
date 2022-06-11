import React from 'react';
import { Box } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
  onChangeRange: (value: number[]) => void
  value: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({ onChangeRange, value }) => {

  const onChangeValueHandler = (event: React.ChangeEvent<{}>, values: number[]) =>
    onChangeRange(values);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        value={value}
        //@ts-ignore
        onChange={onChangeValueHandler}
        color={'secondary'}
      />
    </Box>
  );
};

export default SuperDoubleRange;
