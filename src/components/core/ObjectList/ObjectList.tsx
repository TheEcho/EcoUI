import { SerializedStyles } from '@emotion/react'
import { groupBy, mapValues, omit } from 'lodash'
import { createElement, FunctionComponent, ReactNode, useEffect, useRef } from 'react'
import { ITheme } from '@/index'

import { TColor } from '../../../shared/tokens/color'
import { useIntersectionObserver } from '../../../utils/_hooks/useIntersectionObserver'
import { usePrevious } from '../../../utils/_hooks/usePrevious'
import { CardProps } from '../Card'
import { ObjectListHeader } from './Header'
import { LoadMore } from './LoadMore'
import { StickyHeaderWrapper, StyledObjectList } from './ObjectList.styled'

export type ObjectListProps = {
  /**
   * Header's title
   */
  header?: string | ReactNode
  /**
   * Callback when onClick to load more results
   */
  onClick?: () => void
  /**
   * Text to display inside the button to load more results
   */
  buttonTitle?: string
  /**
   * Boolean who tell if the button is a link
   */
  buttonIsLink?: boolean
  /**
   * List of object list items (data)
   */
  data?: any[]
  /**
   * Object key on which we group data
   */
  groupKey?: string
  /**
   *
   */
  groupBackgroundColour?: TColor
  /**
   * Custom Insde the object list
   */
  children?: ReactNode
  /**
   * Custom text under the Item but in the same row
   */
  subText?: ReactNode
  /**
   * Custom Header on top of the ObjectList
   */
  prefixElement?: ReactNode
  /**
   *
   */
  prefixElements?: any[]
  /**
   *
   */
  suffixElement?: ReactNode
  /**
   *
   */
  itemComponent?: any
  /**
   *
   */
  width?: number
  /**
   *
   */
  loading?: boolean
  /**
   *
   */
  loadingComponent?: any
  /**
   *
   */
  emptyComponent?: any
  /**
   * Use this method to enable infinite scroll
   */
  onLoadMore?: () => void
  css?: (theme: ITheme) => SerializedStyles
} & Omit<CardProps, 'header'>

const StickyHeader: FunctionComponent<{ text: string; backgroundColour?: TColor }> = ({
  text,
  backgroundColour = 'background',
}) => (
  <StickyHeaderWrapper
    align="center"
    justify="center"
    flex={false}
    paddingVertical="small"
    background={backgroundColour}
  >
    {text}
  </StickyHeaderWrapper>
)

export const ObjectList: FunctionComponent<ObjectListProps> = ({
  data = [],
  header,
  onClick,
  onLoadMore,
  buttonTitle = 'Charger plus',
  children,
  prefixElement,
  prefixElements,
  itemComponent,
  loading,
  loadingComponent,
  emptyComponent,
  suffixElement,
  hideCardStyle = false,
  buttonIsLink,
  groupKey,
  groupBackgroundColour,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const needLoadMore = !!entry?.isIntersecting
  const previousNeedLoadMore = usePrevious(needLoadMore)

  useEffect(() => {
    if (!!onLoadMore) {
      if (needLoadMore != previousNeedLoadMore && needLoadMore) {
        onLoadMore()
      }
    }
  }, [needLoadMore, onLoadMore, previousNeedLoadMore])

  const displayHeader = !!header
  const displayPrefixElement = !!prefixElement
  const displaySuffixElement = !!suffixElement
  const displayLoadMore = !!buttonTitle && !!onClick
  const displaySuffixElements = !!prefixElements?.length

  const shouldDisplayLoading = loading && data.length === 0
  const shouldDisplayShowMore = onClick && data.length > 0 && !loading

  let displayItems = null

  if (!shouldDisplayLoading) {
    if (children) {
      displayItems = children
    } else {
      const hasId = data.find((item) => item.id)

      if (!hasId) {
        console.warn(
          '[BELLMAN]: You should have an ID attribute on the data object otherwise some side effect can happend (e.g: CRUD operations)',
        )
      }

      if (!!groupKey) {
        const nestedData = mapValues(groupBy(data, groupKey), (clist) =>
          clist.map((d) => omit(d, groupKey)),
        )

        displayItems = []
        for (const d in nestedData) {
          const stickyHeader = createElement(StickyHeader, {
            text: d,
            backgroundColour: groupBackgroundColour,
          })
          const subItems = nestedData[d].map((item: any) =>
            createElement(itemComponent, { ...item, key: item.id }),
          )

          displayItems.push(...[stickyHeader, ...subItems])
        }
      } else {
        displayItems = data.map((item: any) =>
          createElement(itemComponent, { ...item, key: item.id }),
        )
      }
    }

    if (!data.length) {
      displayItems = createElement(emptyComponent)
    }
  }

  return (
    <StyledObjectList
      direction="column"
      {...rest}
      padding="none"
      displayHeader={displayHeader}
      displayLoadMore={displayLoadMore}
      displayPrefixElement={displayPrefixElement}
      displaySuffixElements={displaySuffixElements}
      hideCardStyle={hideCardStyle}
    >
      {header && (typeof header === 'string' ? <ObjectListHeader header={header} /> : header)}
      {displayPrefixElement && prefixElement}
      {displaySuffixElements &&
        prefixElements?.map((element, index) => {
          return typeof element === 'function'
            ? createElement(element, { key: index })
            : element
        })}

      {!shouldDisplayLoading && !!data && displayItems}
      {!!onLoadMore && <div ref={ref}></div>}
      {!shouldDisplayLoading && !data && createElement(emptyComponent)}
      {shouldDisplayLoading && createElement(loadingComponent)}

      {displaySuffixElement && suffixElement}

      {shouldDisplayShowMore && (
        <LoadMore onClick={onClick} buttonTitle={buttonTitle} buttonIsLink={buttonIsLink} />
      )}
    </StyledObjectList>
  )
}

export default ObjectList
