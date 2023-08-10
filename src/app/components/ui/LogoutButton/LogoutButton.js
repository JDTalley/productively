'use client'
import { signOut } from 'next-auth/react';

function LogoutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}

export default LogoutButton;
