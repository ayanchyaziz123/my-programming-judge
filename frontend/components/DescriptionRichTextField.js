import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function DescriptionRichTextField({onChange, name, value}) {

        return (
            <div className="App">
                <h2>Description</h2>
                <CKEditor
                    editor={ ClassicEditor }
                    name={name}
                    data={value}
                    onChange={(event, editor) => {
                      const data = editor.getData();
                      // console.log({ event, editor, data })
                      onChange(data);
                    }}

                    // onInit={ editor => {
                    //     // You can store the "editor" and use when it is needed.
                    //     console.log( 'Editor is ready to use!', editor.state );
                    // } }
                />
                
            </div>
        );
}

export default DescriptionRichTextField;