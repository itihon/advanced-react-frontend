import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import React, { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AppText } from 'shared/ui';
import { TextTheme } from 'shared/ui/AppText/AppText';
import { CommentList } from 'entities/Comment';
import classes from './ArticleDetailsPage.module.scss';
import DynamicModuleLoader, { ReducerList } from 'shared/lib/components/DynamicModuleLoader';
import commentsReducer, { getArticleComments } from '../model/slice/articleDetailsCommentsSlice';
import { useSelector, useDispatch } from 'react-redux';
import getArticleCommentsIsLoading from '../model/selectors/getArticleCommentsIsLoading';
import getArticleCommentsError from '../model/selectors/getArticleCommentsError';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';
import fetchCommentsByArticleId from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const reducers: ReducerList = {
  articleComments: commentsReducer,
};

const ArticleDetailsPage: React.FC = () => {
  const { t } = useTranslation('articles');
  const { id } = useParams<{ id: string }>();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const error = useSelector(getArticleCommentsError);
  const dispatch = useDispatch<AppDispatch>();

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
      <div className={classes.ArticleDetailsPage}>
        <ArticleDetails id={id} />

        {
          error
            ? <AppText theme={TextTheme.ERROR} >{error}</AppText>
            : <>
                <h2>{t('comments')}</h2>
                <CommentList isLoading={isLoading} comments={comments} />
              </>
        }
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);