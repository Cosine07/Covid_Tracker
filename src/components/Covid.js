import React,{useEffect,useState} from 'react'
import './Covid.css'  
const Covid = () => {    
    const [data, setdata] = useState([]) 
    const getCovidData= async()=>{ 
        try{          
        const res = await fetch('https://data.covid19india.org/data.json');
        // console.log(res);
        const ActucalData= await res.json(); 
        console.log(ActucalData);          
        console.log(ActucalData.statewise);  
        console.log(ActucalData.statewise[0]);  
        setdata(ActucalData.statewise[0]); 
        }    
        catch(err){ 
            console.log(err)
        }    
    }      
    
    useEffect(() => {    
      getCovidData(); 
    },[]) 
     const date=new Date().toLocaleDateString(); 
     const time=new Date().toLocaleTimeString(); 
    
  return ( 
    <>  
        <section> 
        <h1>LIVE</h1>
        <h2 contentEditable="true">COVID-19 CORONA VIRUS TRACKER {date} {time} </h2>     
        <ul>
            <li className="card" > 
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>OUR</span> COUNTRY</p>
                        <p className="card__total card__small">INDIA </p>
                    </div>
                </div> 
            </li>
            <li className="card"> 
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> RECOVORED</p>
                        <p className="card__total card__small">{data.recovered} </p>
                    </div>
                </div>
            </li>  
            <li className="card"> 
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> CONFIRMED</p>
                        <p className="card__total card__small">{data.confirmed} </p>
                    </div>
                </div>
            </li>  
            <li className="card"> 
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> DEATHS</p>
                        <p className="card__total card__small">{data.deaths} </p>
                    </div>
                </div>
            </li>
            <li className="card"> 
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>TOTAL</span> ACTIVE</p>
                        <p className="card__total card__small">{data.active} </p>
                    </div>
                </div>
            </li>
            <li className="card"> 
                <div className="card__main">
                    <div className="card__inner">
                        <p className="card__name"><span>LAST</span> UPDATED</p>
                        <p className="card__total card__small">{data.lastupdatedtime} </p>
                    </div>
                </div>
            </li>
        </ul>
        </section> 
    </>
  )
}

export default Covid