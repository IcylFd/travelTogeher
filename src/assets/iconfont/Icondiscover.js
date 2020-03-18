/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

export const Icondiscover = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M474.417 732.662c0 52.775 42.597 95.724 94.951 95.724 52.345 0 94.951-42.949 94.951-95.724 0-52.775-42.606-95.733-94.951-95.733-52.353 0-94.951 42.957-94.951 95.733zM601.010 732.662c0 17.577-14.211 31.905-31.644 31.905-17.442 0-31.653-14.329-31.653-31.905 0-17.586 14.211-31.914 31.653-31.914 17.433 0 31.644 14.329 31.644 31.914zM711.782 573.11c43.613 0 79.119-35.793 79.119-79.767 0-44.001-35.505-79.767-79.119-79.767s-79.119 35.767-79.119 79.767c0 43.974 35.505 79.776 79.11 79.776zM711.782 477.395c8.729 0 15.822 7.147 15.822 15.948 0 8.811-7.092 15.957-15.822 15.957s-15.822-7.147-15.822-15.957c0-8.802 7.083-15.948 15.822-15.948zM442.772 285.938c0-35.244-28.35-63.81-63.297-63.81-34.956 0-63.297 28.567-63.297 63.81s28.342 63.819 63.297 63.819c34.956 0 63.297-28.575 63.297-63.81z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M134.361 751.931c-39.312 60.498-63.558 112.86-63.522 148.535 0 22.905 9.209 36.819 16.928 44.442 37.665 37.269 108.81 3.195 159.003-25.587 15.165-8.711 20.475-28.206 11.835-43.524-5.506-9.681-15.751-16.101-27.497-16.101-5.765 0-11.169 1.548-15.818 4.25-48.72 27.999-72.3 32.914-81.443 33.517 1.503-41.257 94.293-201.852 326.583-432.261 223.875-222.083 394.272-323.73 437.382-324.45-0.953 11.34-8.676 44.325-57.888 118.35-1.297 1.89-2.377 3.961-3.195 6.128l-2.277 5.903c-0.252 0.639-0.289 1.35-0.514 2.017-8.703 10.206-10.691 25.020-3.348 37.133 34.706 56.662 55.26 125.252 55.26 198.643 0 0.132 0 0.263 0 0.395 0 211.119-170.37 382.875-379.782 382.875-58.644 0-114.822-13.077-167.014-38.925-4.064-2.046-8.857-3.243-13.929-3.243-12.442 0-23.203 7.207-28.333 17.671-2.127 4.286-3.323 9.118-3.323 14.228 0 12.469 7.123 23.275 17.522 28.569 61.138 30.233 126.722 45.516 195.077 45.516 244.323 0 443.070-200.385 443.070-446.715-0.029-79.281-20.593-153.753-56.661-218.393 1.401 1.799 1.851 1.324 2.003 0.746 67.356-102.042 83.142-164.933 49.789-197.929-10.89-10.755-25.354-15.543-42.597-15.543-38.898 0-91.845 24.857-148.436 60.723-73.197-49.806-158.111-76.32-247.167-76.32-244.332 0-443.078 200.385-443.078 446.715 0 86.886 24.813 170.262 71.37 242.631zM506.060 126.395c0.129 0 0.283 0 0.437 0 69.785 0 135.106 19.1 191.024 52.357-128.604 91.041-257.324 216.986-281.46 240.981-88.173 87.462-176.598 186.507-241.956 275.175-30.090-53.43-47.817-117.295-47.817-185.302 0-0.107 0-0.215 0-0.322 0-211.122 170.37-382.887 379.782-382.887z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

Icondiscover.defaultProps = {
  size: 18,
};

export default Icondiscover;
