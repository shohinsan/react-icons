import { IconProps } from '../types';

function ChevronUp({ width, height, className }: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.50293 16.0625L13.1914 9.22461C13.4199 8.97852 13.6924 8.86426 14 8.86426C14.3076 8.86426 14.5889 8.9873 14.8174 9.22461L21.4971 16.0625C21.6904 16.2559 21.7959 16.502 21.7959 16.792C21.7959 17.3809 21.3389 17.8379 20.7588 17.8379C20.4775 17.8379 20.2051 17.7324 20.0029 17.5215L14.0088 11.3604L7.99707 17.5215C7.80371 17.7236 7.53125 17.8379 7.24121 17.8379C6.66113 17.8379 6.2041 17.3809 6.2041 16.792C6.2041 16.5107 6.30957 16.2559 6.50293 16.0625Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default ChevronUp;
