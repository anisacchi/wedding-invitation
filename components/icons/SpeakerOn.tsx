import React from 'react';
import { IconProps } from '@/types/IconProps';

const SpeakerOn: React.FC<IconProps> = ({
  width = 32,
  height = 32,
  color = '#F9F4EF',
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={color}
      viewBox='0 0 256 256'
    >
      <path d='M163.51,24.81a8,8,0,0,0-8.42.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A8,8,0,0,0,168,224V32A8,8,0,0,0,163.51,24.81ZM152,207.64,92.91,161.69A7.94,7.94,0,0,0,88,160H40V96H88a7.94,7.94,0,0,0,4.91-1.69L152,48.36ZM208,104v48a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v80a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z'></path>
    </svg>
  );
};

export default SpeakerOn;
