import Image from 'next/image'
import Menu from '../../components/Menu/Menu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Comodal
      <Menu />
    </main>
  )
}
