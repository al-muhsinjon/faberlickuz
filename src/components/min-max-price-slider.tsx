import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";

const minDistance = 10;

function valuetext(value: number) {
  return `${value}°C`;
}

interface Props {
  min: number;
  max: number;
  onPriceChange: (min: number, max: number) => void;
}

const MinMaxPriceSlider: React.FC<Props> = ({ min, max, onPriceChange }) => {
  const [value1, setValue1] = React.useState<number[]>([min, max]);

  useEffect(() => {
    setValue1([min, max]);
  }, [min, max]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
      onPriceChange(value1[0], value1[1]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        min={min}
        max={max}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        className="text-main"
      />
      <div className="flex justify-between">
        <span>{value1[0]}</span>
        <span>{value1[1]}</span>
      </div>
    </div>
  );
};

export default MinMaxPriceSlider;

// import React, { useEffect, useState } from "react";
// import Slider from "@mui/material/Slider";

// const minDistance = 10;

// function valuetext(value: number) {
//   return `${value}°C`;
// }

// interface Props {
//   min: number;
//   max: number;
//   onPriceChange: (min: number, max: number) => void;
// }

// const MinMaxPriceSlider: React.FC<Props> = ({ min, max, onPriceChange }) => {
//   const [value1, setValue1] = useState<number[]>([min, max]);

//   useEffect(() => {
//     setValue1([min, max]);
//   }, [min, max]);

//   const handleChange1 = (
//     event: Event,
//     newValue: number | number[],
//     activeThumb: number
//   ) => {
//     if (!Array.isArray(newValue)) {
//       return;
//     }

//     const [minVal, maxVal] = value1;

//     if (activeThumb === 0) {
//       const newMin = Math.min(newValue[0], maxVal - minDistance);
//       setValue1([newMin, maxVal]);
//       onPriceChange(newMin, maxVal);
//     } else {
//       const newMax = Math.max(newValue[1], minVal + minDistance);
//       setValue1([minVal, newMax]);
//       onPriceChange(minVal, newMax);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <Slider
//         getAriaLabel={() => "Minimum distance"}
//         value={value1}
//         min={min}
//         max={max}
//         onChange={handleChange1}
//         valueLabelDisplay="auto"
//         getAriaValueText={valuetext}
//         disableSwap
//         className="text-main"
//       />
//       <div className="flex justify-between">
//         <span>{value1[0]}</span>
//         <span>{value1[1]}</span>
//       </div>
//     </div>
//   );
// };

// export default MinMaxPriceSlider;

// import React, { useEffect, useState } from "react";
// import Slider from "@mui/material/Slider";

// interface Props {
//   min: number;
//   max: number;
//   onPriceChange: (min: number, max: number) => void;
// }

// const MinMaxPriceSlider: React.FC<Props> = ({ min, max, onPriceChange }) => {
//   const [value, setValue] = useState<number[]>([min, max]);

//   useEffect(() => {
//     setValue([min, max]);
//   }, [min, max]);

//   const handleChange = (event: Event, newValue: number | number[]) => {
//     if (Array.isArray(newValue)) {
//       setValue(newValue);
//       onPriceChange(newValue[0], newValue[1]);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <Slider
//         value={value}
//         min={min}
//         max={max}
//         onChange={handleChange}
//         valueLabelDisplay="auto"
//         disableSwap
//         className="text-main"
//       />
//       <div className="flex justify-between">
//         <span>{value[0]}</span>
//         <span>{value[1]}</span>
//       </div>
//     </div>
//   );
// };

// export default MinMaxPriceSlider;
