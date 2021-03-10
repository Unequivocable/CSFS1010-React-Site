import { useState } from 'react'

const ToggleContent = ({toggle, content}) => {
    const [ isOn, setIsOn ] = useState(false);
    const off = () => setIsOn(false);
    const on = () => setIsOn(true);

    return (
        <>
            {toggle(on)}
            {isOn && content(off)}
        </>
    )
}

export default ToggleContent