import mammoth from 'mammoth';
import { useEffect, useState } from 'react';
import Viewer from 'react-office-viewer';

export default function HomePage() {
  const [docHtml, setDocHtml] = useState('');
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/demo1.docx');
    xhr.responseType = 'arraybuffer';
    xhr.onload = function () {
      console.log(xhr.response);
      // renderAsync(xhr.response, document.getElementById('docx') as HTMLElement);
      mammoth
        .convertToHtml({ arrayBuffer: xhr.response })

        .then(function (result) {
          console.log(result);

          var html = result.value; // The generated HTML
          setDocHtml(html);
          var messages = result.messages; // Any messages, such as warnings during conversion
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    xhr.send();
  }, []);
  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <div
        className={'document-container'}
        style={{
          width: 100 + '%',
          height: '85%',
          overflow: 'auto',
        }}
        dangerouslySetInnerHTML={{ __html: docHtml }}
      ></div>
      <Viewer />
    </div>
  );
}
