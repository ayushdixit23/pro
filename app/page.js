import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/Main'),
  { ssr: false }
)


export default function Home() {
  return (
    <>
      <DynamicComponentWithNoSSR />
    </>
  )
}
