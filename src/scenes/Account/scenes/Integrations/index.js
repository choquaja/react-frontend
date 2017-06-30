import React from 'react';
import ContentCard from '../../../../components/ContentCard';
import CardTitle from '../../../../components/CardTitle';
import NoContent from '../../../../components/NoContent';
import AnimFade from '../../../../components/AnimFade';

export default function Integations() {
  return (
    <AnimFade>
      <ContentCard column key="card">
        <CardTitle>Integrations</CardTitle>
        <NoContent>
          Integrations have not been enabled yet. We&apos;re working on them
          though! So check back soon.
        </NoContent>
      </ContentCard>
    </AnimFade>
  );
}
