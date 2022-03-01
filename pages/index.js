import Link from 'next/link';
import router from 'next/router';
import { Button } from 'antd';

const Home = () => {
  const handleClick = () => {
    console.log('handleClick');
    router.push(
      {
        pathname: '/test/a',
        query: {
          id: 2
        }
      },
      '/test/a/2'
    );
  };

  return (
    <>
      {/* usage as tag; refresh 404; URL masking; request next not /test/1 router; need usage Koa */}
      <Link href="/test?id=1" as="/test/1" title="test">
        <Button>TEST</Button>
      </Link>
      <Button type="primary" onClick={handleClick}>
        A
      </Button>
    </>
  );
};

export default Home;
