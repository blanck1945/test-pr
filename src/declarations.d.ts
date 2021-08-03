// This file holds ambient type declarations.
declare module '*.png';
declare module '*.jpg';

type StrNum = string | number;

type ReqOptions = {
  method: 'POST' | 'GET';
  headers?: { [key: string]: string };
  body?: string;
};

type Shop = {
  name: string;
  address: string;
  email?: string;
  logo: {
    formats: {
      thumbnail: {
        url: string;
      };
    };
  };
};

type GanadorProps = {
  userData: {
    status: StrNum;
    updatedAt: string;
    id: string;
    shop: Shop;
    prize: {
      title: string;
      photo: {
        formats: {
          thumbnail: {
            url: string;
          };
        };
      }[];
    };
    player: {
      email: string;
      id: string;
      name: string;
      phone: string;
    };
  };
};
