export function KeyPress() {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(`Key pressed: ${event.key}`);
    // alert(`Key pressed: ${event.key}`);
  };
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown} />
    </div>
  );
}
