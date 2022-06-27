import { css } from '@emotion/react';
import styled from '@emotion/styled';

const error = () => css`
  label: container-error;

  display: flex;
  align-items: center;

  background: rgb(248 113 113);
  color: #fff;
  font-size: 1rem;
  padding: 1rem 2rem;
  border-radius: 0.25rem;
  flex: 1;
`;

const section = () => css`
  label: container-section;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Error = styled.div(error);
export const Section = styled.section(section);
