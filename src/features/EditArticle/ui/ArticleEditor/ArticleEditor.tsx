import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { 
  ClassicEditor, 
  Essentials, 
  Paragraph, 
  Bold, 
  Italic, 
  CodeBlock, 
  Image, 
  ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
  ImageInsert,
  ImageUpload,
  AutoImage,
	LinkImage,
  ImageTextAlternative,
  PictureEditing,
  Link,
  Heading,
  Code,
  List,
  TodoList,
  BlockQuote,
  Indent,
  Alignment,
  IndentBlock,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import classes from "./ArticleEditor.module.scss";
import ImageUploadAdapterPlugin from '../../lib/ImageUploaderPlugin/ImageUploaderPlugin';
import { AppInput } from 'shared/ui';

interface ArticleEditorProps {
  title?: string;
  content?: string; 
  onSave?: (title?: string, content?: string) => void;
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({ title, content, onSave = () => {} }) => {
  const editorComponentRef = useRef<CKEditor<ClassicEditor>>(null);
  const titleComponentRef = useRef<HTMLInputElement>(null);
  const [articleTitle, setArticleTitle] = useState(title);
  const { t } = useTranslation('articles');

  const onSaveClick = () => {
    onSave(
      titleComponentRef.current?.value,
      editorComponentRef.current?.editor?.getData(),
    );
  };

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setArticleTitle(e.target.value);
  };

  return (
    <div className={classNames(classes.ArticleEditor, 'ignore-reset')}>
      <button onClick={onSaveClick}>{t('save-article')}</button>
      <AppInput ref={titleComponentRef} type='text' value={articleTitle} onChange={onTitleChange} />
      <CKEditor
        ref={editorComponentRef}
        editor={ ClassicEditor }
        config={ {
          licenseKey: 'GPL', 
          plugins: [ 
            Essentials, 
            Paragraph, 
            Heading,
            Bold, 
            Italic, 
            Alignment,
            Code,
            CodeBlock, 
            Image, 
            List,
            TodoList,
            BlockQuote,
            Indent,
            IndentBlock,
            ImageToolbar, 
            ImageCaption, 
            ImageStyle, 
            ImageResize, 
            ImageUpload, 
            ImageInsert, 
            AutoImage,
            ImageTextAlternative,
            PictureEditing,
            LinkImage,
            Link,
            ImageUploadAdapterPlugin,
          ],
          toolbar: [ 
            'undo', 'redo',
            '|',
            'heading',
            // '|',
            // 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
            '|',
            'bold', 'italic', 'alignment', 'code',// 'strikethrough', 'subscript', 'superscript',
            '|',
            'link', 'insertImage', 'blockQuote', 'codeBlock',
            '|',
            'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
          ],
          image: {
            toolbar: [
              'imageTextAlternative', 'toggleImageCaption',
            ],
          },
          initialData: content,
        } }
      />
    </div>
	);
};

export default ArticleEditor;