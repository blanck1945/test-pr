import React from 'react';

type Props = {
  width?: string | number;
  height?: string | number;
};

const GooglePlaySvg: React.FC<Props> = ({ width = '115', height = '32' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 115 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M110.617 31.4531H4.25485C2.1399 31.4531 0.54686 29.9084 0.54686 27.9995V4.00054C0.54686 2.09162 2.1399 0.54686 4.25485 0.54686H110.617C112.732 0.54686 114.325 2.09162 114.325 4.00054V28.0038C114.325 29.908 112.732 31.4531 110.617 31.4531Z"
      fill="white"
      stroke="#6980A7"
      strokeWidth="1.09372"
    />
    <path
      d="M55.7386 14.3478C53.7738 14.3478 52.2161 15.7864 52.2161 17.7867C52.2161 19.7048 53.7738 21.2256 55.7386 21.2256C57.7034 21.2256 59.2611 19.7869 59.2611 17.7867C59.2611 15.7086 57.7078 14.3478 55.7386 14.3478ZM55.7386 19.7869C54.6721 19.7869 53.7738 18.9056 53.7738 17.7089C53.7738 16.5122 54.6765 15.6309 55.7386 15.6309C56.8007 15.6309 57.7034 16.4301 57.7034 17.7089C57.7078 18.9099 56.8051 19.7869 55.7386 19.7869ZM48.1183 14.3478C46.1535 14.3478 44.5958 15.7864 44.5958 17.7867C44.5958 19.7048 46.1535 21.2256 48.1183 21.2256C50.0831 21.2256 51.6408 19.7869 51.6408 17.7867C51.6408 15.7086 50.0831 14.3478 48.1183 14.3478ZM48.1183 19.7869C47.0518 19.7869 46.1535 18.9056 46.1535 17.7089C46.1535 16.5122 47.0563 15.6309 48.1183 15.6309C49.1848 15.6309 50.0831 16.4301 50.0831 17.7089C50.0831 18.9099 49.1848 19.7869 48.1183 19.7869ZM39.02 15.3889V16.8276H42.5469C42.4628 17.6268 42.1354 18.2662 41.7283 18.668C41.237 19.1475 40.4184 19.7092 39.0244 19.7092C36.8118 19.7092 35.1745 18.0286 35.1745 15.8685C35.1745 13.7084 36.8959 12.0278 39.0244 12.0278C40.1706 12.0278 41.0733 12.5074 41.7283 13.069L42.7947 12.0278C41.892 11.2286 40.7458 10.5892 39.1085 10.5892C36.1569 10.5892 33.6168 12.9912 33.6168 15.8685C33.6168 18.7458 36.1569 21.1478 39.1085 21.1478C40.7458 21.1478 41.8964 20.6683 42.8788 19.6271C43.8612 18.668 44.1887 17.3071 44.1887 16.2659C44.1887 15.9462 44.1887 15.6266 44.1046 15.3846L39.02 15.3889ZM76.2275 16.5079C75.9001 15.7086 75.0814 14.3478 73.2759 14.3478C71.4748 14.3478 69.9968 15.7086 69.9968 17.7867C69.9968 19.7048 71.4704 21.2256 73.4396 21.2256C74.9973 21.2256 75.9797 20.2665 76.3072 19.7048L75.161 18.9056C74.7495 19.4672 74.2583 19.8647 73.4396 19.8647C72.621 19.8647 72.1297 19.545 71.7182 18.8235L76.3913 16.9053L76.2275 16.5079ZM71.4748 17.6268C71.4748 16.348 72.5413 15.6266 73.2759 15.6266C73.8512 15.6266 74.422 15.9462 74.5858 16.348L71.4748 17.6268ZM67.6204 20.9102H69.1781V10.9089H67.6204V20.9102ZM65.1644 15.0692C64.7528 14.6675 64.0979 14.27 63.2792 14.27C61.5578 14.27 59.9205 15.7907 59.9205 17.7089C59.9205 19.6271 61.4782 21.07 63.2792 21.07C64.0979 21.07 64.7528 20.6682 65.0803 20.2708H65.1644V20.7503C65.1644 22.0291 64.4254 22.7506 63.2792 22.7506C62.3765 22.7506 61.7215 22.1112 61.5578 21.5496L60.2479 22.1112C60.6595 22.9925 61.6419 24.1115 63.3633 24.1115C65.1644 24.1115 66.6424 23.0703 66.6424 20.5905V14.5076H65.1688L65.1644 15.0692ZM63.3589 19.7869C62.2924 19.7869 61.3941 18.9056 61.3941 17.7089C61.3941 16.5122 62.2968 15.6309 63.3589 15.6309C64.421 15.6309 65.2441 16.5122 65.2441 17.7089C65.2441 18.9056 64.4254 19.7869 63.3589 19.7869ZM83.3566 10.9089H79.6704V20.9102H81.2281V17.1516H83.3566C85.078 17.1516 86.7154 15.9506 86.7154 14.0324C86.7154 12.1142 85.078 10.9089 83.3566 10.9089ZM83.4363 15.7086H81.2237V12.2697H83.4363C84.5824 12.2697 85.2374 13.2288 85.2374 13.9503C85.1577 14.8273 84.5028 15.7086 83.4363 15.7086ZM92.8621 14.27C91.7159 14.27 90.5654 14.7495 90.1582 15.7907L91.5522 16.3523C91.8797 15.7907 92.3709 15.6309 92.9461 15.6309C93.7648 15.6309 94.5038 16.1104 94.5835 16.9097V16.9917C94.3357 16.8319 93.6807 16.59 93.0258 16.59C91.5522 16.59 90.0742 17.3892 90.0742 18.8322C90.0742 20.193 91.3044 21.0744 92.6143 21.0744C93.6807 21.0744 94.172 20.5948 94.5791 20.1153H94.6631V20.9145H96.1368V17.0738C95.9775 15.3069 94.5835 14.27 92.8621 14.27ZM92.6983 19.7869C92.2071 19.7869 91.4681 19.545 91.4681 18.9056C91.4681 18.1064 92.3709 17.8644 93.1055 17.8644C93.7604 17.8644 94.0879 18.0243 94.4994 18.1841C94.3357 19.1475 93.517 19.7869 92.6983 19.7869ZM101.301 14.5076L99.5796 18.8278H99.4955L97.6945 14.5076H96.0571L98.7609 20.5862L97.2033 23.9473H98.7609L102.938 14.5076H101.301ZM87.5341 20.9102H89.0918V10.9089H87.5341V20.9102Z"
      fill="#002350"
    />
    <path
      d="M8.52101 6.00372C8.2732 6.24566 8.19354 6.64312 8.19354 7.12266V24.8054C8.19354 25.2849 8.35728 25.6867 8.60509 25.9243L8.68917 26.0064L18.8495 16.0871V15.9273L8.52101 6.00372Z"
      fill="url(#paint0_linear)"
    />
    <path
      d="M22.1246 19.4445L18.7658 16.1654V15.9235L22.1246 12.6445L22.2087 12.7266L26.2224 14.9687C27.3685 15.6081 27.3685 16.6493 26.2224 17.2887L22.1246 19.4445Z"
      fill="url(#paint1_linear)"
    />
    <path
      d="M22.21 19.3611L18.7672 15.9999L8.52271 26.0056C8.93425 26.4074 9.50511 26.4074 10.2441 26.0877L22.21 19.3611Z"
      fill="url(#paint2_linear)"
    />
    <path
      d="M22.21 12.6419L10.2441 6.0017C9.50511 5.59992 8.93425 5.682 8.52271 6.08378L18.7672 16.003L22.21 12.6419Z"
      fill="url(#paint3_linear)"
    />
    <path
      opacity="0.2"
      d="M22.1259 19.2834L10.2441 25.8415C9.58919 26.2433 9.01391 26.1612 8.60678 25.8415L8.52271 25.9236L8.60678 26.0057C9.01833 26.3254 9.58919 26.4075 10.2441 26.0057L22.1259 19.2834Z"
      fill="black"
    />
    <path
      opacity="0.12"
      d="M8.52095 25.8406C8.27314 25.5987 8.19348 25.2013 8.19348 24.7217V24.8038C8.19348 25.2833 8.35722 25.6851 8.60503 25.9227V25.8406H8.52095ZM26.222 17.0403L22.1242 19.2825L22.2083 19.3646L26.222 17.1224C26.7972 16.8027 27.0406 16.4009 27.0406 16.0035C27.0406 16.4009 26.7132 16.7206 26.222 17.0403Z"
      fill="black"
    />
    <path
      opacity="0.25"
      d="M10.2423 6.08142L26.2219 14.9638C26.7131 15.2835 27.0406 15.6032 27.0406 16.005C27.0406 15.6032 26.7928 15.2057 26.2219 14.886L10.2423 6.00366C9.09617 5.36427 8.19342 5.84381 8.19342 7.1226V7.20468C8.19342 6.00366 9.09617 5.44203 10.2423 6.08142Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="17.8586"
        y1="6.967"
        x2="4.43533"
        y2="20.7157"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00A0FF" />
        <stop offset="0.007" stopColor="#00A1FF" />
        <stop offset="0.26" stopColor="#00BEFF" />
        <stop offset="0.512" stopColor="#00D2FF" />
        <stop offset="0.76" stopColor="#00DFFF" />
        <stop offset="1" stopColor="#00E3FF" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="27.7245"
        y1="16.0438"
        x2="7.89531"
        y2="16.0438"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE000" />
        <stop offset="0.409" stopColor="#FFBD00" />
        <stop offset="0.775" stopColor="#FFA500" />
        <stop offset="1" stopColor="#FF9C00" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="20.3353"
        y1="17.8301"
        x2="2.13317"
        y2="36.4747"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3A44" />
        <stop offset="1" stopColor="#C31162" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="5.94996"
        y1="0.169602"
        x2="14.0784"
        y2="8.4956"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32A071" />
        <stop offset="0.069" stopColor="#2DA771" />
        <stop offset="0.476" stopColor="#15CF74" />
        <stop offset="0.801" stopColor="#06E775" />
        <stop offset="1" stopColor="#00F076" />
      </linearGradient>
    </defs>
  </svg>
);

const GooglePlay: React.FC<Props> = (props) => (
  <a href="https://auntap.com/?shortlink=descarga&pid=Cross_sale&c=Ruleweb_Mobile">
    <GooglePlaySvg {...props} />
  </a>
);

export default GooglePlay;
