import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { CopyBlock,dracula,atomOneDark,solarizedDark,tomorrowNight,tomorrowNightEighties } from "react-code-blocks";

const code =
  `{
    "scheduleType": "week",
    "days": [
      {
        "day": "March 27, 2023",
        "bell": {
          "scheduleType": "regular",
          "scheduleName": "Regular Schedule",
          "schedule": [...]
        },
        "block": "B1",
        "testing": "Science Testing",
        "announcement": null
      },
      ...
    ]
  }`

const schedulecode = 
`[
  {
    "name": "Before Period 1",
    "startTime": "7:00",
    "duration": 60
  },
  {
    "name": "Period 1",
    "startTime": "8:00",
    "duration": 41
  },
  {
    "name": "Before Period 2",
    "startTime": "8:41",
    "duration": 4
  }
]`

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stuy Schedule API</title>
        <meta name="description" content="API for Stuy Schedule app" />
        <link rel="icon" href="/dark-144.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Stuy Schedule <a>API</a>
        </h1>

        <p className={styles.description}>
          Weekly schedule API located at{' '}
          <code className={styles.code}>/api/weekly-schedule</code>
        </p>

        <h2 className={styles.subtitle}>
          API data format
        </h2>

        <div className={styles.codewrapper}>
          <br></br>
          <CopyBlock
          text={code}
          language='java'
          // showLineNumbers='true'
          wrapLines
          theme={tomorrowNight}
          />
        </div>

        <h2 className={styles.subtitle}>
          <br></br>
          Schedule format
        </h2>

        <div className={styles.codewrapper}>
          <br></br>
          <CopyBlock
            text={schedulecode}
            language='java'
            // showLineNumbers='true'
            wrapLines
            theme={tomorrowNight}
            />
        </div>

        <p className={styles.description}>
          Note: <code className={styles.code}>&quot;bell&quot;</code>, 
          <code className={styles.code}>&quot;block&quot;</code>, and 
          <code className={styles.code}>&quot;announcements&quot;</code> may be <code className={styles.code}>null</code>,<br></br>
          indicating no school, or no announcement
        </p>


      </main>
    </div>
  )
}
