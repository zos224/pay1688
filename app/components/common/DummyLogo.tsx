import Image from "next/image";
import Link from "next/link";
type Props = {
  width?: number | Number;
  height?: number | Number;
};
export default function DummyLogo({ width = 150, height = 300 }: Props) {
  return (
    <Link href="/" className="flex gap-3 font-bold text-white items-center">
      <Image
        src="/images/logo.png"
        width={width as number}
        height={50 || height}
        alt="logo"
      />
    </Link>
  );
}
