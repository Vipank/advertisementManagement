import classNames from 'classnames'
import React from 'react'
import Analytics from './Analytics/Analytics'
import styles from './Main.module.css'
function Main() {
    return (
        <div className={classNames("pd12",styles.mainCont)}>
            <Analytics/>
        </div>
    )
}

export default Main
