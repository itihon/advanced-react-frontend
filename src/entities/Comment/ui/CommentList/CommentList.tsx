import Comment from '../../model/types/comment';
import React from 'react';
import CommentCard from '../CommentCard/CommentCard';
import { AppText } from 'shared/ui';
import { useTranslation } from 'react-i18next';

interface CommentListProps {
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: React.FC<CommentListProps> = ({ comments, isLoading }) => {
  const { t } = useTranslation('comments');

  return (
    isLoading
      ? <CommentCard isLoading={isLoading} />
      : <>
          {
            (comments && comments.length)
              ? comments?.map((comment, idx) => <CommentCard key={idx} comment={comment} />)
              : <AppText>{t('comments-not-found')}</AppText>
          }
        </>
    );
};

export default CommentList;