import { AppLink, AppText } from 'shared/ui';
import { ArticlePreview, ArticlePreviewStyle } from '../../model/types/article';
import React from 'react';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import classes from './ArticleCard.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { To } from 'react-router-dom';

interface ArticleCardProps extends Omit<ArticlePreview, 'blocks' | 'subtitle'> {
  previewStyle?: ArticlePreviewStyle;
}

interface WithLinkProps {
  className?: string;
  to: To;
  withLink?: boolean;
  children?: React.ReactNode;
}

const WithLink: React.FC<WithLinkProps> = ({ className, to, children, withLink }) => {
  return (
    withLink
      ? <AppLink className={className} to={to}>
          { children }
        </AppLink> 
      : <div className={className}>
          { children }
        </div> 
  );
};

const ArticleCard: React.FC<ArticleCardProps> = ({ id, createdAt, img, title, type, views, previewStyle = ArticlePreviewStyle.TILES, excerpt }) => {
  const isList = previewStyle === ArticlePreviewStyle.LIST_ITEMS;
  const { t } = useTranslation('articles');

  return (
    <WithLink className={classNames(classes.ArticleCard, classes[previewStyle])} to={`${routePath.article_details}${id}`} withLink={!isList}>
      <AppText className={classes.views}>{`👁️ ${views}`}</AppText>
      <AppText className={classes.date}>{`🗓️ ${createdAt}`}</AppText>
      <img className={classes.img} src={img} alt={title} />
      <AppText className={classes.title}>{title}</AppText>
      {
        excerpt && isList && <AppText className={classes.excerpt}>
          {excerpt}
        </AppText>
      }
      {
        excerpt && isList && <div className={classes.ellipsis}>...</div>
      }
      {
        type
          .map((type, idx) => <AppText className={classes.tag} key={idx}>{type}</AppText>)
      }
      {
        isList && <AppLink className={classes.more} to={`${routePath.article_details}${id}`}>{t('read-more')}</AppLink>
      }
    </WithLink> 
  );
};

export default ArticleCard;