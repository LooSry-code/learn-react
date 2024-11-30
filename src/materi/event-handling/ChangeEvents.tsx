import React from "react"

export const TextInput = () => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`Input changed to ${event.target.value}`);
    // alert(`Input changed to ${event.target.value}`);
  };

  return (
    <input type="text" onChange={handleChange} />
  )
}