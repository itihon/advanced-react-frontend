import { ArticleBlockBase, ArticleCodeBlock } from '../../model/types/article';
import React, { memo } from 'react';
import classes from './ArticleCodeBlockComponent.module.scss';
import { AppButton } from 'shared/ui';

interface ArticleImageBlockComponentProps extends Omit<ArticleCodeBlock, keyof ArticleBlockBase> {
  
}

const ArticleCodeBlockComponent: React.FC<ArticleImageBlockComponentProps> = ({ code }) => {
  const onCopy = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <pre className={classes.ArticleCodeBlockComponent}>
      <AppButton onClick={onCopy} size='size-l' square className={classes['copy-btn']}></AppButton>
      <code>{code}</code> 
    </pre>
  );
};

export default memo(ArticleCodeBlockComponent);