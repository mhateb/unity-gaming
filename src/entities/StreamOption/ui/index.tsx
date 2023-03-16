import Image from 'next/image'

import LeagueOfLegendsIcon from '@/shared/images/league-of-legends-icon.png'

import {
  IconWrapper,
  OptionContent,
  OptionText,
  StreamOptionContainer,
} from './styles'

type StreamOptionProps = {
  variant: 'leagueoflegends' | 'english'
}

const StreamOption = ({ variant }: StreamOptionProps) => {
  const getContent = () => {
    if (variant === 'english')
      return <OptionText variant="body">🇺🇸 English</OptionText>
    if (variant === 'leagueoflegends')
      return (
        <OptionContent>
          <IconWrapper>
            <Image
              width={24}
              height={24}
              src={LeagueOfLegendsIcon.src}
              alt="league of legends image"
            />
          </IconWrapper>
          <OptionText variant="body">League of Legends®</OptionText>
        </OptionContent>
      )
  }
  return <StreamOptionContainer>{getContent()}</StreamOptionContainer>
}

export default StreamOption
