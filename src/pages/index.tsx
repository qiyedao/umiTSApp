import CustomUpload from '@/components/Upload';
import { useState } from 'react';
export default function HomePage() {
  const [docHtml, setDocHtml] = useState('');

  return (
    <div>
      <h2>Yay! Welcome to umi!</h2>
      <CustomUpload />
    </div>
  );
}
