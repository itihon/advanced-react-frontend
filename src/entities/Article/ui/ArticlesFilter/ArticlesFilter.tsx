import React from 'react';
import { ArticleType } from 'entities/Article/model/types/article';
import { HFlexBox, AppButton } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface ArticlesFilterProps {
  filter?: ArticleType | ''; 
  onFilterClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ArticlesFilter: React.FC<ArticlesFilterProps> = ({ filter, onFilterClick }) => {
  const { t } = useTranslation('articles');

  return (
    <>
      <HFlexBox gap='4px'>
      {
        Object
          .values(ArticleType)
          .map((articleType, idx) => <AppButton pushed={articleType === filter} value={articleType} size='size-l' key={idx} onClick={onFilterClick}>{t(articleType)}</AppButton>)
      }
      </HFlexBox>
    </>
  );
};

export default ArticlesFilter;