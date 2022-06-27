import { css } from '@emotion/react';
import styled from '@emotion/styled';

const section = () => css`
  label: container-section;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Section = styled.section(section);
