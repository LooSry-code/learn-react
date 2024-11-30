import { Jeneng } from './item';

type Props = {
  nama: Jeneng;
}

export const ListNames = ({nama}: Props) => {
  return (
  <div>
    <h1>List of Names</h1>
    <li>
      {nama.id}. {nama.name}
      </li>
  </div>
)
}