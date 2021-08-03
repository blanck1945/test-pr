import React from 'react';

type Props = {
  width?: string | number;
  height?: string | number;
};

const AppStoreSvg: React.FC<Props> = ({ width = `116`, height = `32` }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 116 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M114.537 28.5636V28.564C114.537 30.0001 113.328 31.1929 111.78 31.1929H3.32266C1.77057 31.1929 0.546738 29.9962 0.546738 28.564V3.19371C0.546738 1.75762 1.77466 0.54686 3.32266 0.54686H111.78C113.33 0.54686 114.555 1.7414 114.556 3.19331C114.556 3.19343 114.556 3.19359 114.556 3.19371L114.537 28.5636Z"
      fill="white"
      stroke="#6980A7"
      strokeWidth="1.09372"
    />
    <path
      d="M25.2555 15.7003C25.2368 13.0269 27.5329 11.7171 27.6449 11.6633C26.3382 9.83316 24.3221 9.58197 23.5941 9.56403C21.8953 9.38461 20.2526 10.5508 19.3752 10.5508C18.4979 10.5508 17.1538 9.58197 15.7164 9.61785C13.8684 9.65374 12.1323 10.6764 11.1803 12.2733C9.22021 15.5388 10.6763 20.3294 12.5617 22.9489C13.495 24.2408 14.5964 25.6761 16.0338 25.6223C17.4338 25.5685 17.9565 24.7611 19.6553 24.7611C21.3353 24.7611 21.8207 25.6223 23.2954 25.5864C24.8074 25.5685 25.7595 24.2946 26.6555 22.9848C27.7382 21.5135 28.1676 20.0423 28.1862 19.9705C28.1862 19.9705 25.2928 18.9119 25.2555 15.7003ZM22.4927 7.82363C23.2394 6.90858 23.7621 5.68851 23.6127 4.43256C22.5114 4.48638 21.1486 5.16819 20.3646 6.04735C19.6739 6.83681 19.0392 8.11071 19.2072 9.31284C20.4393 9.40255 21.7087 8.72074 22.4927 7.82363Z"
      fill="#002350"
    />
    <path
      d="M45.8113 21.7491H43.8513L42.7686 18.5016H39.0351L38.0084 21.7491H36.1043L39.8004 10.6967H42.0965L45.8113 21.7491ZM42.4512 17.1379L41.4805 14.2493C41.3685 13.9622 41.1818 13.2624 40.9018 12.168H40.8645C40.7525 12.6345 40.5658 13.3342 40.3231 14.2493L39.3711 17.1379H42.4512ZM55.313 17.6583C55.313 19.0219 54.921 20.0805 54.1556 20.8699C53.4649 21.5697 52.6249 21.9285 51.5982 21.9285C50.4968 21.9285 49.7128 21.5517 49.2275 20.7982V24.9787H47.3981V16.3844C47.3981 15.5411 47.3794 14.6619 47.3234 13.7648H48.9474L49.0594 15.0208H49.0968C49.7128 14.0698 50.6462 13.5854 51.8969 13.5854C52.8676 13.5854 53.689 13.9622 54.3423 14.6978C54.9957 15.4693 55.313 16.4561 55.313 17.6583ZM53.4463 17.73C53.4463 16.9585 53.2596 16.3126 52.9049 15.8102C52.5129 15.2899 51.9716 15.0208 51.2995 15.0208C50.8515 15.0208 50.4408 15.1643 50.0675 15.4514C49.6941 15.7385 49.4515 16.1152 49.3395 16.5997C49.2835 16.7791 49.2648 16.9585 49.2461 17.1379V18.4657C49.2461 19.0398 49.4328 19.5422 49.8061 19.9369C50.1795 20.3317 50.6648 20.529 51.2435 20.529C51.9342 20.529 52.4756 20.2778 52.8676 19.7575C53.2596 19.2551 53.4463 18.5733 53.4463 17.73ZM64.8707 17.6583C64.8707 19.0219 64.4787 20.0805 63.7133 20.8699C63.0226 21.5697 62.1826 21.9285 61.1559 21.9285C60.0545 21.9285 59.2705 21.5517 58.7851 20.7982V24.9787H56.9371V16.3844C56.9371 15.5411 56.9184 14.6619 56.8624 13.7648H58.4865L58.5985 15.0208H58.6358C59.2518 14.0698 60.1852 13.5854 61.4359 13.5854C62.4066 13.5854 63.228 13.9622 63.8813 14.6978C64.5347 15.4693 64.8707 16.4561 64.8707 17.6583ZM62.9853 17.73C62.9853 16.9585 62.7986 16.3126 62.4439 15.8102C62.0519 15.2899 61.5106 15.0208 60.8385 15.0208C60.3905 15.0208 59.9798 15.1643 59.6065 15.4514C59.2332 15.7385 58.9905 16.1152 58.8785 16.5997C58.8225 16.815 58.7851 16.9944 58.7851 17.1379V18.4657C58.7851 19.0398 58.9718 19.5422 59.3452 19.9369C59.7185 20.3317 60.2039 20.529 60.7825 20.529C61.4732 20.529 62.0146 20.2778 62.4066 19.7575C62.7986 19.2551 62.9853 18.5733 62.9853 17.73ZM75.5298 18.6451C75.5298 19.5781 75.1937 20.3496 74.5031 20.9417C73.7564 21.5876 72.711 21.9106 71.3669 21.9106C70.1349 21.9106 69.1455 21.6773 68.3802 21.2288L68.8095 19.7575C69.6122 20.224 70.5082 20.4393 71.4789 20.4393C72.1696 20.4393 72.711 20.2958 73.103 19.9908C73.495 19.6857 73.6817 19.291 73.6817 18.7886C73.6817 18.3401 73.5137 17.9633 73.1963 17.6583C72.879 17.3532 72.3563 17.0662 71.6096 16.797C69.5935 16.0794 68.5855 15.0208 68.5855 13.6213C68.5855 12.7062 68.9402 11.9706 69.6495 11.3964C70.3589 10.8223 71.3109 10.5352 72.4683 10.5352C73.5137 10.5352 74.391 10.7146 75.0817 11.0555L74.6151 12.4909C73.9617 12.15 73.2337 11.9885 72.4123 11.9885C71.7589 11.9885 71.2549 12.15 70.8816 12.455C70.5829 12.7242 70.4149 13.0651 70.4149 13.4598C70.4149 13.8904 70.5829 14.2672 70.9376 14.5363C71.2363 14.8055 71.7963 15.0746 72.6176 15.3976C73.607 15.7743 74.335 16.2229 74.8017 16.7432C75.3057 17.2456 75.5298 17.8736 75.5298 18.6451ZM81.634 15.1105H79.5992V18.986C79.5992 19.9728 79.9539 20.4572 80.6819 20.4572C81.018 20.4572 81.2793 20.4393 81.5033 20.3675L81.5593 21.7132C81.2046 21.8388 80.7193 21.9106 80.1219 21.9106C79.3939 21.9106 78.8339 21.6953 78.4232 21.2646C78.0125 20.834 77.8072 20.1163 77.8072 19.1116V15.0925H76.5938V13.7648H77.8072V12.3115L79.6179 11.7912V13.7828H81.6526L81.634 15.1105ZM90.781 17.6942C90.781 18.9142 90.4076 19.919 89.6796 20.7084C88.9142 21.5158 87.9062 21.9285 86.6368 21.9285C85.4235 21.9285 84.4527 21.5338 83.7247 20.7623C82.9967 19.9908 82.642 19.0039 82.642 17.8197C82.642 16.5817 83.0154 15.577 83.7621 14.7875C84.5087 13.9981 85.5168 13.6033 86.7675 13.6033C87.9809 13.6033 88.9702 13.9981 89.6983 14.7696C90.4263 15.5231 90.781 16.51 90.781 17.6942ZM88.8769 17.73C88.8769 16.9944 88.7089 16.3664 88.3916 15.8461C87.9995 15.2181 87.4582 14.8952 86.7302 14.8952C85.9835 14.8952 85.4235 15.2181 85.0314 15.8461C84.6954 16.3664 84.5461 17.0123 84.5461 17.7659C84.5461 18.5015 84.7141 19.1295 85.0314 19.6498C85.4235 20.2778 85.9835 20.6008 86.7115 20.6008C87.4209 20.6008 87.9622 20.2778 88.3729 19.6319C88.7089 19.0936 88.8769 18.4657 88.8769 17.73ZM96.7732 15.3258C96.5865 15.2899 96.3812 15.272 96.1945 15.272C95.5412 15.272 95.0371 15.5052 94.7011 15.9717C94.4024 16.3844 94.2344 16.9047 94.2344 17.5506V21.7311H92.3864V16.2767C92.3864 15.4334 92.3677 14.6081 92.3304 13.7648H93.9358L94.0104 15.2899H94.0664C94.2531 14.7696 94.5704 14.339 94.9811 14.0339C95.3731 13.7648 95.8398 13.6033 96.3065 13.6033C96.4745 13.6033 96.6239 13.6213 96.7732 13.6392V15.3258ZM105.024 17.3891C105.024 17.6583 105.006 17.9274 104.949 18.1965H99.424C99.4426 18.986 99.704 19.596 100.227 20.0087C100.693 20.3855 101.291 20.5649 102.037 20.5649C102.859 20.5649 103.605 20.4393 104.277 20.1881L104.557 21.4082C103.773 21.7311 102.84 21.8926 101.776 21.8926C100.488 21.8926 99.48 21.5338 98.7519 20.7982C98.0239 20.0625 97.6506 19.0936 97.6506 17.8736C97.6506 16.6714 97.9866 15.6667 98.6773 14.8772C99.3866 14.016 100.357 13.6033 101.571 13.6033C102.765 13.6033 103.68 14.0339 104.277 14.8772C104.781 15.559 105.024 16.3844 105.024 17.3891ZM103.269 16.9226C103.288 16.4023 103.157 15.9358 102.915 15.559C102.597 15.0566 102.112 14.8234 101.44 14.8234C100.843 14.8234 100.339 15.0566 99.9653 15.5411C99.6666 15.9179 99.48 16.3844 99.424 16.9226H103.269Z"
      fill="#002350"
    />
  </svg>
);

const AppStore: React.FC<Props> = (props) => (
  <a href="https://auntap.com/?shortlink=descarga&pid=Cross_sale&c=Ruleweb_Mobile">
    <AppStoreSvg {...props} />
  </a>
);

export default AppStore;