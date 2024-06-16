import React from 'react'
import type { PropsWithChildren } from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string
}>


function Icons({ name }: IconsProps) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={45} color={'#f7cd2e'}></Icon>
            break;

        case 'cross':
            return <Icon name="times" size={45} color={'#38cc77'}></Icon>
            break;

        default:
            return <Icon name="minus" size={16} color={'#C40C0C'}></Icon>
            break;
    }
}

export default Icons