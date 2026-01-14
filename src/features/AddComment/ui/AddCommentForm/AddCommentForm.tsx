import React, { memo } from 'react';
import classes from './AddCommentForm.module.scss';
import { AppButton, AppInput, AppText, Avatar, AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import { useSelector, useDispatch } from 'react-redux';
import getAddCommentText from '../../model/selectors/getAddCommentText';
import { setText } from '../../model/slice/addCommentSlice';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

interface AddCommentFormProps {
  userName?: string;
  userAvatar?: string;
  userId?: string;
  onSubmit?: () => void; 
}

const AddCommentForm: React.FC<AddCommentFormProps> = ({ userId, userName, userAvatar, onSubmit = () => {} }) => {
  const { t } = useTranslation('comments');
  const commentText = useSelector(getAddCommentText);
  const dispatch = useDispatch<AppDispatch>();

  const onCommentChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setText(event.target.value));
  };

  const onCommentSubmit = () => {
    dispatch(setText(''));
    onSubmit();
  };

  return (
    <div className={classes.AddCommentForm}>
      <AppText className={classes.title}>{t('your-comment')}</AppText>
      <form autoComplete='off' method='dialog'>
        { userAvatar && <Avatar src={userAvatar} className={classes.avatar} size={32} /> }
        { (userName && userId) && <AppLink to={`${routePath.profile}${userId}`} className={classes.user} underlineOnHover>{userName}</AppLink> }
        <AppInput className={classes.comment} type='text' value={commentText || ''} name='comment' onChange={onCommentChange}  /> 
        <AppButton className={classes.sendBtn} onClick={onCommentSubmit} disabled={!commentText?.length}>{`${t('send')} 📨`}</AppButton>
      </form>
    </div>
  );
};

export default memo(AddCommentForm);