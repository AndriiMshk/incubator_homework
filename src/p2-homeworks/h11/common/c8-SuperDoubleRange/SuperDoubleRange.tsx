import React from 'react';
import { Box } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';

type SuperDoubleRangePropsType = {
  onChangeRange: (value: number[]) => void
  value: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({ onChangeRange, value }) => {

  const onChangeValueHandler = (event: React.ChangeEvent<{}>, values: number[]) => {
      onChangeRange(values);
  };

  const minDistance = 10;

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    console.log(activeThumb);
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      onChangeRange([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      onChangeRange([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        //@ts-ignore
        onChange={onChangeValueHandler}
        valueLabelDisplay="auto"
      />
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        //@ts-ignore
        onChange={handleChange1}
        valueLabelDisplay="auto"
        // getAriaValueText={valuetext}
        // disableSwap
      />
    </Box>
  );
};

export default SuperDoubleRange;
