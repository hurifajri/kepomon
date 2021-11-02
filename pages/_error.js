// Internal modules
import If from '@/components/if';
import MessageBox from '@/components/message-box';

const Error = ({ statusCode }) => (
  <>
    <If condition={statusCode !== null}>
      <MessageBox message={`An error ${statusCode} occurred on server`} />
    </If>
    <If condition={statusCode === null}>
      <MessageBox message="An error occurred on client" />
    </If>
  </>
);

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
