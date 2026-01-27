import { Editor, FileLoader, UploadResponse } from "ckeditor5";

class ImageUploadAdapter {
  loader: FileLoader;

	constructor( loader: FileLoader ) {
		// The file loader instance to use during the upload.
		this.loader = loader;
	}

	// Starts the upload process.
	upload() {
		return this.loader.file
			.then( file => new Promise(
        (resolve, reject) => {
          console.log(file);
        }
      )) as Promise<UploadResponse>; 
  }

	// Aborts the upload process.
	abort() {
	}
}

export default function ImageUploadAdapterPlugin( editor: Editor ) {
	editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader: FileLoader ) => {
		// Configure the URL to the upload script in your back-end here!
		return new ImageUploadAdapter( loader );
	};
}