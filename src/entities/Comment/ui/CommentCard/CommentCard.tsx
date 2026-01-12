import React, { memo } from 'react';
import Comment from '../../model/types/comment';
import { AppText, Avatar, Skeleton } from 'shared/ui';
import classes from './CommentCard.module.scss';

interface CommentProps {
  comment?: Comment; 
  isLoading?: boolean;
}

const CommentCard: React.FC<CommentProps> = ({ comment, isLoading }) => {
  return (
    <div className={classes.CommentCard}>
      {
        isLoading
          ? <>
              <Skeleton width={32} height={32} borderRadius="50%" className={classes.avatar} />
              <Skeleton width="200px" height="16px" borderRadius="4px" className={classes.user} />
              <Skeleton width="90%" height="48px" borderRadius="4px" className={classes.comment} />
            </>
          : <>
              <Avatar src={comment?.user.avatar} className={classes.avatar} size={32} />
              <AppText className={classes.user}>{comment?.user.username}</AppText>
              <AppText className={classes.comment}>{comment?.text}</AppText>
            </>
      }
    </div>
  );
};

export default memo(CommentCard);