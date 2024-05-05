import React, { useEffect, useState } from 'react'
import styles from "@/styles/model.module.css"
import Loading from '../public/load.gif'
import Image from 'next/image';

function Model({ selected }) {

  const models = [
    {
      name: 'Car',
      description: 'Lightning mcqueen from the animation movie cars. Cartoon style mcqueen model.',
      link: 'https://sketchfab.com/models/d33f4bc9343144e3886c7759eba1ee97/embed'
    },
    {
      name: 'katana',
      description: 'Lightning mcqueen from the animation movie cars. Cartoon style mcqueen model.',
      link: 'https://sketchfab.com/models/f8bc73eaab7d4bf786c8b921220d8e74/embed'
    },
    {
      name: 'MCqueen',
      description: 'Lightning mcqueen from the animation movie cars. Cartoon style mcqueen model.',
      link: 'https://sketchfab.com/models/d452d8f303c94352a42465ae0e7c7fa3/embed'
    },
    {
      name: 'Bench',
      description: 'Lightning mcqueen from the animation movie cars. Cartoon style mcqueen model.',
      link: 'https://sketchfab.com/models/28ddd635699d44f6947d907d02061394/embed'
    }
  ]

  const [model3D,setModel3D] = useState(null)
  const [loadinScreen,setLoadingScreen] = useState(true)

  useEffect(()=>{
    console.log(selected)
    if (selected!=='-1')
    {
      setModel3D(models[selected].link)
      setLoadingScreen(false)
    }
    else
      setLoadingScreen(true)
  },[selected])

  return (
    <div>
        { loadinScreen &&
          <div className={styles.loading}>
              <Image
                className={styles.model}
                src={Loading}
                alt="Loading"
                width={500}
                height={500}
              />
              <p style={{fontFamily: 'cursive', marginLeft: '30%', marginTop: '-50px'}}>Select a 3D Model</p>
          </div>
        }
        <div className={styles.box}>
            <div className={styles.model}> <iframe title="Lightning MCqueen" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src={model3D} style={{height: '400px',width: '500px', borderRadius: '20px'}}> </iframe></div>
        </div>
    </div>
  )
}

export default Model