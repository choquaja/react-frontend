import React from 'react';
import ContentCard from '../../../../../../components/ContentCard';
import CardTitle from '../../../../../../components/CardTitle';
import AnimFade from '../../../../../../components/AnimFade';
import FileUploadForm from './components/FileUploadForm';

function Upload() {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>File Uploader</CardTitle>
        <FileUploadForm />
      </ContentCard>
    </AnimFade>
  );
}

export default Upload;
