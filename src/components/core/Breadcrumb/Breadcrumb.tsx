import { FunctionComponent, PropsWithChildren, ReactNode } from 'react'

import { Box, Link, Text } from '@/index'

import { TColor } from '../../../shared/tokens/color'
import { StyledBreadcrumbContainer } from './Breadcrumb.styled'

export type BreadcrumbLink = {
  title: string
  href?: string
}

type BreadcrumbProps = PropsWithChildren<{
  back?: ReactNode | (() => void)
  links?: BreadcrumbLink[]
}>

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
  links,
  children,
  back = undefined,
}) => {
  const isLastLink = (index: number): boolean => {
    return index + 1 === links?.length
  }

  const linkProps = (link: BreadcrumbLink, index: number): { color: TColor; href?: string } =>
    isLastLink(index)
      ? {
          color: 'text',
          href: undefined,
        }
      : {
          color: 'secondary-dark',
          href: link.href,
        }

  return (
    <Box direction="row" gap="small">
      {typeof back === 'function' ? (
        <Box onClick={() => back()} flex={false} gap="small" direction="row">
          <Link color="secondary-dark">Retour</Link>
          <Text>|</Text>
        </Box>
      ) : (
        back
      )}
      <StyledBreadcrumbContainer direction="row">
        {links
          ? links.map((link, index: number) => (
              <Box key={index} flex={false} gap="small" direction="row">
                <Link key={index} {...linkProps(link, index)}>
                  {link.title}
                </Link>
              </Box>
            ))
          : children}
      </StyledBreadcrumbContainer>
    </Box>
  )
}
