import { StyledForm, Button } from './styled';
import { Component } from 'react';
import Input from '../Input';
import { Formik } from 'formik';
import withAnimatedLabel from '../WithAnimatedLabel';
import InputModel from '../../models/Input';

const InputWithAnimation = withAnimatedLabel(Input);
class Form extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          pesel: '',
          startDate: '',
          faculty: '',
          album: '',
        }}
        onSubmit={values => {
          this.props.showModal(values);
        }}>
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            {Object.keys(values)
              .map(key => new InputModel({ key, value: values[key] }))
              .map(model => {
                return (
                  <InputWithAnimation
                    id={model.name}
                    label={model.label}
                    type={model.type}
                    value={model.value}
                    onChange={handleChange}
                    handleformikblur={handleBlur}
                  />
                );
              })}
            <Button type="submit">Wygeneruj</Button>
          </StyledForm>
        )}
      </Formik>
    );
  }
}

export default Form;
