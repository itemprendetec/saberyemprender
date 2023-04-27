import React, { useState } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import initFirebase from '../config';
import { setUserCookie } from '@/auth/userCookie';
import { mapUserData } from '@/auth/useUser';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

initFirebase()

const firebaseAuthConfig = ({ signInSuccessUrl }) => ({
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: false
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  signInSuccessUrl,
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: async ({ user }, redirectUrl) => {
      const userData = await mapUserData(user);
      setUserCookie(userData);
    }
  }
});


export default function Home() {

  const [userRedirect, setUserRedirect] = useState(false);
  const signInSuccessUrl = "/"
  return (
    <>
      <Login>
        <StyledFirebaseAuth
          uiConfig={firebaseAuthConfig({ signInSuccessUrl })}
          firebaseAuth={firebase.auth()}
          signInSuccessUrl={signInSuccessUrl}
        />
      </Login>
      {/* {!userRedirect ? <Login /> : <>
        <h1>Si hay un usuario</h1>
      </>} */}
    </>
  )
}
