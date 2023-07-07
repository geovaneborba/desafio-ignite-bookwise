import Image from 'next/image'
import googleIcon from '../assets/google-icon.svg'
import githubIcon from '../assets/github-fill.svg'
import rocketIcon from '../assets/rocket-launch.svg'
import backgroundImg from '../assets/background.png'
import Head from 'next/head'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useCallback } from 'react'
import {
  SignInContainer,
  SignInPageContainer,
  SocialLogin,
} from '@/components/SignIn/styles'

export default function SignInPage() {
  const handleSignIn = useCallback(async (provider: string) => {
    await signIn(provider, { callbackUrl: '/' })
  }, [])

  return (
    <SignInPageContainer>
      <Head>
        <title>Login | Book Wise</title>
      </Head>
      <SignInContainer>
        <Image
          src={backgroundImg}
          alt=""
          width={598}
          height={912}
          priority
          quality={100}
          sizes="(min-width: 768px) 100vw"
        />

        <SocialLogin>
          <h2>Boas Vindas!</h2>
          <h3>Faça seu login ou acesse como visitante.</h3>

          <button onClick={async () => await handleSignIn('google')}>
            <Image src={googleIcon} height={32} width={32} alt="" />
            Entrar com Google
          </button>
          <button onClick={async () => await handleSignIn('github')}>
            <Image src={githubIcon} height={32} width={32} alt="" />
            Entrar com GitHub
          </button>
          <button>
            <Link href="/">
              <Image src={rocketIcon} height={32} width={32} alt="" />
              Acessar como visitante
            </Link>
          </button>
        </SocialLogin>
      </SignInContainer>
    </SignInPageContainer>
  )
}
