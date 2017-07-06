import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm, propTypes } from 'redux-form';
import isEqual from 'lodash/isEqual';
import validator from '../../../../../../../../services/validator';
import Button from '../../../../../../../../components/Button';
import FormInput from '../../../../../../../../components/FormInput';
import FormLabel from '../../../../../../../../components/FormLabel';
import AnimFade from '../../../../../../../../components/AnimFade';
import Row from '../../../../../../../../components/shared/row';
import Column from '../../../../../../../../components/shared/column';
import DropzoneContainer from '../DropzoneContainer';
import FileDisplayMatrix from '../FileDisplayMatrix';
import FileUploadDropzone from '../FileUploadDropzone';
import { actions } from './constants';
import './logic';

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
              name="file"
              component={FileFieldUpdater}
              accepted={accepted}
            />
            <FileUploadDropzone onDrop={handleDrop}>
              <p>Drag-and-drop or click here to add files for upload.</p>
            </FileUploadDropzone>
            {(accepted.length > 0 || rejected.length > 0) && (
              <AnimFade>
                <div key="div">
                  <FileDisplayMatrix accepted={accepted} rejected={rejected} />
                  <Row>
                    <Column size={6}>
                      <Button success full disabled={!valid || submitting}>
                        Upload Accepted Files
                      </Button>
                    </Column>
                    <Column size={6}>
                      <FormLabel>Path (optional)</FormLabel>
                      <Field name="path" component={renderPath} small />
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
