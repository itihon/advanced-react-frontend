import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppText, Page } from 'shared/ui';
import { TextTheme } from 'shared/ui/AppText/AppText';
import { Comment, CommentList } from 'entities/Comment';
import classes from './ArticleDetailsPage.module.scss';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import commentsReducer, { commentAdded, getArticleComments, setIsLoading } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector, useDispatch } from 'react-redux';
import getArticleCommentsIsLoading from '../model/selectors/getArticleCommentsIsLoading';
import getArticleCommentsError from '../model/selectors/getArticleCommentsError';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import fetchCommentsByArticleId from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addComment, AddCommentForm, addCommentReducer } from 'features/AddComment';
import { getAuthenticatedUser } from 'entities/User';
import { routePath } from 'shared/config/routeCounfig/routeConfig';
import ArticleComment from '../model/types/ArticleComment';
import getAddCommentText from 'features/AddComment/model/selectors/getAddCommentText';

const reducers: ReducerList = {
  articleComments: commentsReducer,
  addComment: addCommentReducer,
};

const ArticleDetailsPage: React.FC = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useDispatch<AppDispatch>();
  const authData = useSelector(getAuthenticatedUser);
  const commentText = useSelector(getAddCommentText);

  const onAddComment = async () => {
    if (id && commentText && authData) {
      const commentBody: ArticleComment = {
        articleId: id,
        text: commentText,
        userId: authData.id,
      };

      dispatch(setIsLoading(true));

      // @ts-expect-error damn redux
      const result = await dispatch(addComment({
        apiUrl: routePath.comments,  
        commentBody,
      }));


      if (result.payload && result.meta.requestStatus === 'fulfilled') {
        const addedComment: Comment = {
          // @ts-expect-error damn redux,
          id: result.payload.id,
          text: commentText,
          user: authData,
        };
        dispatch(commentAdded(addedComment));
      }

      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    if (id) {
      // @ts-expect-error damn redux
      dispatch(fetchCommentsByArticleId(id));
    }
  }, [id, dispatch]);

  if (!id) return (
    <AppText theme={TextTheme.ERROR}>{t('article-not-found')}</AppText>
  );

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page>
        <AppLink className={classes.back} to={routePath.articles}>{`⬅ ${t('back-to-articles')}`}</AppLink>
        <div className={classes.ArticleDetailsPage}>
          <ArticleDetails id={id} />
          {
            error
              ? <AppText theme={TextTheme.ERROR} >{error}</AppText>
              : <>
                  <h2>{t('comments')}</h2>
                  <CommentList isLoading={isLoading} comments={comments} />
                  <AddCommentForm onSubmit={onAddComment} userName={authData?.username} userAvatar={authData?.avatar} userId={authData?.id} />
                </>
          }
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);