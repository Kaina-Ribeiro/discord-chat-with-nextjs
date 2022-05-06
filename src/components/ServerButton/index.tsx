import * as S from './styles';
import Logo from '../../assets/Logo.svg';
import Image from 'next/image';

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
        {isHome && <Image height={24} width={24} src={Logo} alt="Server logo" />}
      </S.Button>
    </>
  );
};

export default ServerButton;
