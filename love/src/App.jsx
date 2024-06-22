import { useEffect, useState ,formRef } from 'react'
import './App.css'
import heart from './assets/heart.png'
import emailJs from "@emailjs/browser"
function App() {
  const [percentage ,setPercentage] = useState()
  const [mail,setMail] = useState({nameone:'',nametwo:'',percent:''})
  const [message,setMessage] = useState("");
  let love = ["Indifferent😒","Casual👍","Amiable😁","Fondness⭐","Affection😢","Adorable🤦‍♂️","Passionate🤞","Devotion👌","infatuation😊","Consuming❤️"]

  window.oncontextmenu = function(){
    alert("Right click Disabled")
    return false;
  }

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setMail({...mail,[name]:value})
  }
  const calculate = (e) =>{
    
    e.preventDefault();
    let x = Math.round(Math.random()*100)
    setPercentage(x)
    setMail({...mail,percent:x})
    console.log(mail)

    emailJs.send('service_atfid0j','template_aqyvgu5',{
      first_name : mail.nameone,
      to_name: mail.nametwo,
      from_email: 'ggwo@gmail.com',
      to_email : 'thaparohan2019@gmail.com',
      message: mail.nameone +" - "+ mail.nametwo + " -" + mail.percent+"%",
    },'ne4VAMeqc9TlX6qtv').then(()=>{
    },(error)=>{
      console.log(error);
      alert("Something went wrong")
    })
    
    
  }
  useEffect(()=>{
    console.log(percentage,message)
    setMessage(love[Math.ceil(percentage/10)-1]);

  },[percentage])
  
  
  return (
    <>
      <section className="w-full h-screen bg-red-100">
      <form ref={formRef} onSubmit={calculate} >

        <div className="container h-fit w-[60%] bg-red-300 m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl ">
            <div >
                <h1 className="text-xl text-center py-5 font-bold text-red-700">Love Calculator</h1>
                <p className='text-center text-grey-300 pb-5'>Try once before the Rejection!</p>
                <div className="flex justify-between ">

                    <div className="input1 m-2 w-[45%] ">
                        <input id="input1" name='nameone' value={mail.nameone} onChange={handleChange} type="text" placeholder="Your Name" className="w-[100%] h-12  rounded-2xl outline-0 p-5" />
                    </div>
                    <div className="image h-20 w-[10%]">
                        <img src={heart} alt="heart" height="40px" className=""/>
                    </div>
                    <div className="input2 m-2 w-[45%]">
                        <input id="input2" name='nametwo' value={mail.nametwo}  onChange={handleChange}  type="text" placeholder="Your Partner Name"  className="w-[100%] h-12  rounded-2xl outline-0 p-5"/>
                    </div>
                </div>
            </div>
            <div className="output text-center font-extrabold text-red-950 text-xl">{mail.nameone != "" && mail.nametwo != "" ? percentage ? percentage+"%"+message : ""     : "Enter Name"}</div>
            <div className="calculate flex justify-center pb-5">
                <button className=" bg-red-600 text-white rounded-xl w-28 h-8 mt-4 " type='submit'>Calculate</button>
            </div>
        </div>
        </form>
    </section>
    </>
  )
}

export default App
