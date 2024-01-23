import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react"
import { HiInformationCircle } from 'react-icons/hi';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"




function Signup() {
  const [formData , setformData] = useState({});
  const [errorMessage , seterrorMessage] = useState(null);
  const [loading , setloading] = useState(false);

  const navigate = useNavigate();
  const handleEvent = (e) => {
    setformData({...formData,[e.target.id]:e.target.value.trim()});
  }
  const HandleSubmit = async (e) => {
    setloading(true);
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      seterrorMessage('Please fill all the fields');
      return;
    }
    console.log(formData);
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        return seterrorMessage(data.message);            //2;17;09
      }
      console.log(data);
      setloading(false);
      
      
      if(res.ok) { navigate('/signin');}
      
    }
    catch (error) {
      seterrorMessage(error.message);
      setloading(false);
    }
  }
  return (
    <div className="min-h-screen mt-20">
        <div className=" gap-5 flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center">
          {/* left div */}
          <div className="flex-1">
          <Link className=' whitespace-nowrap  font-semibold dark:text-white text-4xl
          '>
                <span className='px-2 py-1 bg-gradient-to-r from-blue-500 to-orange-500
          rounded-lg text-white'>Cricket</span>
                Blogs
            </Link >
            <p className="text-sm mt-5">This is the demo prject , Here You can signup via your email && password or via google.</p>
          </div>
          {/* right div */}
          <div className="flex-1">
             <form  className="flex flex-col gap-4" onSubmit={HandleSubmit}>
              <div>
                <Label>Your username</Label>
                <TextInput autoComplete="" type="text" placeholder="username" id="username" onChange={handleEvent}></TextInput>
              </div>
              <div>
                <Label>Email</Label>
                <TextInput autoComplete="" type="email" placeholder="eg. xyx@gmail.com" id="email" onChange={handleEvent}></TextInput>
              </div>
              <div>
                <Label>Password</Label>
                <TextInput autoComplete="" type="password" placeholder="password" id="password" onChange={handleEvent}></TextInput>
              </div>
              <Button gradientDuoTone="pinkToOrange" type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <Spinner className="mr-2" size="sm" color="white" />
                    <span className="pl-3">loading...</span>
                  </>
                ) : ' Sing Up'}
               </Button>
             </form>
             <div className=" flex gap-2 text-sm mt-3">
             <span>Allready have an account?<Link className="text-blue-500" to="/signIn">Sign In</Link></span>
             </div>
              {errorMessage && ( <Alert className="mt-5" color="failure" icon={HiInformationCircle}>
                 <span className="font-medium">Info alert!</span> {errorMessage}
               </Alert>)
              }          
          </div>

        </div>
    </div>
  )
}

export default Signup