import React, { useEffect, useRef } from "react";

import { Axios } from "@/api/axios";

const uploadAdapter = (loader: any) => {
    return {
        upload: () => {
            return new Promise(async (resolve, reject) => {
                try {
                    const file = await loader.file;
                    Axios.postImages("https://api.ani2am.me/upload",
                        file, "image").then((res) => {
                            resolve({
                                default: res?.resul,
                            });
                            return {
                                    default: res?.resul,
                                };
                    })
                } 
                catch (error) {
                    reject(error);
                }
            })
        },
        abort: () => {}
    }
}

const uploadPlugin = (editor: any) => {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader: any) => {
        return uploadAdapter(loader);
    };
};

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
            extraPlugins: [uploadPlugin],
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
