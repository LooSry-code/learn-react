import { useState } from "react";

export const ItemList = () => {
  const [fruits, setFruits] = useState<string[]>(['Pisang', 'Apel']);

  const AddFruit = () => {
    setFruits([...fruits, `Fruit ${fruits.length}`])
  }

  return (
    <div>
      <h2>Daftar Buah</h2>
      <ul>
        {fruits.map((fruits, index) => {
          return (
            // <li>{fruits} - {index}</li>
            <li key={index}>{fruits} - {index}</li>
          )
        })}
      </ul>
      <button onClick={AddFruit}>Add Fruit</button>
    </div>
  )
}