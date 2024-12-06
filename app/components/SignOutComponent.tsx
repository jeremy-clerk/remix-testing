import { SignOutButton } from '@clerk/remix';
import { useLocation } from '@remix-run/react';


export default function SignOutComponent(){
  const location = useLocation();
  return (
    <SignOutButton redirectUrl={location.pathname}>
      <button className={"p-2 bg-red-700 text-white"}>Sign Out</button>
    </SignOutButton>
  )
}