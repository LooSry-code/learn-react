type Props = {
  namaLengkap: string;
  umur: number;
  hobby?: string;
}

const DefaultProps = ({namaLengkap, umur, hobby='Coding'}: Props) => {
  return (
    <div>
        <h1>Nama Lengkap: {namaLengkap}</h1>
        <h2>Umur: {umur}</h2> <h2>Hobby: {hobby}</h2>
    </div>
  )
}

export default DefaultProps;