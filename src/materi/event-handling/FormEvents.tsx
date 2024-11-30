import React from "react"

export const FormSubmit = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(`Form submitted`);
    event.preventDefault();
    // alert('Form submitted');
  }
  return (
    <form onSubmit={handleSubmit} >
      <input type="text" placeholder="Your name"/>
      <button type="submit">Submit</button>
    </form>
  )
}