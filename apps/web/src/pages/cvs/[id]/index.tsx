import { getCVs, Cv, getCV } from '@profilur/database'
import { GetStaticPaths, GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = async () => {
  // get all cv ids from database
  const cvs = await getCVs()

  // create paths for each cv
  const paths = cvs.map((cv) => ({
    params: { id: cv.id.toString() },
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params.id as string
  const cv = await getCV(parseInt(id))

  return {
    props: { cv },
  }
}

export default function CVPage({ cv }: { cv: Cv }) {
  return <div>CV Title: {cv.title}</div>
}
