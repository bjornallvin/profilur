import { Button } from '@profilur/web-ui'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export function NavBar() {
  const { data } = useSession()
  const user = data?.user
  if (!user) return null
  return (
    <div
      className={
        'border border-slate-700 bg-slate-100 dark:bg-slate-800 p-4 flex justify-between items-center'
      }
    >
      <div className={'text-slate-200 text-lg '}>
        {}
        <Link href="/cvs">
          <a className={' mx-3'}>My CVs</a>
        </Link>
        <Link href="/cvs">
          <a className={'mx-3'}>Create new CV</a>
        </Link>

        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
      <div className={' flex justify-end items-center'}>
        <div className={'text-right pr-5 text-slate-700 dark:text-slate-200'}>
          <div className={'font-bold'}>{user.name}</div>
          <div>{user.email} </div>
        </div>
        <img className={'rounded-full h-16'} src={user.image} />
      </div>
    </div>
  )
}
