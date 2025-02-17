import { lazy, Suspense } from 'react'
import Loading from '../components/loading'
import { delayForDemo } from '../utils';

const  Today = lazy(() => delayForDemo(import('../components/today')));


export default async function HomePage() {
  return (
    <div className='chart-container'>
      <Suspense fallback={<Loading />}>
        <Today icon='up' />
      </Suspense>
    </div>
  )
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  }

  return data
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
