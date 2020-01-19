import styled, { css } from 'styled-components';

import { Colors } from 'styles/colors';
import { Size, Weight } from 'styles/typograhpy';
import { Transition } from 'styles/transition';

type InputProps = {
  error?: boolean;
};

const Label = styled.label`
  position: absolute;
  font-size: ${Size.Body};
  font-weight: ${Weight.Normal};
  color: ${Colors.Text};
  top: 0;
  left: 0;
  transition: ${Transition.Fast};
`;

const InputStyle = css`
  border: 0;
  border-bottom: 1px solid ${Colors.Line};
  font-size: ${Size.Body};
  font-weight: ${Weight.Normal};
`;

const ErrorMessage = styled.p`
  margin-top: 1rem;
  font-size: ${Size.Small};
  font-weight: ${Weight.Medium};
  color: ${Colors.Red};
  min-height: ${Size.Small};
`;

const Input = styled.input`
  ${InputStyle}
`;

const Textarea = styled.textarea`
  ${InputStyle}
`;

const Container = styled.div<InputProps>`
  position: relative;
  padding: ${Size.Small} 0;

  > ${Input}:focus, > ${Textarea}:focus {
    + ${Label} {
      font-size: ${Size.Small};
      transform: translateY(-100%);
    }
  }

  ${p =>
    p.error &&
    `
    > ${Input},
    > ${Textarea} {
      border-bottom-color: ${Colors.Red};
    }
  `}
`;

const Styles = {
  Label,
  ErrorMessage,
  Input,
  Textarea,
  Container,
};

export default Styles;
