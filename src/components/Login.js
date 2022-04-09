import GoogleLogin from 'react-google-login';
import axios from 'axios';

const Login=(props)=> {
    // const handleLogin = async googleData => {
    //   const res = await fetch("http://localhost:5000/api/v1/auth/google", {
    //       method: "POST",
    //       body: JSON.stringify({
    //       token: googleData.tokenId
    //     }),
      
    //   })
    //   const data = await res.json()
    //   console.log(data)
    //   // store returned user somehow
    // }
    const responseSuccessGoogle = (response)=>{
  console.log(response)
  axios({
    method:"POST",
    url: "http://localhost:5000/question/googlelogin",
    data:{tokenId: response.tokenId}
  }).then(response =>{
    console.log(response.tokenId)
   
  })
  console.log(response.tokenId)
  props.history.push('/Home')
    }
  
    const responseFailureGoogle = (response)=>{
      console.log("Failed")
        }
    // const getreq=async()=>{
    // const response = await fetch('/hello');
    // const body = await response.json();
    // console.log(body);
    // if (response.status !== 200) {
    //   throw Error(body.message) 
    // }
    // return body;
    // }
    return (
      <div className="App">
        <GoogleLogin
      clientId="1027687896552-vrfljq3h0uven2133rdrkv3h0efbqqnd.apps.googleusercontent.com"
      buttonText="Log in with Google"
      onSuccess={responseSuccessGoogle}
      onFailure={responseFailureGoogle}
      cookiePolicy={'single_host_origin'}
  />
  
      </div>
    );
  }
  
  export default Login;