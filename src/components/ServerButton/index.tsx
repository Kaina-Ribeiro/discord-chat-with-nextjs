import * as S from './styles';
import Image from 'next/image';

import { Discord } from '@emotion-icons/simple-icons/Discord';
import Logo from '../../assets/Logo.svg';

export interface IServerButtonProps {
  isHome?: boolean;
  selected?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton = ({ isHome, selected, hasNotifications, mentions }: IServerButtonProps) => {
  return (
    <>
      <S.Button
        isHome={isHome}
        selected={selected}
        hasNotifications={hasNotifications}
        mentions={mentions}
      >
        {isHome && <Discord />}
      </S.Button>
    </>
  );
};

export default ServerButton;
