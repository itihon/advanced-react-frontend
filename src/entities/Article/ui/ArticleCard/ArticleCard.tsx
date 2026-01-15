import { AppLink, AppText } from 'shared/ui';
import { ArticlePreview } from '../../model/types/article';
import React from 'react';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import classes from './ArticleCard.module.scss';

interface ArticleCardProps extends Omit<ArticlePreview, 'blocks' | 'subtitle'> {

}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, createdAt, img, title, type, views }) => {
  return (
    <AppLink className={classes.ArticleCard} to={`${routePath.article_details}${id}`}>
      <AppText className={classes.views}>{`👁️ ${views}`}</AppText>
      <AppText className={classes.date}>{`🗓️ ${createdAt}`}</AppText>
      <img className={classes.img} src={img} alt={title} />
      <AppText className={classes.title}>{title}</AppText>
      {
        type
          .map((type, idx) => <AppText className={classes.tag} key={idx}>{type}</AppText>)
      }
    </AppLink> 
  );
};

export default ArticleCard;