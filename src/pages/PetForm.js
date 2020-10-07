import React from 'react';
import styled from 'styled-components';
import FormTemplate from '../components/FormTemplate';
import Form from '../components/pet/Form';

const PetForm = () => {
  return (
    <>
      <FormTemplate title="파양하기">
        <Form />
      </FormTemplate>
    </>
  );
};

export default PetForm;
