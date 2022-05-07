import styled from '@emotion/styled';
import { ExpandMore } from 'emotion-icons/material';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  /* align-items: center; */
  flex-direction: column;

  padding: 3px 6px 0 16px;

  background-color: var(--secondary);

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 500;

  color: var(--gray);
`;

export const ExpandIcon = styled(ExpandMore)`
  width: 28px;
  height: 28px;

  color: white;

  cursor: pointer;
`;
