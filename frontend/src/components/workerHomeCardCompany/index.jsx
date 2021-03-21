import React, { useState } from "react";
import SelectedHireComp from "../selectedHireComp";
import "./index.css";
import { useEffect } from "react";
import Loader from '../../components/loader'
import axios from 'axios'


const WorkerHomeCardCompany = () => {


  let [allhires, setAllHires] = useState(null)


  let fetchAllData = async () => {
    let res = await axios.get('http://localhost:8080/api/v1/hire/all')
    if (res.data.res) {
      setAllHires(res.data.hires)
    } else {
      setAllHires([])
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  if (allhires == null) return <Loader />

  return (
    <div className="home-card">
      {allhires.slice(0, 20).map(ca => {
        return (
          <SelectedHireComp title={ca.title} />
        )
      })}
    </div>
  );
};

export default WorkerHomeCardCompany;
