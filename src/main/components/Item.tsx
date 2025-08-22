interface ItemProps {
  data: string;
}

export default function Item({ data }: ItemProps) {
  return <li>{data}</li>;
}
