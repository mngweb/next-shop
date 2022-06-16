import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
    children: string;
    href: string;
    classes?: string;
  };

export const ActiveLink = ({ children, href, classes }: Props) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <a className={`${classes} ${href == router.pathname ? `text-teal-300` : ""}`}>{children}</a>
    </Link>
  );
};
