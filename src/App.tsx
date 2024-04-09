import React from 'react';
import HelperForm from './form/HelperForm';

function App() {
  return (
    <div className="container mx-auto my-2">
      <p className="text-center text-3xl font-bold mt-10 mb-10">Hỗ trợ tìm giáo viên hướng dẫn tốt nghiệp</p>

      <div className="flex justify-center">
        <HelperForm />
      </div>
    </div>
  );
}

export default App;
