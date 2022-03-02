import Comp from '../component/comp';
import { withRouter } from 'next/router';
import { useRouter } from 'next/router';

const Test = props => {
  const router = useRouter();

  return (
    <>
      id: {router.query.id}
      <Comp>A</Comp>
    </>
  );
};

Test.getInitialProps = ({ query }) => {
  return {
    myParams: query
  };
};

export default withRouter(Test);
