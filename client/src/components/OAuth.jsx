import { AiFillGoogleCircle } from 'react-icons/ai'
import {Button} from 'flowbite-react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import {app} from '../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';  
import { useNavigate } from 'react-router-dom';  


function OAuth() {
    const negivate = useNavigate();
    const dispatch = useDispatch();
    const provider = new GoogleAuthProvider();
    const Auth = getAuth(app);
    const handleGoogleClick = async () => {
        provider.getCustomParameters({prompt: 'select_account'});

        try {
            const resultsFromGoogle = await signInWithPopup(Auth, provider);
            console.log(resultsFromGoogle);

            const res = await fetch('/api/auth/google',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({
                    name: resultsFromGoogle.user.displayName,
                    email: resultsFromGoogle.user.email,
                    photoURL: resultsFromGoogle.user.photoURL

                })
            });
            const data = await res.json();
            if(res.ok){
                dispatch(signInSuccess(data));
                negivate('/');
            }
            console.log(data);
        } catch (error) {
            console.error('Error occurred while signing in with google')
        }
    }
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
    </Button>
  )
}

export default OAuth