// External modules
import PropTypes from 'prop-types';

// Internal modules
import Card from '@/components/card';
import Heading from '@/components/heading';
import If from '@/components/if';
import {
  buttonLabelStyle,
  buttonStyle,
  cardContentStyle,
  cardStyle,
  headingStyle,
  messageBoxStyle,
} from '@/components/message-box/style';

const MessageBox = ({ clickText, message, onClick }) => (
  <div css={messageBoxStyle}>
    <Card css={cardStyle} cssContent={cardContentStyle} withBorder withShadow>
      <Heading level={1} css={headingStyle}>
        {message}
      </Heading>
      <If condition={typeof onClick !== 'undefined' && clickText?.length > 0}>
        <button css={buttonStyle} onClick={onClick}>
          <span css={buttonLabelStyle}>{clickText}</span>
        </button>
      </If>
    </Card>
  </div>
);

MessageBox.propTypes = {
  clickText: PropTypes.string,
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MessageBox;
