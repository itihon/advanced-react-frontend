import React from 'react';
import Article, { ArticleBlockType } from '../../model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { AppImg } from 'shared/ui';
import classes from './ArticleView.module.scss';

interface ArticleViewProps {
  data?: Article;
}

const ArticleView: React.FC<ArticleViewProps> = ({ data }) => {
  return (
    <>
      <h1>{data?.title}</h1>
      <AppImg className={classes.img} src={data?.img} />
      <h2>{data?.subtitle}</h2>
      {
        data?.blocks?.map((block, idx) => {
          switch (block.type) {
            case ArticleBlockType.CODE:
              return <ArticleCodeBlockComponent 
                key={idx} 
                code={block.code} /> 
          
            case ArticleBlockType.IMAGE:
              return <ArticleImageBlockComponent 
                key={idx} 
                src={block.src} 
                title={block.title} /> 

            case ArticleBlockType.TEXT:
              return <ArticleTextBlockComponent 
                key={idx} 
                title={block.title}
                paragraphs={block.paragraphs} /> 
          }
        })
      }
    </>
  );
};

export default ArticleView;