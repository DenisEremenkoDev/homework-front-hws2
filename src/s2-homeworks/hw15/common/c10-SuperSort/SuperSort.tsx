import React from 'react'
import downIcon from './downIcon.svg'
import upIcon from './upIcon.svg'
import noneIcon from './noneIcon.svg'
import s from './SuperSort.module.css'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = ''
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '' ) return down
    if (sort ===down) return up
    if (sort ===up) return ''
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {sort === '' ? (
                <span className={s.neutral}>
                    <img src={noneIcon} alt="" />
                    <img src={noneIcon} alt="" />
                </span>
            ) : (
                <img
                    id={id + '-icon-' + sort}
                    src={icon}
                    className={s.icon}
                    alt=""
                />
            )}
        </span>
    )
}

export default SuperSort
