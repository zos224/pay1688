import Image from "next/image";
import Link from "next/link";
type Props = {
  width?: number | Number;
  height?: number | Number;
};
export default function Logo({ width = 150, height = 70 }: Props) {
  return (
    <Link href="/" className="flex gap-3 font-bold text-blue-10 items-center">
      <Image
        src="/images/logo-auth.png"
        width={width as number}
        height={height as number}
        alt="logo"
      />
    </Link>
  );
}
