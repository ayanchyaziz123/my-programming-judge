import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EditorialRichTextField({onChange, name, value}) {

        return (
            <div className="App">
                <h2>Editorial</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    name={name}
                    data={value}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      // console.log({ event, editor, data })
                      onChange(data);
                    }}

                />
                
            </div>
        );
}

export default EditorialRichTextField;