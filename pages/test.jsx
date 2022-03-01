import Comp from '../component/comp';
import { withRouter } from 'next/router';

const Test = ({ router }) => {
  return (
    <>
      id: {router.query.id}
      <Comp>TEST</Comp>
    </>
  );
};

export default withRouter(Test);
