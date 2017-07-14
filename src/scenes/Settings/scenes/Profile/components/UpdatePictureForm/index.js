import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import isEqual from 'lodash/isEqual';
import validator from '../../../../../../services/validator';
import Button from '../../../../../../components/Button';
import FormInput from '../../../../../../components/FormInput';
import AnimFade from '../../../../../../components/AnimFade';
import Row from '../../../../../../components/shared/row';
import Column from '../../../../../../components/shared/column';
import DropzoneContainer from '../../../../../Project/scenes/Files/scenes/Upload/components/DropzoneContainer';
import FileDisplayMatrix from '../../../../../Project/scenes/Files/scenes/Upload/components/FileDisplayMatrix';
import FileUploadDropzone from '../../../../../Project/scenes/Files/scenes/Upload/components/FileUploadDropzone';
import { actions } from '../../../../../Project/scenes/Files/scenes/Upload/components/FileUploadForm/constants';
import '../../../../../Project/scenes/Files/scenes/Upload/components/FileUploadForm/logic';

export class FileFieldUpdater extends Component {
  componentWillReceiveProps(props) {
    if (!isEqual(this.props.accepted, props.accepted)) {
      this.props.input.onChange(props.accepted);
    }
  }
  render = () => null
}

FileFieldUpdater.propTypes = {
  accepted: PropTypes.array.isRequired,
  input: PropTypes.object.isRequired,
};

// eslint-disable-next-line
const renderPath = ({ input, meta, ...rest }) => (<FormInput {...input} {...rest} />);

function FileUploadForm(props) {
  const { handleSubmit, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <DropzoneContainer>
        {({ handleDrop, accepted, rejected }) => (
          <div>
            <Field
              name="files"
              component={FileFieldUpdater}
              accepted={accepted}
            />
            <FileUploadDropzone onDrop={handleDrop}>
              <p>Drag-and-drop or click here to upload your profile picture.</p>
            </FileUploadDropzone>
            {(accepted.length > 0 || rejected.length > 0) && (
              <AnimFade>
                <div key="div">
                  <FileDisplayMatrix accepted={accepted} rejected={rejected} />
                  <Row>
                    <Column size={6}>
                      <Button success full disabled={!valid || submitting}>
                        Upload Profile Picture
                      </Button>
                    </Column>
                  </Row>
                </div>
              </AnimFade>
            )}
          </div>
        )}
      </DropzoneContainer>
    </form>
  );
}

FileUploadForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  file: 'required',
});

export default reduxForm({
  form: 'fileUpload',
  validate,
  onSubmit(values, dispatch) {
    return new Promise((resolve, reject) => {
      dispatch(actions.uploadFile(values, { resolve, reject }));
    });
  },
})(FileUploadForm);
