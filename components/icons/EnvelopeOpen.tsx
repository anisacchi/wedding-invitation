import React from 'react';
import { IconProps } from '@/types/IconProps';

const EnvelopeOpen: React.FC<IconProps> = ({
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
      <path d='M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78ZM40,200V111.53l65.9,47a8,8,0,0,0,4.65,1.49h34.9a8,8,0,0,0,4.65-1.49l65.9-47V200Z'></path>
    </svg>
  );
};

export default EnvelopeOpen;
