import { Cv } from '@profilur/database'
import Link from 'next/link'
import { Text } from '@profilur/web-ui'

export const CvListItem = ({ cv }: { cv: Cv }) => {
  return (
    <div>
      <Link href={`/cvs/${cv.id}`}>
        <a>
          <Text type="h2">{cv.title}</Text>
        </a>
      </Link>
    </div>
  )
}
