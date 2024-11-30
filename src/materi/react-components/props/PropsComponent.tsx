type Props = {
  name: string;
  age: number;
  isMarried: 'has been married' | 'has not been married';
};

const PropsComponent = ({ name, age, isMarried }: Props) => 
{
  return (
  <div>
    <h1>Hello my name is {name}, I'm {age} years old, and I'm {isMarried}</h1>
  </div>
  );
};

export default PropsComponent;
