import React, { memo } from 'react';
import { AppImg, AppLink, AppText, Badge } from 'shared/ui';
import { ArticlePreview, ArticlePreviewStyle } from '../../model/types/article';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import classes from './ArticleCard.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { To } from 'react-router-dom';
import useArticleContent from '../../model/hooks/useArticleContent';

interface ArticleCardProps extends ArticlePreview {
  previewStyle?: ArticlePreviewStyle;
  className?: string;
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

const ArticleCard: React.FC<ArticleCardProps> = ({ id, createdAt, title, type, views, previewStyle = ArticlePreviewStyle.TILES, content, className }) => {
  const isList = previewStyle === ArticlePreviewStyle.LIST_ITEMS;
  const { t } = useTranslation('articles');
  const { firstImageSrc, firstParagraphText } = useArticleContent(content);

  return (
    <WithLink className={classNames(classes.ArticleCard, classes[previewStyle], className)} to={`${routePath.article_details}${id}`} withLink={!isList}>
      <Badge>{`👁️ ${views}`}</Badge>
      <Badge right='var(--padding)'>{`🗓️ ${createdAt}`}</Badge>
      <AppImg className={classes.img} src={firstImageSrc} alt={title} />
      <AppText className={classes.title}>{title}</AppText>
      {
        firstParagraphText && isList && <AppText className={classes.excerpt}>
          {firstParagraphText}
        </AppText>
      }
      {
        firstParagraphText && isList && <div className={classes.ellipsis}>...</div>
      }
      {
        type
          .map((type, idx) => <AppText className={classes.tag} key={idx}>{t(type)}</AppText>)
      }
      {
        isList && <AppLink className={classes.more} to={`${routePath.article_details}${id}`}>{t('read-more')}</AppLink>
      }
    </WithLink> 
  );
};

export default memo(ArticleCard);