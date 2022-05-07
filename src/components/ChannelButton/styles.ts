import styled from '@emotion/styled';
import { Hashtag } from 'emotion-icons/heroicons-outline';
import { PersonAdd, Settings } from 'emotion-icons/material';

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;

  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  display: none;
  width: 16px;
  height: 16px;

  color: var(--symbol);
  transition: color 0.2s;

  &:hover {
    color: white;
    display: block;
  }
`;

export const SettingIcon = styled(Settings)`
  display: none;
  width: 16px;
  height: 16px;

  margin-left: 4px;

  color: var(--symbol);
  transition: color 0.2s;

  &:hover {
    color: white;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  transition: background-color 0.2s;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    font-size: 15px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);

    ${InviteIcon} {
      display: block;
    }
    ${SettingIcon} {
      display: block;
    }
    > div span {
      color: white;
    }
  }
`;
