import { getCVs } from '@profilur/database'
import { wrapper } from '@profilur/store'
import { databaseApiCvsSlice, useGetCvsQuery } from '@profilur/api'
import { Text } from '@profilur/web-ui'
import { CvListItem } from 'containers/CvListItem'

export default function CvsPage() {
  const { data: cvs } = useGetCvsQuery()

  return (
    <div>
      <Text type="h1" bottomMargin={'large'}>
        My CVs
      </Text>
      {cvs && cvs.map((cv) => <CvListItem key={cv.id} cv={cv} />)}
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    // get data from database via prisma client
    const cvs = await getCVs()

    // cache the date in RTK Query for future requests
    await store.dispatch(
      databaseApiCvsSlice.util.upsertQueryData('getCvs', undefined, cvs),
    )
    // Wait for all dispatches to finish
    await Promise.all(
      store.dispatch(databaseApiCvsSlice.util.getRunningQueriesThunk()),
    )
    // return nothing because clients will get data from RTK Query cache
    return null
  },
)
