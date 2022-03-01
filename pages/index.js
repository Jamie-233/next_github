import { Button } from 'antd';
const Home = () => {
  const handleClick = () => {
    console.log('handleClick');
  };

  return (
    <div>
      <Button onClick={handleClick}>Index</Button>
    </div>
  );
};

export default Home;
