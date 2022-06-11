import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';
import MinimumDistanceSlider from './test';

function HW11() {
  const [value, setValue] = useState< number[]>([0, 100]);

  return (
    <div>
      <hr />
      homeworks 11
      <div>
        <SuperRange
          value={value}
          onChangeRange={setValue}
        />
      </div>
      <div>
        <span>{value}</span>
        <SuperDoubleRange
          value={value}
          onChangeRange={setValue}
        />
      </div>
      <MinimumDistanceSlider/>
    </div>
  );
}

export default HW11;
