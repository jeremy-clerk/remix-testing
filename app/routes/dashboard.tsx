import { Link } from '@remix-run/react';

export default function DashboardPage() {

  return <div className={"flex gap-4 flex-col"}>
    <p className={"text-[3rem]"}>
      Dashboard
    </p>
    <pre>
      //...something
    </pre>
    <Link to={"/"}>Go to root</Link>
  </div>
}