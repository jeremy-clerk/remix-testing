import {
  useAuth,
} from '@clerk/remix';
import { Link } from '@remix-run/react';

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth()

  return (
    <>
      <pre>routes/_index.ts</pre>
      <div>
        <pre>
          {!isLoaded && "...loading..."}
          {isSignedIn && "Signed In"}
          {isLoaded && !isSignedIn && "Signed Out"}
        </pre>
      </div>
      <div className={"p-2"}>
        <Link to={"/user"}>Go to user page</Link>
      </div>
      </>
  );
}
