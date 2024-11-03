import React, { useState } from 'react'
import './Dashboard.css'
import db_logo from '../../Assets/Images/Db_logo.png'
import db_key from '../../Assets/Images/key-square.png'
import db_square from '../../Assets/Images/3d-square.png'
import db_user from '../../Assets/Images/user-square.png'
import db_wallet from '../../Assets/Images/wallet-money.png'
import db_discount from '../../Assets/Images/discount-shape.png'
import db_message from '../../Assets/Images/message-question.png'
import customer_icon from '../../Assets/Images/customers.png'
import members_icon from '../../Assets/Images/members.png'
import active_icon from '../../Assets/Images/active.png'
import userprof_min from '../../Assets/Images/userprof_min.png'
import userprof_min1 from '../../Assets/Images/userprof_min1.png'
import userprof_min2 from '../../Assets/Images/userprof_min2.png'
import userprof_min3 from '../../Assets/Images/userprof_min3.png'
import userprof_min4 from '../../Assets/Images/userprof_min4.png'

import dash_logo_single from '../../Assets/Images/dash_logo_single.png'
import db_key_white from '../../Assets/Images/key-square-white.png'
import db_square_white from '../../Assets/Images/3d-square-white.png'
import db_user_black from '../../Assets/Images/user-square-white.png'
import db_wallet_white from '../../Assets/Images/wallet-money-white.png'
import db_discount_white from '../../Assets/Images/discount-shape-white.png'
import db_message_white from '../../Assets/Images/message-question-white.png'

import { MdKeyboardArrowRight } from "react-icons/md";
import user_img from '../../Assets/Images/user_img.png'
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Table from '../../Components/Table/Table'
import { getCustomers } from '../userbase';
import Mui from '../../Components/Mui/Mui'
// import "bootstrap/dist/css/bootstrap.css"

const Dashboard = () => {
  const [color,setcolor]=useState("dash3")
  const [hide,sethide]=useState("")
  function changecolor(event) {
    console.log(event);
    setcolor(event)
  }
  function changetheme(event) {
    sethide(event)
    
  }
  function closetheme(event) {
    sethide(event)
  }
  return (
    <>
      <>
       <div className='main'>
        <div className={hide=="open"?"sidebar1":'sidebar'} onMouseOver={()=>changetheme("open")} onMouseLeave={()=>closetheme("close")}>
          <div className='dashboard_logo'>
            {hide=="open" && 
            <img src={db_logo} alt="" srcset=""  />
          }
           {hide=="close" && 
            <img src={dash_logo_single} alt="" srcset=""  />
          }
            {hide=="open" &&
            <sub>v.01</sub>}
          </div>
          <div className='dashboard_inner'>
           <div className='dashboard_box'>
            <div className={color=="dash1"? "dashboard_menu_highlight":'dashboard_menu'} onClick={()=>changecolor("dash1")}>
              <div className="dashboard_menu_cont" >
                <div className='navimg'>
                <img src={db_key} alt="" srcset="" className={color=="dash1"?"logoinner":"logo"}/>
                <img src={db_key_white} alt="" srcset="" className={color=="dash1"?"logo":"logoinner"}/>

                </div>
                {hide=="open" && 
                <h5>Dashboard</h5> 
              }
              </div>
              
            </div>
            <div className={color=="dash2"? "dashboard_menu_highlight":'dashboard_menu'} onClick={()=>changecolor("dash2")}>
              <div className='dashboard_menu_cont' onClick={()=>changecolor("dash2")}>
              <div className='navimg'>
                <img src={db_square} alt="" srcset="" className={color=="dash2"?"logoinner":"logo"}/>
                <img src={db_square_white} alt="" srcset="" className={color=="dash2"?"logo":"logoinner"}/>

                </div>              {hide=="open" && 
              <h5>Product</h5> 
              }
              </div>
              {hide=="open"&& <MdKeyboardArrowRight />}
            </div>
            <div className={color=="dash3"? "dashboard_menu_highlight":'dashboard_menu'} onClick={()=>changecolor("dash3")}>
            <div className='dashboard_menu_cont' onClick={()=>changecolor("dash3")}>
            <div className='navimg'>
                <img src={db_user_black} alt="" srcset="" className={color=="dash3"?"logoinner":"logo"}/>
                <img src={db_user} alt="" srcset="" className={color=="dash3"?"logo":"logoinner"}/>

                </div>            {hide=="open" &&  <h5>Customers</h5> }
            </div>
{hide == "open" && 
          <MdKeyboardArrowRight className='right_arrow_highlight' />}
          </div>
            <div className={color=="dash4"? "dashboard_menu_highlight":'dashboard_menu'} onClick={()=>changecolor("dash4")}>
            <div className='dashboard_menu_cont' onClick={()=>changecolor("dash4")}>
            <div className='navimg'>
                <img src={db_wallet} alt="" srcset="" className={color=="dash4"?"logoinner":"logo"}/>
                <img src={db_wallet_white} alt="" srcset="" className={color=="dash4"?"logo":"logoinner"}/>

                </div>             {hide=="open" && 
             <h5>Income</h5>}
            </div>
            {hide=="open" && 
          <MdKeyboardArrowRight /> 
          }
            </div>
            <div className={color=="dash5"? "dashboard_menu_highlight":'dashboard_menu'} onClick={()=>changecolor("dash5")}>
            <div className='dashboard_menu_cont' onClick={()=>changecolor("dash5")}>
            <div className='navimg'>
                <img src={db_discount} alt="" srcset="" className={color=="dash5"?"logoinner":"logo"}/>
                <img src={db_discount_white} alt="" srcset="" className={color=="dash5"?"logo":"logoinner"}/>

                </div>            {hide=="open"&& 
               <h5>Promote</h5>}
            </div>
            {hide=="open" && 
             <MdKeyboardArrowRight /> }
            </div>
            <div className={color=="dash6"? "dashboard_menu_highlight":'dashboard_menu'} onClick={()=>changecolor("dash6")}>
            <div className='dashboard_menu_cont' onClick={()=>changecolor("dash6")}>
            <div className='navimg'>
                <img src={db_message} alt="" srcset="" className={color=="dash6"?"logoinner":"logo"}/>
                <img src={db_message_white} alt="" srcset="" className={color=="dash6"?"logo":"logoinner"}/>

                </div>             {hide=="open" && 
               <h5>Help</h5>
              }
            </div>
          {hide=="open" && 
            <MdKeyboardArrowRight />}
            </div>
           </div>
        {hide=="open" && 
            <div className='pro_ad_banner'>
            <h5>Upgrade to  PRO to get access all Features!</h5>
            <button>Get Pro Now!</button>
           </div> }
          </div>
          <div className='db_account_display'>
            <div className='db_account_cont'>
            <div className='db_account_img'>
              <img src={user_img} alt="" srcset="" />
            </div>
            {hide=="open"&& 
             <div className='db_account_name'>
              <h5>Evano</h5>
              <h6>Project Manager</h6>
            </div> 
            }
            </div>
            {hide=="open" &&
             <IoIosArrowDown /> }
          </div>
        </div>
        <div className='main_page'>
          <div className='main_page_box'>
            <div className='main_page_nav'>
              <h3>Hello Evano 👋🏻,</h3>
              <div className='nav_search'>
                <IoSearchOutline className='search_glass' />
                <input type="text" placeholder='Search' />
              </div>
            </div>
            <div className='userbase_dashboard'>
              <div className='userbase_display_content'>
               <div className='userbase_art'>
                <img src={customer_icon} alt="" srcset="" />
               </div>
               <div className='userbase_details'>
                <h5>Total Customers</h5>
                <h3>5,423</h3>
                <div className='growth_display'>
                 <FaArrowUp className='up_arrow' /><h6><span>16%</span> this Month</h6>
                </div>
                <p></p>
               </div>
              </div>
              <div className='userbase_display_content'>
               <div className='userbase_art'>
                <img src={members_icon} alt="" srcset="" />
               </div>
               <div className='userbase_details'>
                <h5>Members</h5>
                <h3>1,893</h3>
                <div className='growth_display_down'>
                 <FaArrowDown className='down_arrow' /><h6><span>1%</span> this Month</h6>
                </div>
                <p></p>
               </div>
              </div>
              <div className='userbase_display_content' title=''>
               <div className='userbase_art'>
                <img src={active_icon} alt="" srcset="" />
               </div>
               <div className='userbase_details'>
                <h5>Active Now</h5>
                <h3>189</h3>
                
                 <img src={userprof_min} alt="" srcset="" className='userprof_min' />
                 <img src={userprof_min1} alt="" srcset="" className='userprof_min1' />
                 <img src={userprof_min2} alt="" className='userprof_min2' />
                 <img src={userprof_min3} alt="" srcset="" className='userprof_min3' />
                 <img src={userprof_min4} alt="" srcset="" className='userprof_min4' />
               </div>
              </div>
              
            </div>
            <div className='table_wrapper'>
                <div className='table_top_head'>
                  <div className='table_top_head_title'>
                    <h3>All Customers</h3>
                    <h5>Active Members</h5>
                  </div>
                  <div className='table_top_head_filter'>
                   <div className='table_search'>
                    <IoSearchOutline className='search_glass' />
                    <input type="text" placeholder='Search' />
                  </div>
                  <div className='table_sort'>
                    <p>Sort by:</p>
                    <select name="Sort" id="">
                      <option value="Newest">Newest</option>
                      <option value="Newest">Oldest</option>
                    </select>
                  </div>
                </div>
                
              </div>
              <Mui/>
            </div>
          </div>
        </div>
       </div>
      </>
    </>
  )
}

export default Dashboard
