import React, {useState} from 'react'
import Affairs from './Affairs'

export type AffairPriorityType = 'high' | 'middle' | 'low'
export type AffairType = {
    readonly _id: number,
    name: string,
    priority: string
}
export type FilterType = 'all' | AffairPriorityType

const defaultAffairs: AffairType[] = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] | [] => {
//     if (filter === 'all') return affairs
//     else if (filter === 'high') return affairs.filter((filteredAffairs: AffairType) => filteredAffairs.priority === 'high')
//     else if (filter === 'middle') return affairs.filter((filteredAffairs: AffairType) => filteredAffairs.priority === 'middle')
//     else if (filter === 'low') return affairs.filter((filteredAffairs: AffairType) => filteredAffairs.priority === 'low')
//     return []
// }

// export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] | [] =>
//     filter === 'all' && affairs
//     || affairs.filter((filteredAffairs: AffairType) => filteredAffairs.priority === filter)
//     || []

export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] | [] =>
    filter === 'all'
        ? affairs
        : affairs.filter((filteredAffairs: AffairType) => filteredAffairs.priority === filter) || []

export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] | [] => {
    return affairs.filter((filteredAffairs: AffairType) => filteredAffairs._id !== _id)
}

function HW2() {

    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))
    return (
        <div>
            <hr/>
            homeworks 2
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            <hr/>
        </div>
    )
}

export default HW2
