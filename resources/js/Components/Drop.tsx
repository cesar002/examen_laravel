import React from 'react'
import { Dropdown } from 'flowbite-react'

const Drop = () => {
    return (
        <>
        <Dropdown label="Dropdown button">
        <Dropdown.Item>
            Dashboard
        </Dropdown.Item>
        <Dropdown.Item>
            Settings
        </Dropdown.Item>
        <Dropdown.Item>
            Earnings
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
            Separated link
        </Dropdown.Item>
        </Dropdown>
        </>
    )
}

export default Drop
