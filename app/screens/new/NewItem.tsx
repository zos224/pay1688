import Image from "next/image";
import Link from "next/link";
export type New = {
  image: string;
  title: string;
  description: string;
  id: string;
};
type NewItemProps = {
  item: New;
  className?: string;
  url?: string
};
const NewItem = ({ item, className, url }: NewItemProps) => {
  const { image, title, description, id } = item;
  return (
    <div className={`${className ? className : ""}`}>
      <div className="rounded-lg overflow-hidden">
        <Link href={`/${url ? url : "policy"}/${id}`}>
          <Image src={image} alt={title} width={347} height={222} />
        </Link>
      </div>
      <div className="mt-8 font-medium text-lg truncate">
        <Link href={`/${url ? url : "policy"}/${id}`}>{title}</Link>
      </div>
      <div className="mt-2 line-clamp-6">{description}</div>
    </div>
  );
};
export default NewItem;
