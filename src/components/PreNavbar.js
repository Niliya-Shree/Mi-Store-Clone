import React from 'react'
import "../styles/PreNavbar.css"

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120h-80ZM280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304H40Z"/></svg>

function PreNavbar() {
  return (
    <div className='preNav'>
      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a><span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a><span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a><span>|</span>
        <a href="https://www.mi.com/in/servie/authorized_stores/">RETAIL STORE</a>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a><span>|</span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjyTc5NzFlZDc1YmY2ZmM2NDFiYWMWNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">SIGN UP</a><span>|</span>
        <a href="https://store.mi.com/in/site/login">{cartIcon}CART (0)</a>
      </div>
    </div>
  )
}

export default PreNavbar
