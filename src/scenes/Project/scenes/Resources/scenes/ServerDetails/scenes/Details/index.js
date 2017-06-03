import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Line = styled.div`
  display: flex;
  margin: 1rem 0;
`;

const Label = styled.div`
  width: 11.5rem;
  padding-right: 1.5rem;
  font-weight: 600;
  text-align: right;
`;

const Item = styled.div`
  flex: 1;
`;

export default function Details({ server }) {
  return (
    <div>
      <Line>
        <Label>Name</Label>
        <Item>{server.name}</Item>
      </Line>
      <Line>
        <Label>Image</Label>
        <Item>
          <a
            href={`https://hub.docker.com/r/${server.image_name}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {server.image_name}
          </a>
        </Item>
      </Line>
      <Line>
        <Label>Type</Label>
        <Item>{server.config.type}</Item>
      </Line>
      <Line>
        <Label>Created Date</Label>
        <Item>{server.created_at}</Item>
      </Line>
    </div>
  );
}

Details.propTypes = {
  server: PropTypes.object.isRequired,
};
