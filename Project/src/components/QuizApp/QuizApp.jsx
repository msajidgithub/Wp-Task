import React, {useState, useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../../Quiz.css'
import TransitionsModal from '../QuizApp/Modal'
import {getUserData} from './QuizApicall'

function QuizApp() {
const [quizStatus, setQuizStatus] = useState(false)
const [userdata, setUserdata] = useState([])
const [userAns, setUserAns] = useState('')

useEffect(() => {
    ApiFunction()
}, [])

const ApiFunction = async () => {
  const apiCall = await getUserData();
  setUserdata(apiCall)
  console.log('api Call',userdata)


} 
    return (
        <div>
            <header>
            <h1 className="Logo">Quiz App</h1>
            <h1 className="userName">User Name </h1>
            
            </header>
             {!quizStatus ? <>
                {/* <TransitionsModal /> */}
                <button type="button" className="btnQuiz" onClick={()=>setQuizStatus(true)}>Start Quiz</button>
              </> :
             <section>
               {
                 userdata.map((val, i)=> {
                   return(
                     <>
                    <div className="questionCard" >
                    <p> <span>Q No.{i+1}: </span> {val.question}</p>
                  </div> 
                  <div className="givenAnswer" >
                  <ul>
<li>
<input className="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value={val.option1} 
onClick={(e)=>{
  setUserAns(e.target.value)
  console.log(userAns)
}}/>
<label className="form-check-label" htmlFor="inlineRadio1" >{val.option1}</label>
</li>
<li>
<input className="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value={val.option2}  onClick={(e)=>{
  setUserAns(e.target.value)
  console.log(userAns)
}}/>
<label className="form-check-label" htmlFor="inlineRadio1">{val.option2}</label>
</li>
<li>
<input className="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value={val.option3}  
onClick={(e)=>{
  setUserAns(e.target.value)
  console.log(userAns)
}}/>
<label className="form-check-label" htmlFor="inlineRadio1">{val.option3}</label>
</li>
<li>
<input className="form-check-input"  type="radio" name="inlineRadioOptions" id="inlineRadio1" value={val.option4} 
onClick={(e)=>{
  setUserAns(e.target.value)
  console.log(userAns)
}}/>
<label className="form-check-label" htmlFor="inlineRadio1">{val.option4}</label>
</li>
</ul>
             <div className="btnDiv">
             <button type="button" className="btnNext" onClick={()=>CheckAns}>Check</button>
             </div>
       
           </div>
                   
                   </>
                   )
                 })
               }
             
          
 
             </section>}           
            
        </div>
    )
}

export default QuizApp
