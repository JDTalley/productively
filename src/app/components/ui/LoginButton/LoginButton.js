'use client'
import { signIn } from 'next-auth/react';

function LoginButton() {
  return <button onClick={() => signIn()}>Sign In</button>;
}

export default LoginButton;
