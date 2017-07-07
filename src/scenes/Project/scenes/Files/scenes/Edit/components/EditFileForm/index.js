import React from 'react';
import PropTypes from 'prop-types';
import { withProps, compose } from 'recompose';
import { Field, reduxForm, propTypes } from 'redux-form';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/theme/github';
import 'brace/theme/monokai';
import 'brace/mode/markdown';
import 'brace/mode/python';
import Button from '../../../../../../../../components/Button';
import CardTitle from '../../../../../../../../components/CardTitle';
import FormError from '../../../../../../../../components/FormError';
import FormInput from '../../../../../../../../components/FormInput';
import FormGroup from '../../../../../../../../components/FormGroup';
import validator from '../../../../../../../../services/validator';
import { actions } from '../../constants';

const parseFileExt = filename => filename.split('.').pop().toLowerCase();
const getMode = (path) => {
  const ext = parseFileExt(path);
  switch (ext) {
    case 'md':
    case 'markdown':
      return 'markdown';
    case 'py':
    case 'python':
    case 'ipynb':
      return 'python';
    default:
      return '';
  }
};
/* eslint-disable */
const renderName = ({ input, meta, ...rest }) => (<FormInput {...input} {...rest} />);
const renderEditor = ({ input, meta, ...rest }) => (<AceEditor {...input} {...rest} />);
/* eslint-enable */

export function EditFileForm(props) {
  const { handleSubmit, error, submitting, valid, data, id } = props;
  return (
    <form onSubmit={handleSubmit}>
      <CardTitle>
        Editing:
        {' '}
        <Field
          name="name"
          component={renderName}
          placeholder="File Name"
          camo
        />
      </CardTitle>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <FormGroup>
        <Field
          name="base64_data"
          component={renderEditor}
          theme="monokai"
          width="100%"
          mode={data ? getMode(data.name) : ''}
          focus={!!id}
        />
      </FormGroup>
      <FormGroup>
        <Button type="submit" success flat disabled={!valid || submitting}>
          {id ? 'Save' : 'Create'}
        </Button>
      </FormGroup>
    </form>
  );
}

EditFileForm.propTypes = {
  ...propTypes,
  createFile: PropTypes.bool.isRequired,
  data: PropTypes.object,
  id: PropTypes.string,
};

EditFileForm.defaultProps = {
  data: {},
  id: '',
};

const validate = validator({
  name: 'required',
});

export default compose(
  withProps((props) => {
    if (props.data) {
      const { path, name, content } = props.data;
      return {
        initialValues: {
          name: path + name,
          base64_data: window.atob(content),
        },
      };
    }
    return null;
  }),
  reduxForm({
    form: 'editFile',
    validate,
    enableReinitialize: true,
    onSubmit({ name, base64_data }, dispatch, { id }) {
      const updatedValues = {
        id,
        name,
        base64_data: window.btoa(base64_data),
      };
      return new Promise((resolve, reject) => {
        dispatch(actions.saveFile(updatedValues, { resolve, reject }));
      });
    },
  }),
)(EditFileForm);
