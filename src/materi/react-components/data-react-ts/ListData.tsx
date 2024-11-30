import { Jeneng } from "./item";

const names: Jeneng[] = [
  { id: 1, name: "Lilo" },
  { id: 2, name: "Fajri" },
  { id: 3, name: "Surury" },
];

export function NameList() {
  return (
    <div>
      <h1>List of Names</h1>
      <ul>
        {names.map((name) => (
          <li>
            {name.id}. {name.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
