import _ from 'lodash'
import React, { FunctionComponent, useCallback, useEffect, useState } from 'react'

import { css } from '@emotion/react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

import { Box, ObjectList } from '../../core'
import ObjectListItem, { ObjectListItemProps } from '../ObjectList/ObjectListItem'

const onMoreClick = action('button onMoreClick')
const onItemClick = action('onItemClick')

export default {
  title: 'Core/ObjectList',
  decorators: [withKnobs],
  component: ObjectList,
}

export const SimpleObjectList: FunctionComponent = () => {
  const data: ObjectListItemProps[] = [
    {
      id: '1',
      title: 'Travaux purge maçonnerie',
      text: 'Date des travaux : Novembre 2019. Durée : 3 semaines.',
      onClick: onItemClick,
    },
    {
      id: '2',
      title: 'Intervention sur la porte d’entrée suite vandalisme',
      text: 'Réception des travaux le 14 sept. 2019.',
      onClick: onItemClick,
    },
    {
      id: '3',
      title: 'Transfert des colonnes montantes électriques à Enedis',
      text: 'Envoi du PV de l’AG à Enedis',
      onClick: onItemClick,
    },
  ]
  return (
    <Box margin="small">
      <ObjectList
        data={data}
        width={56}
        itemComponent={ObjectListItem}
        emptyComponent={ObjectListItem}
        loadingComponent={ObjectListItem}
      />
    </Box>
  )
}

export const ObjectListWithSmallHeader: FunctionComponent = () => {
  const data: ObjectListItemProps[] = [
    {
      id: '1',
      title: 'Travaux purge maçonnerie',
      text: 'Date des travaux : Novembre 2019. Durée : 3 semaines.',
      onClick: onItemClick,
    },
    {
      id: '2',
      title: 'Intervention sur la porte d’entrée suite vandalisme',
      text: 'Réception des travaux le 14 sept. 2019.',
      onClick: onItemClick,
    },
    {
      id: '3',
      title: 'Transfert des colonnes montantes électriques à Enedis',
      text: 'Envoi du PV de l’AG à Enedis',
      onClick: onItemClick,
    },
  ]
  return (
    <Box margin="small">
      <ObjectList
        header="Dossier"
        data={data}
        onClick={onMoreClick}
        buttonTitle="Afficher plus de dossiers"
        width={63.8}
        itemComponent={ObjectListItem}
        emptyComponent={ObjectListItem}
        loadingComponent={ObjectListItem}
      />
    </Box>
  )
}

export const LoadMoreObjectList: FunctionComponent = () => {
  const take = 10
  const [data, setData] = useState<ObjectListItemProps[]>([])

  const loadMore = useCallback(
    () =>
      setData([
        ...data,
        ..._.range(take).map((i) => ({
          id: (data.length + i).toString(),
          title: `Element ${data.length + i}`,
          text: 'Date des travaux : Novembre 2019. Durée : 3 semaines.',
          onClick: onItemClick,
        })),
      ]),
    [data],
  )

  useEffect(() => {
    if (data.length === 0) {
      loadMore()
    }
  }, [data.length, loadMore])

  return (
    <ObjectList
      css={css`
        overflow: auto;
        max-height: 200px !important;
      `}
      onLoadMore={() => loadMore()}
      data={data}
      width={56}
      itemComponent={ObjectListItem}
      emptyComponent={ObjectListItem}
      loadingComponent={ObjectListItem}
    />
  )
}
