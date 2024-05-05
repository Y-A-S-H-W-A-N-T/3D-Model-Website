import Model from "@/components/Model";
import styles from "@/styles/model.module.css";
import { useState } from "react";

export default function Home() {

  const [selected,setSelected] = useState('-1')
  const [description,setDescription] = useState('')


  return (
    <div>
      <div className={styles.start}>
          <div className={styles.intro}>
            <h1 className={styles.text}>My models</h1>
          </div>
      </div>
      <div className={styles.model_structure}>
          <div className={styles.model_names}>
            <h1 className={styles.name} style={{backgroundColor: selected==='0'? 'red': 'white'}} onClick={()=>setSelected('0')}>Car</h1>
          </div>
          <div className={styles.model_names}>
            <h1 className={styles.name} style={{backgroundColor: selected==='1'? 'red': 'white'}} onClick={()=>setSelected('1')}>Katana</h1>
          </div>
          <div className={styles.model_names}>
            <h1 className={styles.name} style={{backgroundColor: selected==='2'? 'red': 'white'}} onClick={()=>setSelected('2')}>MCqueen</h1>
          </div>
          <div className={styles.model_names}>
            <h1 className={styles.name} style={{backgroundColor: selected==='3'? 'red': 'white'}} onClick={()=>setSelected('3')}>Bench</h1>
          </div>
      </div>
      <div className="3-D-Model">
          <Model selected={selected}/>
      </div>
    </div>
  );
}
