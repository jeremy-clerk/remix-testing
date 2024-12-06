import { useUser } from '@clerk/remix'
import { Link } from '@remix-run/react';

export default function UserPage() {
  const { isLoaded, isSignedIn, user } = useUser()

  if (!isLoaded) {
    return <p>Loading...</p>
  }



  return <div className={"flex flex-col gap-2"}>
    {isSignedIn && `Hello, ${user.firstName}!`}
    {isLoaded && !isSignedIn && 'Not signed in.'}
    <Link to={"/dashboard"} >Go to dashboard</Link>
  </div>
}