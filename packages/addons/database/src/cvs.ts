import { PrismaClient } from '@prisma/client'

export const getCVs = async () => {
  console.log('getting cvs via prisma')
  const client = new PrismaClient()
  const cvs = await client.cv.findMany({
    include: {
      user: true,
    },
  })
  return cvs
}

export const getCV = async (id: number) => {
  console.log('getting cv via prisma')
  const client = new PrismaClient()
  const cv = await client.cv.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
    },
  })
  return cv
}
