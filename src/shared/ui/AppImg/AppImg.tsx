import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import classes from './AppImg.module.scss';

interface AppImgProps extends React.ComponentPropsWithoutRef<'img'> {
  fallbackSrc?: string;
  Loader?: React.FC<{ className?: string, style?: React.CSSProperties }>;
}

const AppImg: React.FC<AppImgProps> = (props) => {
  const { src, fallbackSrc = '/assets/missing-image.svg', onError, Loader, className, style, ...rest } = props;
  const [imgSrc, setImgSrc] = useState<string | undefined>(src);
  const [isLoading, setIsLoading] = useState(true);
  const showLoader = isLoading && Loader;

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

  const onLoad = () => {
    setIsLoading(false); 
  };

  return (
    <>
      { showLoader && <Loader className={className} style={style} /> }
      <img src={imgSrc} onError={handleError} className={classNames(classes.AppImg, className, { [classes.showLoader]: showLoader })} style={style} {...rest} onLoad={onLoad} />
    </>
  );
};

export default AppImg;