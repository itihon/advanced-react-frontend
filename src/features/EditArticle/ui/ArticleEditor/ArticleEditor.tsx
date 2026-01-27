import React from 'react';
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

interface ArticleEditorProps {
  data?: string; 
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({ data }) => {
  return (
    <div className={classNames(classes.ArticleEditor, 'ignore-reset')}>
      <CKEditor
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
          initialData: data,
        } }
      />
    </div>
	);
};

export default ArticleEditor;