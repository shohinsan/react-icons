import { IconProps } from '../types';

function ApprovedUser({
  width = 30,
  height = 30,
  className = '',
  avatar,
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 28 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="clip-shape">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.268 0 -1.52588e-05 6.26801 -1.52588e-05 14C-1.52588e-05 15.5561 0.253846 17.0528 0.722413 18.4511C2.17862 16.9311 4.22878 15.9846 6.5 15.9846C10.9183 15.9846 14.5 19.5664 14.5 23.9846C14.5 25.4434 14.1096 26.8109 13.4275 27.9885C13.6174 27.9961 13.8082 28 14 28Z"
          />
        </clipPath>
      </defs>

      <image
        href={avatar}
        x="0"
        y="0"
        width="28"
        height="31"
        clipPath="url(#clip-shape)"
      />

      <path
        d="M6.8026 30.6052C3.0545 30.6052 0 27.5507 0 23.8026C0 20.0478 3.0545 17 6.8026 17C10.5574 17 13.5 20.0478 13.5 23.8026C13.5 27.5507 10.5574 30.6052 6.8026 30.6052ZM6.05565 27.0638C6.28238 27.0638 6.47579 26.9571 6.61586 26.737L9.75039 21.8018C9.83043 21.6618 9.91712 21.5084 9.91712 21.3617C9.91712 21.0482 9.64368 20.8481 9.35023 20.8481C9.17683 20.8481 9.00344 20.9548 8.87672 21.1549L6.02895 25.73L4.67511 23.9827C4.50838 23.7626 4.36165 23.7026 4.16825 23.7026C3.86813 23.7026 3.63471 23.9493 3.63471 24.2494C3.63471 24.4028 3.69474 24.5495 3.79479 24.6829L5.46874 26.737C5.64214 26.9705 5.82888 27.0638 6.05565 27.0638Z"
        fill="green"
      />
    </svg>
  );
}

export default ApprovedUser;

// <svg
//     className={className}
//     width={width}
//     height={height}
//     xmlns="http://www.w3.org/2000/svg"
//     shapeRendering="geometricPrecision"
//     textRendering="geometricPrecision"
//     imageRendering="optimizeQuality"
//     fillRule="evenodd"
//     clipRule="evenodd"
//     viewBox="-10 -10 496 510"
// >
{
  /* <defs>
    <clipPath id="clip-shape"> */
}
//         <path
//             fill="black"
//             fillRule="nonzero"
//             d="M232.203 0c131.469 0 232.204 111.394 232.204 240.429 0 20.842-2.641 41.217-7.6 60.742-20.362-18.359-46.973-29.48-76.074-29.48-32.004 0-60.997 13.45-81.977 35.184-20.984 21.735-33.969 51.76-33.969 84.912 0 30.886 11.274 59.064 29.787 80.346-19.741 5.666-40.633 8.728-62.371 8.728C100.718 480.861 0 369.498 0 240.429 0 112.11 99.976 0 232.203 0z"
//         />
//     </clipPath>
// </defs>

//     {/* Image */}
{
  /* <image
    href={avatar}
    x="0"
    y="0"
    width="476"
    height="490.462"
    clipPath="url(#clip-shape)"
/> */
}

//     {/* Checkmark Circle */}
//     <circle cx="380.737" cy="391.789" r="98.673" fill="green" />

//     {/* Checkmark */}
//     <path
//         d="M350.737 391.789l25.674 25.674 51.348-51.348"
//         fill="none"
//         stroke="white"
//         strokeWidth="10"
//     />
// </svg>
// <svg
//     width={width}
//     height={height}
//     className={className}
//     viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">

//     <path
//         d="M12.3311 18.1758C17.3145 18.1758 21.4189 14.0625 21.4189 9.08789C21.4189 4.11328 17.2969 0 12.3223 0C7.69922 0 3.83203 3.54199 3.31348 8.0332C3.8584 7.91016 4.5791 7.875 5.15918 7.97168C5.67773 4.47363 8.66602 1.81934 12.3223 1.81934C16.3564 1.81934 19.6084 5.05371 19.6084 9.08789C19.6084 11.0127 18.8701 12.7529 17.6484 14.0449C16.7432 13.043 14.8271 12.1289 12.3223 12.1289C11.54 12.1289 10.8105 12.2168 10.1514 12.375C10.2568 12.7969 10.3096 13.2363 10.3096 13.6846C10.3096 15.1172 9.75586 16.4443 8.85938 17.4727C9.93164 17.9209 11.1094 18.1758 12.3311 18.1758ZM5.16519 7.92202C8.01411 8.2552 9.70104 10.4589 10.2187 12.4414"
//         fill="black" />

//     <path
//         d="M4.52637 18.2197C6.9873 18.2197 9.05273 16.1631 9.05273 13.6846C9.05273 11.2061 7.01367 9.1582 4.52637 9.1582C2.04785 9.1582 0 11.2061 0 13.6846C0 16.1719 2.04785 18.2197 4.52637 18.2197Z"
//         fill="green" />

// </svg>
// type ApprovedUserProps = {
//     width?: number;
//     height?: number;
//     className?: string;
//     avatar: string;
// };
// function ApprovedUser({
//     width = 20,
//     height = 20,
//     className = '',
//     avatar,
// }: ApprovedUserProps) {
//     return (
//         <svg
//             className={className}
//             width={width}
//             height={height}
//             xmlns="http://www.w3.org/2000/svg"
//             shapeRendering="geometricPrecision"
//             textRendering="geometricPrecision"
//             imageRendering="optimizeQuality"
//             fillRule="evenodd"
//             clipRule="evenodd"
//             viewBox="0 0 476 490.462"
//         >

// <defs>
//     <clipPath id="clip-shape">
//         <path

//             fillRule="nonzero"
//             d="M232.203 0c131.469 0 232.204 111.394 232.204 240.429 0 20.842-2.641 41.217-7.6 60.742-20.362-18.359-46.973-29.48-76.074-29.48-32.004 0-60.997 13.45-81.977 35.184-20.984 21.735-33.969 51.76-33.969 84.912 0 30.886 11.274 59.064 29.787 80.346-19.741 5.666-40.633 8.728-62.371 8.728C100.718 480.861 0 369.498 0 240.429 0 112.11 99.976 0 232.203 0z"
//         />
//     </clipPath>
// </defs>

// <image
//     href="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//     x="0"
//     y="0"
//     width="476"
//     height="490.462"
//     clipPath="url(#clip-shape)"
// />

//             <circle cx="380.737" cy="391.789" r="98.673" fill="green" />

//             {/* White checkmark inside the green circle */}
//             <path
//                 d="M350.737 391.789l25.674 25.674 51.348-51.348"
//                 fill="none"
//                 stroke="white"
//                 strokeWidth="12"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     );
// }

// export default ApprovedUser;

// <img
//     src={avatar}
//     alt="Approved User"
//     width={width}
//     height={height}
//     className={`rounded-full border-1 border-white object-cover ${className}`}
// />

// type ApprovedUserProps = {
//     width?: number; // Make width optional
//     height?: number; // Make height optional
//     className?: string;
//     avatar: string; // Avatar URL prop
// };

// function ApprovedUser({ width = 30, height = 30, className, avatar }: ApprovedUserProps) {
//     return (
//         <img
//             src={avatar}
//             alt="Approved User"
//             width={width}
//             height={height}
//             className={className}
//         />
//     );
// }

// export default ApprovedUser;

// <svg
//     className={className}
//     width={width}
//     height={height}
//     viewBox="0 0 28 28"
//     xmlns="http://www.w3.org/2000/svg">

//     {/* Circle background */}
//     <circle
//         cx="14"
//         cy="14"
//         r="9.5"
//         fill="lightgray"
//     />

//     {/* Image with the same dimensions as the original path */}
//     <image
//         x="4.5"
//         y="4.5"
//         width="19"
//         height="19"
//         href={avatarUrl} // Avatar URL
//         clipPath="url(#clipCircle)" // Apply clipping to keep it circular
//     />

//     {/* Define the clipping path to make the image circular */}
//     <defs>
//         <clipPath id="clipCircle">
//             <circle cx="14" cy="14" r="9.5" />
//         </clipPath>
//     </defs>

//     {/* Green circle indicating active status */}
//     <circle
//         cx="6.195"
//         cy="18.251"
//         r="4.5"
//         fill="green"
//     />

//     {/* White check mark on the green circle */}
// <path
//     d="M5.66797 20.9229C5.50098 20.9229 5.29883 20.8613 5.16699 20.7119L3.51465 18.9102C3.41797 18.8135 3.35645 18.6377 3.35645 18.4883C3.35645 18.1016 3.65527 17.8555 3.98926 17.8555C4.2002 17.8555 4.3584 17.9346 4.46387 18.0576L5.63281 19.332L7.86523 16.2295C7.98828 16.0625 8.18164 15.957 8.40137 15.957C8.74414 15.957 9.03418 16.2295 9.03418 16.5811C9.03418 16.6953 8.99023 16.8271 8.90234 16.9502L6.19531 20.6855C6.08984 20.835 5.8877 20.9229 5.66797 20.9229Z"
//     fill="white"
// />
// </svg>

{
  /* <div className="relative inline-block">
<div
    className={`relative ${className}`}
    style={{ width, height }}
>
    <img
        src={avatar}
        alt="Approved User"
        className="w-full h-full rounded-full object-cover"
    />

    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
        <div className="bg-blue-500 rounded-full p-0.5">
            <CheckIcon
                className="text-white"
                width={width / 5}
                height={height / 5}
            />
        </div>
    </div>
</div>
</div> */
}
