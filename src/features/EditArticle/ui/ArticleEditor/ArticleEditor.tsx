import React, { useEffect } from 'react';

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
  SimpleUploadAdapter,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';

import classes from "./ArticleEditor.module.scss";

interface ArticleEditorProps {
  data?: string; 
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({ data }) => {
  return (
		<CKEditor
			editor={ ClassicEditor }
			config={ {
				licenseKey: 'GPL', // Or 'GPL'.
				plugins: [ 
          Essentials, 
          Paragraph, 
          Bold, 
          Italic, 
          CodeBlock, 
          Image, 
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
          SimpleUploadAdapter,
        ],
				toolbar: [ 
          'undo', 'redo',
          '|',
          'heading',
          '|',
          'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
          '|',
          'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
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
        simpleUpload: {
          uploadUrl: window.location.href,
        },
				initialData: data,
			} }
		/>
	);
};

export default ArticleEditor;