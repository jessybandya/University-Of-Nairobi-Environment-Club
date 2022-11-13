import React, { useState } from 'react'
import { Modal,Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect'
import Footer from '../../components/Footer'
import Header from '../../components/HomeHeader'

function Home() {
  const [modalShow, setModalShow] = useState(false);
  const removeModal = () => {
    setModalShow(false)
  }
  return (
   <div >
     <Header />
            <div className="page-content bg-white ">
        {/* Main Slider */}
        <div className="rev-slider">
          <div id="rev_slider_486_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container" data-alias="news-gallery36" data-source="gallery" style={{margin: '0px auto', backgroundColor: '#ffffff', padding: '0px', marginTop: '0px', marginBottom: '0px'}}>
            {/* START REVOLUTION SLIDER 5.3.0.2 fullwidth mode */}
            <div id="rev_slider_486_1" className="rev_slider fullwidthabanner" style={{display: 'none'}} data-version="5.3.0.2">
              <ul >	{/* SLIDE  */}
                <li data-index="rs-100" data-transition="parallaxvertical" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="error-404.html" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="A STUDY ON HAPPINESS" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description="Science says that Women are generally happier">
                  {/* MAIN IMAGE */}
                  <img  src="assets/images/back-green.jpg" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                  {/* LAYER NR. 1 */}
                  <div className="tp-caption tp-shape tp-shapewrapper " id="slide-100-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, backgroundColor: 'rgba(2, 0, 11, 0.80)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px'}}> </div>	
                  {/* LAYER NR. 2 */}
                  <div style={{marginTop:5}} className="tp-caption Newspaper-Title   tp-resizeme" id="slide-100-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['250','250','250','240']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-width="full" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, fontFamily: 'rubik', fontWeight: 700, textAlign: 'center', whiteSpace: 'normal'}}>
                  
                  </div>
                  {/* LAYER NR. 3 */}
                  <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-100-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['210','210','210','210']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', color: '#fff', fontFamily: 'rubik', fontSize: '18px', fontWeight: 400}}>
                  <img  src='sites/civil.uonbi.ac.ke/files/best-logo59_0.png' />
                  </div>
                  {/* LAYER NR. 3 */}
                  <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-100-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['320','320','320','290']" data-width="['800','800','700','420']" data-height="['100','100','100','120']" data-whitespace="unset" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, textTransform: 'capitalize', whiteSpace: 'unset', color: '#fff', fontFamily: 'rubik', fontSize: '18px', lineHeight: '28px', fontWeight: 400}}>
                   <span style={{fontSize:40}}> University Of Nairobi</span>
                  </div>
                  {/* LAYER NR. 4 */}
                  <div className="tp-caption Newspaper-Button rev-btn " id="slide-100-layer-5" data-x="['center','center','center','center']" data-hoffset="['90','80','75','90']" data-y="['top','top','top','top']" data-voffset="['400','400','400','420']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[12,12,12,12]" data-paddingright="[30,35,35,15]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[30,35,35,15]" style={{zIndex: 8, whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', backgroundColor: '#2a68af', border: 0, borderRadius: '30px', marginRight: '5px'}}>READ MORE </div>
                  <div className="tp-caption Newspaper-Button rev-btn" id="slide-100-layer-6" data-x="['center','center','center','center']" data-hoffset="['-90','-80','-75','-90']" data-y="['top','top','top','top']" data-voffset="['400','400','400','420']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[12,12,12,12]" data-paddingright="[30,35,35,15]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[30,35,35,15]" style={{zIndex: 8, whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', borderRadius: '30px'}}><a style={{color:'#fff'}} href='/memberships'>JOIN US</a></div>
                </li>
                <li data-index="rs-200" data-transition="parallaxvertical" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="assets/images/slider/slide1.jpg" data-rotate={0} data-fstransition="fade" data-fsmasterspeed={1500} data-fsslotamount={7} data-saveperformance="off" data-title="A STUDY ON HAPPINESS" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description="Science says that Women are generally happier">
                  {/* MAIN IMAGE */}
                  <img src="https://www.greenbeltmovement.org/sites/greenbeltmovement.org/files/DSC02158.JPG" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax={10} className="rev-slidebg" data-no-retina />
                  {/* LAYER NR. 1 */}
                  <div className="tp-caption tp-shape tp-shapewrapper " id="slide-200-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5, backgroundColor: 'rgba(2, 0, 11, 0.80)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: '0px'}}> 
                  </div>
                  {/* LAYER NR. 2 */}
                  <div className="tp-caption Newspaper-Title   tp-resizeme" id="slide-200-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['250','250','250','240']" data-fontsize="['50','50','50','30']" data-lineheight="['55','55','55','35']" data-width="full" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6, fontFamily: 'rubik', fontWeight: 700, textAlign: 'center', whiteSpace: 'normal', textTransform: 'uppercase'}}>
                  
                  </div>
                  {/* LAYER NR. 3 */}
                  <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-200-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['210','210','210','210']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, whiteSpace: 'nowrap', textTransform: 'uppercase', color: '#fff', fontFamily: 'rubik', fontSize: '18px', fontWeight: 400}}>
                  <img  src='sites/civil.uonbi.ac.ke/files/best-logo59_0.png' />
                  </div>
                  {/* LAYER NR. 3 */}
                  <div className="tp-caption Newspaper-Subtitle   tp-resizeme" id="slide-200-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['320','320','320','290']" data-width="['800','800','700','420']" data-height="['100','100','100','120']" data-whitespace="unset" data-type="text" data-responsive_offset="on" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, textTransform: 'capitalize', whiteSpace: 'unset', color: '#fff', fontFamily: 'rubik', fontSize: '18px', lineHeight: '28px', fontWeight: 400}}>
                  <span style={{fontSize:40}}> University Of Nairobi</span>
                  </div>
                  {/* LAYER NR. 4 */}
                  <div className="tp-caption Newspaper-Button rev-btn " id="slide-200-layer-5" data-x="['center','center','center','center']" data-hoffset="['90','80','75','90']" data-y="['top','top','top','top']" data-voffset="['400','400','400','420']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[12,12,12,12]" data-paddingright="[30,35,35,15]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[30,35,35,15]" style={{zIndex: 8, whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', backgroundColor: '#2a68af', border: 0, borderRadius: '30px', marginRight: '5px'}}>READ MORE </div>
                  <div className="tp-caption Newspaper-Button rev-btn" id="slide-200-layer-6" data-x="['center','center','center','center']" data-hoffset="['-90','-80','-75','-90']" data-y="['top','top','top','top']" data-voffset="['400','400','400','420']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;&quot;,&quot;speed&quot;:1500,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:1000,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Power1.easeInOut&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0, 0, 0, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);bw:1px 1px 1px 1px;&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[12,12,12,12]" data-paddingright="[30,35,35,15]" data-paddingbottom="[12,12,12,12]" data-paddingleft="[30,35,35,15]" style={{zIndex: 8, whiteSpace: 'nowrap', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', borderRadius: '30px'}}><a style={{color:'#fff'}} href='/memberships'>JOIN US</a></div>
                </li>
                {/* SLIDE  */}
              </ul>
            </div>
            {/* END REVOLUTION SLIDER */}               
          </div>  
        </div>

  
        <div className="content-block">
        {/* Our Services */}
        <div className="section-area content-inner service-info-bx">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="service-bx">
                  <div className="action-box">
                    <img style={{height: 130,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                  </div>
                  <div className="info-bx text-center">
                    <div className="feature-box-sm radius bg-white">
                    🌳
                    </div>
                    <h4><a href="#">Passive</a></h4>
                    <a onClick={() => setModalShow(true)} style={{backgroundColor:'#2a68af',color:'#fff'}}  className="btn radius-xl">View More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6">
                <div className="service-bx">
                  <div className="action-box">
                  <img style={{height: 130,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                  </div>
                  <div className="info-bx text-center">
                    <div className="feature-box-sm radius bg-white">
                    🌳
                    </div>
                    <h4><a onClick={() => setModalShow(true)}>Proactive</a></h4>
                    <a style={{backgroundColor:'#2a68af',color:'#fff'}} onClick={() => setModalShow(true)} className="btn radius-xl">View More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="service-bx m-b0">
                  <div className="action-box">
                  <img style={{height: 130,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                  </div>
                  <div className="info-bx text-center">
                    <div className="feature-box-sm radius bg-white">
                    🌳
                    </div>
                    <h4><a href="#">Resposible</a></h4>
                    <a style={{backgroundColor:'#2a68af',color:'#fff'}} href="#" className="btn radius-xl">View More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Our Services END */}







            {/* Form */}
            <div className="section-area section-sp1 ovpr-dark bg-fix online-cours" style={{backgroundImage: 'url(https://c8.alamy.com/comp/2D6960A/people-take-care-of-green-earth-planet-vector-flat-cartoon-illustration-for-save-the-earth-day-environment-ecology-nature-protection-abstract-conc-2D6960A.jpg)'}}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center text-white">
                    <h2>UoN ENVIRONMENTAL CLUB

                    {/* <Typewriter
  options={{
    strings: ['Has Got 9+ Members &', ' Successfully Completed 1+ Projects.'],
    autoStart: true,
    loop: true,
  }}
/> */}
                    </h2>
                    <hr style={{height:1, border:"none", color:"#fff", backgroundColor:"#fff",width:'100%'}}/>
                  </div>
                </div>
                <div className="mw800 m-auto">
                  <center><h3 style={{color:'#fff'}}><i>The planet's alarm is going off, join climate action NOW.</i></h3></center>
                </div>
              </div>
            </div>
            {/* Form END */}
            <div className="section-area section-sp2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center heading-bx">
                    <h2 className="title-head m-b0">Upcoming <span>Events</span></h2>
                    <p className="m-b0">Write Something about Upcoming Events </p>
                  </div>
                </div>
                <div className="row">
                  <div className="upcoming-event-carousel owl-carousel owl-btn-center-lr owl-btn-1 col-12 p-lr0  m-b30">
                    <div className="item">
                      <div className="event-bx">
                        <div className="action-box">
                        <img style={{height: 200,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2022</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Nairobi, Kenya</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="event-bx">
                        <div className="action-box">
                        <img style={{height: 200,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2022</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Nairobi, Kenya</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="event-bx">
                        <div className="action-box">
                        <img style={{height: 200,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                        </div>
                        <div className="info-bx d-flex">
                          <div>
                            <div className="event-time">
                              <div className="event-date">29</div>
                              <div className="event-month">October</div>
                            </div>
                          </div>
                          <div className="event-info">
                            <h4 className="event-title"><a href="#">Education Autumn Tour 2022</a></h4>
                            <ul className="media-post">
                              <li><a href="#"><i className="fa fa-clock-o" /> 7:00am 8:00am</a></li>
                              <li><a href="#"><i className="fa fa-map-marker" /> Nairobi, Kenya</a></li>
                            </ul>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the..</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <a href="#" className="btn">View All Event</a>
                </div>
              </div>
            </div>

            {/* Recent News */}
            <div className="section-area section-sp2">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 heading-bx left">
                    <h2 className="title-head">Recent <span>News</span></h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page</p>
                  </div>
                </div>
                <div className="recent-news-carousel owl-carousel owl-btn-1 col-12 p-lr0">
                  <div className="item">
                    <div className="recent-news">
                      <div className="action-box">
                      <img style={{height: 200,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                      </div>
                      <div className="info-bx">
                        <ul className="media-post">
                          <li><a href="#"><i className="fa fa-calendar" />Jan 02 2019</a></li>
                          <li><a href="#"><i className="fa fa-user" />By Jessy Bandya</a></li>
                        </ul>
                        <h5 className="post-title"><a href="#">This Story Behind Education Will Haunt You Forever.</a></h5>
                        <p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
                        <div className="post-extra">
                          <a href="#" className="btn-link">READ MORE</a>
                          <a href="#" className="comments-bx"><i className="fa fa-comments-o" />20 Comment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="recent-news">
                      <div className="action-box">
                      <img style={{height: 200,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                      </div>
                      <div className="info-bx">
                        <ul className="media-post">
                          <li><a href="#"><i className="fa fa-calendar" />Feb 05 2019</a></li>
                          <li><a href="#"><i className="fa fa-user" />By Jude Kwach</a></li>
                        </ul>
                        <h5 className="post-title"><a href="#">What Will Education Be Like In The Next 50 Years?</a></h5>
                        <p>As desperate as you are right now, you have done everything you can on your.</p>
                        <div className="post-extra">
                          <a href="#" className="btn-link">READ MORE</a>
                          <a href="#" className="comments-bx"><i className="fa fa-comments-o" />14 Comment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="recent-news">
                      <div className="action-box">
                      <img style={{height: 200,objectFit:'cover'}} src="https://www.voicesofyouth.org/sites/voy/files/images/2019-11/istockphoto-519616538-612x612_0.jpg" alt="" />
                      </div>
                      <div className="info-bx">
                        <ul className="media-post">
                          <li><a href="#"><i className="fa fa-calendar" />April 14 2019</a></li>
                          <li><a href="#"><i className="fa fa-user" />By Joy Sheuna</a></li>
                        </ul>
                        <h5 className="post-title"><a href="#">Master The Skills Of Education And Be.</a></h5>
                        <p>You will see in the guide all my years of valuable experience together with.</p>
                        <div className="post-extra">
                          <a href="#" className="btn-link">READ MORE</a>
                          <a href="#" className="comments-bx"><i className="fa fa-comments-o" />23 Comment</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent News End */}


      </div>


      </div>
     <Footer />
             <Modal
              show={modalShow}
              style={{opacity:1}}
              onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header onClick={() => setModalShow(false)}>
        close
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <p>
          Work in Progress!!!
        </p>
      </Modal.Body>

    </Modal>
   </div>
  )
}

export default Home