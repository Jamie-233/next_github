import { withRouter } from 'next/router';
import Comp from '../../component/comp';

const A = ({ router }) => {
  return (
    <>
      id: {router.query.id}
      <Comp>A</Comp>
    </>
  );
};

export default withRouter(A);
