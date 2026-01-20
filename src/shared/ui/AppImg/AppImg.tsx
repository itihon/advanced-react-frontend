import React, { useEffect, useState } from 'react';

interface AppImgProps extends React.ComponentPropsWithoutRef<'img'> {
  fallbackSrc?: string;
}

const AppImg: React.FC<AppImgProps> = (props) => {
  const { src, fallbackSrc = '/assets/missing-image.svg', onError, ...rest } = props;
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    if (onError) {
      onError(e);
    }

    if (fallbackSrc && imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  return <img src={imgSrc} onError={handleError} {...rest} />;
};

export default AppImg;