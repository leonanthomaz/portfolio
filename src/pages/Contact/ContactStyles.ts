import styled from 'styled-components';

export const FormContainer = styled.div`
  flex: 1;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 16px;
    color: #ffd700;
    margin-bottom: 8px;
  }

  input,
  textarea {
    padding: 12px 16px;
    font-size: 16px;
    border: 1px solid #ffd700;
    border-radius: 8px;
    background-color: transparent;
    color: #ffd700;
    outline: none;
    transition: border-color 0.3s ease-in-out;

    &:focus {
      border-color: #ffaa00;
    }

    &::placeholder {
      color: #888;
    }
  }

  textarea {
    resize: none;
    min-height: 120px;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #ffaa00;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ffd700;
  }

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`;
