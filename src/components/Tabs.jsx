import React, {useState} from 'react'

const Tabs = props => {
    // declare your states
    const [idx, setIdx] = useState(0)
    // declare your props
    const {tabs} = props
    console.log(tabs)
    // declare all your handler functions and other functions
    const handleClick = (i) => {
        console.log(`click happened${i}`)
        setIdx(i)
    }
    // return your HTML
    return (
        <div>
            {
                tabs.map((tab, i) => {
                    return <button onClick={ () => handleClick(i)} key={i}>{tab.title}</button>
                })
            }
            <div>
                <h1>{tabs[idx].content}</h1>
            </div>
        </div>
    )
}

export default Tabs