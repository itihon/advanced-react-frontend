import { AppImg, AppLink, AppText, Badge } from 'shared/ui';
import { ArticleBlockType, ArticlePreview, ArticlePreviewStyle } from '../../model/types/article';
import React from 'react';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import classes from './ArticleCard.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { To } from 'react-router-dom';

interface ArticleCardProps extends ArticlePreview {
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

const ArticleCard: React.FC<ArticleCardProps> = ({ id, createdAt, img, title, type, views, previewStyle = ArticlePreviewStyle.TILES, blocks, excerpt }) => {
  const isList = previewStyle === ArticlePreviewStyle.LIST_ITEMS;
  const { t } = useTranslation('articles');
  const intro = excerpt || blocks.filter(block => block.type === ArticleBlockType.TEXT)[0]?.paragraphs[0];

  return (
    <WithLink className={classNames(classes.ArticleCard, classes[previewStyle])} to={`${routePath.article_details}${id}`} withLink={!isList}>
      <Badge>{`👁️ ${views}`}</Badge>
      <Badge right='var(--padding)'>{`🗓️ ${createdAt}`}</Badge>
      <AppImg className={classes.img} src={img} alt={title} />
      <AppText className={classes.title}>{title}</AppText>
      {
        intro && isList && <AppText className={classes.excerpt}>
          {intro}
        </AppText>
      }
      {
        intro && isList && <div className={classes.ellipsis}>...</div>
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