import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutEl = styled.div``;

const TopEl = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TopElLeft = styled.div``;

const TopElRight = styled.div``;

const LayoutComponentFactory = ({ filterable, header }) => {
  const LayoutComponent = ({ Table, Filter }) => (
    <LayoutEl>
      {(filterable || header) &&
        <TopEl>
          <TopElLeft>
            <Filter />
          </TopElLeft>
          <TopElRight>
            {header}
          </TopElRight>
        </TopEl>
      }
      <Table />
    </LayoutEl>
  );

  LayoutComponent.propTypes = {
    Table: PropTypes.node.isRequired,
    Filter: PropTypes.node.isRequired,
  };

  return LayoutComponent;
};

export default LayoutComponentFactory;
