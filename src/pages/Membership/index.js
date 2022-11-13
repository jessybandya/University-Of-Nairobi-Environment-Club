import React, { useState } from 'react'
import Footer from '../../components/Footer'
import HomeHeader from '../../components/HomeHeader'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../../components/firebase';

function Memberships() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [reg, setReg] = useState("")
  const [password, setPasword] = useState("");
  const [loading,setLoading] = useState(false)
  const history = useHistory()

  const register = (event) => {
    event.preventDefault();
    setLoading(true)
    let errors = {};


        if (!firstName.trim()) {
            setLoading(false)
            errors.firstName = toast.error('First name is required',{
              position: toast.POSITION.BOTTOM_CENTER
          });
          } else if (!/^[A-Za-z]+/.test(firstName.trim())) {
            setLoading(false)
              errors.firstName = toast.error('Enter a valid first name', {
                position: toast.POSITION.BOTTOM_CENTER
            });
          }else if(!lastName.trim()){
            setLoading(false)
            errors.lastName = toast.error('Last name is required', {
              position: toast.POSITION.BOTTOM_CENTER
          });
        } else if (!/^[A-Za-z]+/.test(lastName.trim())) {
            setLoading(false)
            errors.lastName = toast.error('Enter a valid last name', {
              position: toast.POSITION.BOTTOM_CENTER
          });
        }else  if(!email) {
        setLoading(false)
        errors.email = toast.error('School Email required', {
          position: toast.POSITION.BOTTOM_CENTER
      });
       }else if(!/\S+@[students]+\.[uonbi]+\.[ac]+\.[ke]+/.test(email)) {
        setLoading(false)
        errors.email = toast.error('Student Email address is invalid\nFormat (...@students.uonbi.ac.ke)', {
          position: toast.POSITION.BOTTOM_CENTER
      });
      }else if(!reg.trim()){
            setLoading(false)
            errors.reg = toast.error('Registration number is required', {
              position: toast.POSITION.BOTTOM_CENTER
          });
        }else if (!password) {
                setLoading(false)
             errors.password = toast.error('Password is required', {
              position: toast.POSITION.BOTTOM_CENTER
          });
          } else if (password.length < 8) {
            setLoading(false)
             errors.password = toast.error('Password needs to be 8 characters or more', {
              position: toast.POSITION.BOTTOM_CENTER
          });
          }else{


                        db.collection('users').where("email", "==", email).get().then((resultSnapShot) => {
        
                            // resultSnapShot is an array of docs where "email" === "user_mail"
                    
                            if (resultSnapShot.size == 0) {
                                //Proceed

                                  auth
                                  .createUserWithEmailAndPassword(email, password)
                                  .then((auth) => {
                                      if (auth.user) {
                                          auth.user.updateProfile({
                                              displayName: firstName,
                                              photoURL: "https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png"
                                          }).then((s) => {
                                              db.collection('users').doc(auth.user.uid).set({
                                                  uid: auth.user.uid,
                                                  firstName,
                                                  lastName,
                                                  phone,
                                                  registrationNumber: reg,
                                                  email: auth.user.email,
                                                  course,
                                                  photoURL: "https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png",
                                                  timestamp: Date.now()
                                              })
                                                  .then((r) => {
                                                      setLoading(false)
                                                      toast.success("Succesfully created an account.", {
                                                        position: toast.POSITION.BOTTOM_CENTER
                                                    })
                                                      history.push(`/`)
                                                      window.location.reload();
                                                  })
                                          })
                                      }
                                  })
                                  .catch((e) => {
                                          toast.error(e.message, {
                                            position: toast.POSITION.BOTTOM_CENTER
                                        })
                                          setLoading(false)
                                  });
                                 }              

                                //Already registered
                                setLoading(false)
                                toast.error("The email you enterd already in use!", {
                                  position: toast.POSITION.BOTTOM_CENTER
                              })                            
                    
                        })  
            
          }


    
};
  return (
    <div id='bg'>
              <div className="page-wraper">
        <div id="loading-icon-bx" />
        <HomeHeader />
        {/* Content */}
        <div className="page-content bg-white">
          {/* inner page banner */}
          <div  className="page-banner ovbl-dark" style={{backgroundImage: 'url(assets/images/back-green.jpg)'}}>
          <div className="container">
              <div className="page-banner-entry">
                <h1 className="text-white">Membership</h1>
              </div>
            </div>
          </div>
          {/* Breadcrumb row */}
          <div className="breadcrumb-row">
            <div className="container">
              <ul className="list-inline">
                <li><a href="#">Home</a></li>
                <li>Membership</li>
              </ul>
            </div>
          </div>
          {/* Breadcrumb row END */}
          {/* inner page banner END */}
          <div className="content-block">

            {/* Our Services ==== */}
            <div className="section-area section-sp2 bg-fix ovbl-dark join-bx">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center heading-bx text-white">
                    <h2 className="title-head m-b0">Why I Should Be a Member</h2>
                    <p className="m-b0">...</p>
                  </div>
                  <div className="col-md-6">	
                    <div className="why-chooses-bx ">
                      <div className="ttr-accordion m-b30 faq-bx" id="accordion1">
                        <div className="panel">
                          <div className="acod-head">
                            <h6 className="acod-title"> 
                              <a data-toggle="collapse" href="#faq1" className="collapsed" data-parent="#faq1">
                                Benefits of the club</a> </h6>
                          </div>
                          <div id="faq1" className="acod-body collapse">
                            <div className="acod-content">
                            <p className="m-b0">
                            Networking-Club activities gives you a chance to interact with potential employers,future partners/sponsors of your projects. Your network is your networth.

     <p>Ensures we are leave a better,safe and Green environment to the future generation.</p>

<p>Prepares you for the work environment.</p>

<p>Gives you a chance to give back to the community and contribute to nation building.</p>
                            </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">	
                  <form style={{backgroundColor:'#fff',padding:10}} className="contact-bx ajax-form" >
          <div className="ajax-message" />
          <div className="heading-bx left">
            <h2 className="title-head">Be a Member</h2>
          </div>
          <div className="row placeani">
          <div className="col-lg-6">
          <div className="form-group">
            <div className="input-group">
              <input placeholder='First Name'      onChange={(e) => {
                setFirstName(e.target.value);
            }}  type="text" required className="form-control valid-character" />
            </div>
          </div>
        </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group">
                  <input placeholder='Last Name'      onChange={(e) => {
                    setLastName(e.target.value);
                }}  type="text" required className="form-control valid-character" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group"> 
                  <input placeholder='Your School Email Address'
                  onChange={(e) => {
                    setemail(e.target.value);
                }}
                  type="email" className="form-control" required />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group">
                  <input placeholder='Phone No.'
                  onChange={(e) => {
                    setPhone(e.target.value);
                }}
                  type="text" required className="form-control int-value" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="input-group">
                  <input placeholder='Your Reg. No.'
                  onChange={(e) => {
                    setReg(e.target.value);
                }}
                  type="text" required className="form-control" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">

          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <div className="input-group">
                <input placeholder='Your Course'
                onChange={(e) => {
                  setCourse(e.target.value);
              }}
                type="text" required className="form-control" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <div className="input-group">
                <input placeholder='Set Password'
                onChange={(e) => {
                  setPasword(e.target.value);
              }}
                type="password" required className="form-control" />
              </div>
            </div>
          </div>

            <div className="col-lg-12">
              <button onClick={register} className="btn button-md">
              {loading === true ?(
                <>
                Joining us..... <CircularProgress size="2rem" color="inherit"/>
                </>
              ):(
                <>
                Join Us
                </>
              )}
              </button>
            </div>
          </div>
        </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact area END ==== */}

        </div>
        {/* Content END*/}
        {/* Footer ==== */}
       <Footer />
        {/* Footer END ==== */}
      </div>
      {/* External JavaScripts */}
    </div>
  )
}

export default Memberships