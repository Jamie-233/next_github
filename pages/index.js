import Link from 'next/link';
import router from 'next/router';
import { Button } from 'antd';

// usage scenes tips:
// add loading animation when route change start
// cancel loading animation after route change is complete

const events = [
  'routeChangeStart',
  'beforeHistoryChange',
  'routeChangeComplete',
  'routeChangeError',
  'hashChangeStart',
  'hashChangeComplete'
];

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args);
  };
}

events.forEach(event => {
  router.events.on(event, makeEvent(event));
});

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
      {/* href={{ pathname: '/a', query: { id: 1 } }} */}
      <Link href="/a?id=1" as="/a/1" title="test">
        <Button>TEST</Button>
      </Link>
      <Button type="primary" onClick={handleClick}>
        A
      </Button>
    </>
  );
};

export default Home;
