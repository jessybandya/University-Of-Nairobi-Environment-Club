import React from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { Modal,Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { updateAuthId } from '../../redux/dataSlice';


function HomeHeader() {
  const [modalShow, setModalShow] = React.useState(false);
  const history = useHistory()
  const authId = useSelector((state) => state.authId);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user){
        const idTokenResult = await user.getIdTokenResult()
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: {
            email: user.email,
            token: idTokenResult.token,
            
          }
        })
        dispatch(updateAuthId(user?.uid))

      }
    })
    return () => unsubscribe()
  }, [])
 console.log("UID: ",authId)
  const logout = () => {
    auth.signOut();
    history.push(`/`)
    dispatch(updateAuthId(''))
    window.location.reload();
}
  return (
    <div className='header rs-nav header-transparent'>

          <header  id="header" role="banner" className="header-container clearfix">
            <div className="container">
              <div id="header-inside" className="clearfix">
                <div className="row">
                  <div className="col-md-4">
                    <div id="header-inside-left" className="clearfix">
                      <div className="region region-header">
                        <div id="block-scholarly-branding" className="clearfix site-branding block block-system block-system-branding-block">
                          <div className="logo">
                            <a href="/" title="Home" rel="home" className="site-branding__logo">
                              <img src="assets/images/logoU.jpg" alt="Home" style={{height:50}}/>
                            </a>
                          </div>
                          <div className="site-name site-branding__name">
                            <a href="/"  title="Home" rel="home">ENVIRONMENTAL CLUB</a>
                          </div>
                          <center  className="site-slogan site-branding__slogan headerAll" href="/"  title="Home" rel="home">Of</center>
                          <div className="site-slogan site-branding__slogan">UNIVERSITY OF NAIROBI</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div id="header-inside-right" className="clearfix">
                      <div id="main-navigation" className="clearfix">
                        <nav role="navigation">
                          <div className="region region-navigation">
                            <div id="block-mainnavigation-2" className="block block-superfish block-superfishmain">
                              <div className="content">
                                <ul id="superfish-main" className="menu sf-menu sf-main sf-horizontal sf-style-none">


                                  <li id="main-menu-link-content6488ddf2-9760-46e4-b1f7-cb662d241199" className="sf-depth-1 menuparent">
                                  <a style={{cursor:'pointer'}} className="sf-depth-1 menuparent">About</a>
                                  <ul>
                                  <li id="main-menu-link-content6f75c0c6-ba70-4649-a49f-115c6d8e0201" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">Our Vision</a>
                                  </li>
                                  <li id="main-menu-link-content950fbc7d-245e-4233-80d1-4908049b836e" className="sf-depth-2 sf-no-children">
                                  <a href="#" style={{color:"#fff"}} className="sf-depth-2">FAQs</a>
                                  </li>


                                  </ul>
                                  </li>
                                  <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} href="/events" className="sf-depth-1">Events</a>
                                              </li>
                                              <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} className="sf-depth-1">Projects</a>
                                              </li>
                                            <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} className="sf-depth-1">Gallery</a>
                                              </li>

                                            <li id="main-menu-link-content784c95b2-9d72-4bbd-a918-f0bb1df66a70" className="sf-depth-1 sf-no-children">
                                              <a style={{cursor:'pointer'}} href='/contact-us' className="sf-depth-1">Contact Us</a>
                                              </li>
                                              {!authId &&(
                                                <li id="main-menu-link-content84672266-e2a4-41b4-8245-9b41eb829c92" className="sf-depth-1 sf-no-children">
                                                <a  style={{cursor:'pointer'}} href="/signIn" title="News" className="sf-depth-1 ">Sign In</a>
                                                </li>
                                              )}
                                              <li id="main-menu-link-content4736c30b-bfca-4f45-8637-55c5f3a8e8ff" className="sf-depth-1 menuparent">
                                              {authId ?(
                                                <>
                                                {authId === "0GtXlZs2EzdHA0Lhb7epu62CSoD3" ?(
                                                  <a style={{cursor:'pointer'}} href="/admin" title="Programmes"  className="sf-depth-1">Admin</a>
                                                ):(
                                                  <a style={{cursor:'pointer'}} onClick={logout} title="Programmes"  className="sf-depth-1">Logout</a>
                                                )}
                                                </>
                                              ):(
                                                <a style={{cursor:'pointer'}} title="Programmes" href='/memberships' className="sf-depth-1">Join Us</a>
                                              )}
                                              </li>


                                </ul>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setModalShow(true)}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default HomeHeader