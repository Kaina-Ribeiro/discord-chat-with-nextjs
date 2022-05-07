import * as S from './styles';

interface IUserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow = ({ nickname, isBot }: IUserProps) => {
  return (
    <S.Container>
      <S.Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </S.Container>
  );
};

export default UserRow;
