import React from 'react';
import { compose } from 'redux';
import styled, { css } from 'styled-components';
import { Field, reduxForm, propTypes } from 'redux-form';
import { MdLockOpen, MdLockOutline } from 'react-icons/lib/md';
import validator from '../../../../../../services/validator';
import Button from '../../../../../../components/Button';
import FormError from '../../../../../../components/FormError';
import FormInput from '../../../../../../components/FormInput';
import FormTextarea from '../../../../../../components/FormTextarea';
import FormLabel from '../../../../../../components/FormLabel';
import FormGroup from '../../../../../../components/FormGroup';
import { actions } from './constants';
import './logic';

const formatRadio = value => typeof value !== 'undefined' && String(value);
const normalizeRadio = value => typeof value !== 'undefined' && (value === 'true');
const disabledCss = css`
  input:disabled ~ & {
    opacity: .3;
  }
`;
const RadioLabel = styled.label`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 1rem;
  }
`;
const RadioInput = styled.input`
  margin-right: 1rem;
  &:disabled {
    opacity: .3;
  }
`;
const RadioText = styled.div`
  margin-left: 1rem;
  ${disabledCss}
`;
const IconPrivate = styled(MdLockOutline)`
  ${disabledCss}
`;
const IconPublic = styled(MdLockOpen)`
  ${disabledCss}
`;
const RadioHeader = styled.div`
  font-size: 1.25em;
  font-weight: 600;
`;

const renderInput = ({ input, meta, label, ...rest }) => ( // eslint-disable-line
  <FormGroup>
    <FormLabel htmlFor={`${meta.form}-${input.name}`}>{label}</FormLabel>
    <FormInput id={`${meta.form}-${input.name}`} {...input} {...rest} full />
    {meta.touched && meta.error &&
    <FormError>{meta.error}</FormError>}
  </FormGroup>
);

const renderTextarea = ({ input, meta, label, ...rest }) => ( // eslint-disable-line
  <FormGroup>
    <FormLabel htmlFor={`${meta.form}-${input.name}`}>{label}</FormLabel>
    <FormTextarea id={`${meta.form}-${input.name}`} {...input} {...rest} full />
    {meta.touched && meta.error &&
    <FormError>{meta.error}</FormError>}
  </FormGroup>
);

const renderPrivate = field => (
  <FormGroup>
    <RadioLabel>
      <RadioInput type="radio" {...field.input} value="true" />
      <IconPrivate size={40} />
      <RadioText>
        <RadioHeader>Private</RadioHeader>
        <div>Anyone can see this project. You choose who can edit.</div>
      </RadioText>
    </RadioLabel>
    <RadioLabel>
      <RadioInput type="radio" {...field.input} value="false" />
      <IconPublic size={40} />
      <RadioText>
        <RadioHeader>Public</RadioHeader>
        <div>You choose who can see and edit this repository.</div>
      </RadioText>
    </RadioLabel>
    {field.meta.touched && field.meta.error &&
    <FormError>{field.meta.error}</FormError>}
  </FormGroup>
);

export function NewForm(props) {
  const { handleSubmit, error, submitting, valid } = props;
  return (
    <form onSubmit={handleSubmit}>
      {error && <FormError>{error}<br />Please try again.</FormError>}
      <Field
        name="name"
        component={renderInput}
        label="Project Name"
        placeholder="MyProject"
      />
      <Field
        name="description"
        component={renderTextarea}
        label="Description (Optional)"
        placeholder="Your project description..."
      />
      <Field
        name="private"
        component={renderPrivate}
        format={formatRadio}
        normalize={normalizeRadio}
      />
      <FormGroup>
        <Button type="submit" success flat disabled={!valid || submitting}>Create</Button>
      </FormGroup>
    </form>
  );
}

NewForm.propTypes = {
  ...propTypes,
};

const validate = validator({
  name: 'required|projectName',
  private: 'required',
});

export default compose(
  reduxForm({
    form: 'newProject',
    validate,
    onSubmit(values, dispatch) {
      return new Promise((resolve, reject) => {
        dispatch(actions.newProject(values, { resolve, reject }));
      });
    },
  }),
)(NewForm);
