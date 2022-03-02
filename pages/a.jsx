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

// usage: getInitialProps
// get data from the page, get global data in App
Test.getInitialProps = ({ query }) => {
  return {
    myParams: query
  };
};

export default withRouter(Test);
