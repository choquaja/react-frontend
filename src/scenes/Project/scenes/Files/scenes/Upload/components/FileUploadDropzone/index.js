import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import { themeColor } from '../../../../../../../../services/theme';

const DEFAULT_MAX_UPLOAD_SIZE = 15000000;
const MAX_SIZE = process.env.UI_MAX_UPLOAD_SIZE || DEFAULT_MAX_UPLOAD_SIZE;

const FileUploadDropzone = styled(Dropzone).attrs({
  disablePreview: true,
  multiple: true,
  maxSize: MAX_SIZE,
  activeClassName: 'active',
  rejectClassName: 'reject',
})`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  border: 2px dashed ${themeColor('tertiaryVariant2')};
  border-radius: 3px;
  &.active {
    border-color: ${themeColor('success')};
    background-color: ${themeColor('gray1')};
    border-style: dotted;
  }
  &.reject {
    border-color: ${themeColor('error')};
    background-color: ${themeColor('gray1')};
    border-style: dotted;
  }
`;

export default FileUploadDropzone;
