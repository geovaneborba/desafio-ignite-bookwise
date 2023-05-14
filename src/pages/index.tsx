import Image from 'next/image'

import backgroundImg from '../assets/background.png'

export default function Home() {
  return (
    <div className="grid grid-cols-2 p-5 bg-gray-800">
      <Image
        src={backgroundImg}
        alt=""
        width={598}
        height={912}
        priority
        quality={100}
      />
      <div>
        <div>
          <h2>Boas Vindas!</h2>
          <h3>Faça seu login ou acesse como visitante.</h3>

          <button>Entrar com Google</button>
          <button>Entrar com Google</button>
          <button>Entrar com Google</button>
        </div>
      </div>
    </div>
  )
}
