import JoditEditor from 'jodit-react';
import { useRef, useState, useMemo, useEffect } from 'react';

function Editor ({ initialContent }) {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = useMemo(() => ({
        readonly: false,
        height: '80vh',
        width: '100%',
        uploader: {
            insertImageAsBase64URI: true,
            imagesExtensions: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'],
        },
        placeholder: '',
    }), []);

    const handleUpdate = (event) => {
        const editorContent = event.target.value
        setContent(editorContent)
    }

    useEffect(() => {
        if (initialContent) {
            setContent(initialContent);
        }
    }, [initialContent]);

    return (
        <div className="central" style={{width: '100%'}}>
           <JoditEditor
             ref = {editor}
             value = {content}
             config = {config}
             onBlur = {handleUpdate}
             onChange = {(newContent) => {}}
           />
           <button className='btnSelect' >Salvar Modelo de Laudo</button>
        </div>
    )
}

export default Editor;