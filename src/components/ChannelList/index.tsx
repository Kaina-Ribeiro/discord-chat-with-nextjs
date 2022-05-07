import ChannelButton from '../ChannelButton';
import * as S from './styles';

const ChannelList = () => {
  return (
    <S.Container>
      <S.Category>
        <span>Canais de text </span>
        <S.AddCategoryIcon />
      </S.Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="lolzinho" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="csgo" />
    </S.Container>
  );
};

export default ChannelList;
