import * as S from './styles';

export interface IChannelButton {
  channelName: string;
  selected?: boolean;
}

const ChannelButton = ({ channelName, selected }: IChannelButton) => {
  return (
    <S.Container className={selected ? 'active' : ''}>
      <div>
        <S.HashtagIcon />
        <span>{channelName}</span>
      </div>
      <div>
        <S.InviteIcon />
        <S.SettingIcon />
      </div>
    </S.Container>
  );
};

export default ChannelButton;
