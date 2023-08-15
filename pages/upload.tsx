import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Upload = () => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle the file upload logic here
    console.log(file);
  };

  return (
    <div className="container mx-auto mt-20 p-4">
      <h1 className="text-3xl font-semibold mb-10 text-center">Upload a Photo</h1>
      <form onSubmit={handleSubmit}>
        <div
          {...getRootProps()}
          className={`border-4 border-dashed p-10 rounded-md ${
            isDragActive ? 'border-blue-400' : 'border-gray-400'
          } hover:border-blue-400 transition-all duration-300 ease-in-out focus:outline-none focus:border-blue-400`}
        >
          <input {...getInputProps()} />
          <div className="text-center">
            {isDragActive ? (
              <p className="text-xl font-medium text-blue-400">Drop the files here ...</p>
            ) : (
              <p className="text-lg font-medium text-gray-600">
                Drag 'n' drop some files here, or click to select files
              </p>
            )}
          </div>
        </div>
        {file && (
          <div className="mt-4 text-md text-gray-600">
            Selected file: <span className="font-medium">{file.name}</span>
          </div>
        )}
        <button
          type="submit"
          className="mt-6 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-all duration-300 ease-in-out"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
