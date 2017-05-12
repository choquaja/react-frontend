import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';
import { GoFileDirectory } from 'react-icons/lib/go';
import OpenIndicator from '../OpenIndicator';
import FileItemDiv from '../FileItemDiv';
import File from '../File';
import IconContainer from '../IconContainer';

const renderFiles = ({ files, ...rest }) => files.map(file =>
  <File key={file.path} file={file} {...rest} />,
);

// const Collapse = styled.div`
//   transition: all .2s;
//   transform: translateY(-100%);
//   z-index: -1;
//   overflow: hidden;
//   ${props => props.open && css`
//     transform: translateY(0);
//   `}
// `;

export default class DirItem extends Component {
  static propTypes = {
    file: PropTypes.object.isRequired,
    files: PropTypes.array.isRequired,
    depth: PropTypes.number.isRequired,
    selected: PropTypes.array.isRequired,
    updateSelected: PropTypes.func.isRequired,
  }

  state = {
    open: false,
  }

  toggleOpen = (event) => {
    event.preventDefault();
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const { file, files, depth, selected, updateSelected } = this.props;
    const { open } = this.state;
    return (
      <div>
        <FileItemDiv depth={depth} onClick={this.toggleOpen}>
          <OpenIndicator open={open} />
          <div>
            <IconContainer>
              <GoFileDirectory size={20} />
            </IconContainer>
            {file.name}
          </div>
        </FileItemDiv>
        {open && renderFiles({
          files,
          depth: (depth + 1),
          selected,
          updateSelected,
        })}
        {/* <Collapse open={open}>
        </Collapse> */}
      </div>
    );
  }
}
