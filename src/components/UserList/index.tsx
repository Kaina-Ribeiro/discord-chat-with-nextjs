import UserRow from '../UserRow';
import * as S from './styles';

const UserList = () => {
  return (
    <S.Container>
      <S.Role>Disponível - 1</S.Role>
      <UserRow nickname="Guilherme Rodz" />

      <S.Role>Offline - 18</S.Role>
      <UserRow nickname="Diego Fernandes Rodz" isBot />
      <UserRow nickname="Diego Fernandes Rodz" isBot />
      <UserRow nickname="Diego Fernandes Rodz" isBot />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
      <UserRow nickname="Diego Fernandes Rodz" />
    </S.Container>
  );
};

export default UserList;
