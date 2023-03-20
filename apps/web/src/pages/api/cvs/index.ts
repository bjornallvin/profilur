import { getCVs } from '@profilur/database'

export default async function handler(req, res) {
  const cvs = await getCVs()

  res.status(200).json(cvs)
}
