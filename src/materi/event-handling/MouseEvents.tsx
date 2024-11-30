export const ClickButton = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Button Clicked');
    alert('Button Clicked');
      // Kita bisa akses event properties, misalnya event.target
      console.log(event.target);
  }
  return <button onClick={handleClick}>Click Me</button>;
}