import React from 'react';
import PageWidth from '../../../../components/PageWidth';
import CardTitle from '../../../../components/CardTitle';
import ContentCard from '../../../../components/ContentCard';
import AnimFade from '../../../../components/AnimFade';
import NewForm from './components/NewForm';

function New() {
  return (
    <PageWidth small>
      <AnimFade>
        <ContentCard key="ContentCard">
          <CardTitle>Add Project</CardTitle>
          <NewForm />
        </ContentCard>
      </AnimFade>
    </PageWidth>
  );
}

export default New;
