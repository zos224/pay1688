import React, { useEffect, useRef } from "react";

type TypeProps = {
  placeholder?: string;
  onChange?: (arg?: any) => void;
  name?: string;
  value?: string;
};

const CKEditor = ({ onChange, name, value, placeholder }: TypeProps) => {
  const editorRef: any = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
    setLoading(true);
  }, [loading, value, placeholder]);

  return (
    <>
      {CKEditor ? (
        <CKEditor
          type=""
          name={name}
          editor={ClassicEditor}
          config={{
            ckfinder: {
              uploadUrl: "http://103.57.220.76:3201/", //Enter your upload url
            },
            /*

{
    "uploaded": true,
    "url": "http://127.0.0.1/uploaded-image.jpeg"
}

{
    "uploaded": false,
    "error": {
        "message": "could not upload this image"
    }
}



            */
            placeholder: placeholder || "",
          }}
          data={value}
          onChange={(event: any, editor: any) => {
            const data = editor.getData();
            // console.log({ event, editor, data })
            onChange?.(data);
          }}
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CKEditor;
