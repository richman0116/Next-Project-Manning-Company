import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  imageUrl: string;
  imageAlt: string;
  title: string;
  price: any;
}

const ProductCard = ({
  id,
  imageUrl,
  imageAlt,
  title,
  price,
}: ProductCardProps) => {
  return (
    <div key={id} className="px-[58px] md:px-0">
      <Link href={"/product-detail"}>
        <Image src={imageUrl} alt={imageAlt} width={312} height={100} />
      </Link>
      <div className="flex gap-[52px] p-2 pt-[18px]">
        <h2 className="namep  font-Akzidenregular">{title}</h2>
        <p className="pt-[18px] price  font-Akzidenzpc  ">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
