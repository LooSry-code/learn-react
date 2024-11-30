import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export const FormComponent = () => {
  // Inisialiasasi state untuk form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  // Fungsi untuk menangani perubahan pada setiap input user
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update state sesuai input yang diubah
    setFormData({
      ...formData,
      [name]: value, // Update value sesuai input yang diubah oleh user
    });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Data yang disubmit: `, formData)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name : </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your name" />
      </div>

      <div>
        <label htmlFor="email : ">Email : </label>
        <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your email" />
      </div>

      <div>
        <label htmlFor="password">Pasword : </label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Your password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
};
