import React, { FunctionComponent } from 'react'

import { withKnobs } from '@storybook/addon-knobs'

import { Box, Link, Text } from '../../core'
import { Breadcrumb } from './Breadcrumb'
import { data } from './Breadcrumb.data'

export default {
  title: 'Core/Breadcrumb',
  decorators: [withKnobs],
  component: Breadcrumb,
}

export const All: FunctionComponent = () => {
  return (
    <Box margin="medium" direction="column" gap="small" width={20}>
      <Breadcrumb links={data} />
      <Breadcrumb
        back={() => {
          console.log('back')
        }}
      >
        {data.map((link, index) => {
          return link.href ? (
            <Link key={index} href={link.href} color="secondary-dark">
              {link.title}
            </Link>
          ) : (
            <Text key={index} ellipsis>
              {link.title}
            </Text>
          )
        })}
      </Breadcrumb>
    </Box>
  )
}

export const Default: FunctionComponent = () => (
  <Box margin="medium">
    <Breadcrumb links={data} />
  </Box>
)

export const WithBack: FunctionComponent = () => (
  <Box margin="medium">
    <Breadcrumb
      links={data}
      back={() => {
        console.log('back')
      }}
    />
  </Box>
)
