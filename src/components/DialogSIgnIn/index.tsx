import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import googleIcon from '../../assets/google-icon.svg'
import githubIcon from '../../assets/github-fill.svg'
import { X } from 'phosphor-react'
import { Trigger, Overlay, Content } from './styles'

interface DialogSignInProps {
  handleOpenAddNewRating: () => void
  handleSignIn: (provider: string) => Promise<void>
}

export function DialogSignIn({
  handleOpenAddNewRating,
  handleSignIn,
}: DialogSignInProps) {
  return (
    <Dialog.Root>
      <Trigger onClick={handleOpenAddNewRating}>Avaliar</Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Close>
            <X size={24} />
          </Dialog.Close>

          <div>
            <h2>Faça login para deixar sua avaliação</h2>

            <div>
              <button
                onClick={async () => {
                  await handleSignIn('google')
                }}
              >
                <Image src={googleIcon} height={32} width={32} alt="" />
                Entrar com Google
              </button>

              <button
                onClick={async () => {
                  await handleSignIn('github')
                }}
              >
                <Image src={githubIcon} height={32} width={32} alt="" />
                Entrar com GitHub
              </button>
            </div>
          </div>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
