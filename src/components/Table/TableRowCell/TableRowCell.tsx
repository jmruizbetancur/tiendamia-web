import Link from "next/link";
import Image from "next/image";
import TableCell from "@mui/material/TableCell";

type Props = {
  columnField: string,
  value: any,
  imgUrl?: string
}

const TableRowCell = ({ columnField, value, imgUrl }: Props) => {
  if (columnField === 'id') {
    return (
      <TableCell>
        <Link href={`/orders/${value}`}>{value}</Link>
      </TableCell>
    )
  }

  if (imgUrl) {
    return (
      <TableCell className="product-item">
        <div className="thumbnail__container">
          <Image
            src={imgUrl}
            alt={value}
            layout="fill"
            objectFit="cover"
            className='thumbnail'
            priority
          />
        </div>
        <span>{value}</span>
      </TableCell>
    )
  }
  
  return <TableCell>{value}</TableCell>;
}

export default TableRowCell;
