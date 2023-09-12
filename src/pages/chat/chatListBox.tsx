import tw from 'twin.macro';

interface ChatListBoxProps {
  isActive: boolean;
  onClick: () => void;
  name: string;
  message: string;
  date: string;
}

function ChatListBox({
  isActive,
  onClick,
  name,
  message,
  date,
}: ChatListBoxProps) {
  return isActive ? (
    <StyledActiveChatListBox onClick={onClick}>
      <StyledProfileImg src="/images/profile.png" alt="Profile" />
      <StyledChatContent>
        <StyledProfileName>{name}</StyledProfileName>
        <StyledChatPreview>{message}</StyledChatPreview>
      </StyledChatContent>
      <StyledChatPreviewDate>{date}</StyledChatPreviewDate>
    </StyledActiveChatListBox>
  ) : (
    <StyledChatListBox onClick={onClick}>
      <StyledProfileImg src="/images/profile.png" alt="Profile" />
      <StyledChatContent>
        <StyledProfileName>{name}</StyledProfileName>
        <StyledChatPreview>{message}</StyledChatPreview>
      </StyledChatContent>
      <StyledChatPreviewDate>{date}</StyledChatPreviewDate>
    </StyledChatListBox>
  );
}

export default ChatListBox;

const StyledChatListBox = tw.div`
    flex w-[396px] h-[109px] px-[15px] py-6 border-b border-gray-300
`;

const StyledActiveChatListBox = tw(StyledChatListBox)`
    bg-[#E5F1FF]
`;

const StyledProfileImg = tw.img`
    w-[60px] h-[60px] rounded-full mr-4
`;

const StyledChatContent = tw.div`
    flex flex-col flex-grow
`;

const StyledProfileName = tw.div`
    font-bold text-lg mb-2
`;

const StyledChatPreview = tw.div`
    text-sm text-gray-600
`;

const StyledChatPreviewDate = tw.div`
    self-start ml-4 text-sm text-gray-400
`;
