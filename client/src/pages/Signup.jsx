import { Button, Label, TextInput } from "flowbite-react"
import { Link } from "react-router-dom"


function Signup() {
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
             <form className="flex flex-col gap-4">
              <div>
                <Label>Your username</Label>
                <TextInput type="text" placeholder="username" id="username"></TextInput>
              </div>
              <div>
                <Label>Email</Label>
                <TextInput type="password" placeholder="eg. xyx@gmail.com" id="email"></TextInput>
              </div>
              <div>
                <Label>Password</Label>
                <TextInput type="text" placeholder="password" id="password"></TextInput>
              </div>
              <Button gradientDuoTone="pinkToOrange" type="submit">Sing Up</Button>
             </form>
             <div className=" flex gap-2 text-sm mt-3">
             <span>Allready have an account?<Link className="text-blue-500" to="/signIn">Sign In</Link></span>
             </div>
          </div>

        </div>
    </div>
  )
}

export default Signup