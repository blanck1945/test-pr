import React from 'react';
import styled from 'styled-components';
import Button from '@/components/home/button';

const Wrapper = styled.div`
  margin: auto;
`;

const Share: React.FC = () => {
  const handleOnClick = async () => {
    const shareData = {
      title: 'Tap | Ruleta',
      text: 'Tirá la ruleta de premios en Moron',
      url: 'https://test-pr.vercel.app/?utm_source=Compartir&utm_medium=Compartir&utm_campaign=Ruleweb_compartir',
    };
    try {
      await navigator.share(shareData);
    } catch (err) {
      // eslint-disable-next-line
      console.warn(err);
    }
  };

  return (
    <Wrapper>
      <Button onClick={handleOnClick}>Invitar a mis amigos</Button>
    </Wrapper>
  );
};

export default Share;
