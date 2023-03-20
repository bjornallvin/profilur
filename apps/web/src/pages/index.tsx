import { NextPage } from 'next'
import React from 'react'
import { Text } from '@profilur/web-ui'

const IndexPage: NextPage = () => {
  return (
    <>
      <Text type="h1" bottomMargin={'large'}>
        Profilur
      </Text>
      <Text bottomMargin="small">Manage CVs and generate powerpoint files</Text>
    </>
  )
}

export default IndexPage
