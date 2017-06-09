import React from 'react';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import AnimFade from '../../../../components/AnimFade';
import NewForm from './components/NewForm';

function NewWorkspace() {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Add Resource</CardTitle>
        <NewForm />
      </ContentCard>
    </AnimFade>
  );
}

export default NewWorkspace;
