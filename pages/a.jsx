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
Test.getInitialProps = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: 'Jamie'
      });
    }, 3000);
  });

  return await promise;
};

export default withRouter(Test);
