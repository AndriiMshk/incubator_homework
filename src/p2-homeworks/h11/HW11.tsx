import React, { useState } from 'react';
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
  const [value, setValue] = useState<number[]>([0, 100]);

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
        <span>{value[0]} - {value[1]}</span>
        <SuperDoubleRange
          value={value}
          onChangeRange={setValue}
        />
      </div>
    </div>
  );
}

export default HW11;
