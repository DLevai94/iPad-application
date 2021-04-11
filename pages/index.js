import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>{`${process.env.NEXT_PUBLIC_ENV} environment`}</p>
    </div>
  );
}
