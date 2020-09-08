import React from "react";
import {Helmet} from "react-helmet/es/Helmet";
import imgFavicon from "../../assets/favicon.png";

const CustomHelmet = () => (
  <Helmet>
    <link rel="icon" type="image/png" href={imgFavicon}/>

    <title>Bobatime - The First Boba Oriented Social Media App</title>
    <meta name="title" content="Bobatime - The First Boba Oriented Social Media App"/>
    <meta name="description"
          content="Explore and connect with local boba enthusiasts while supporting local boba shops. "/>

    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://bobati.me/"/>
    <meta property="og:title" content="Bobatime - The First Boba Oriented Social Media App"/>
    <meta property="og:description"
          content="Explore and connect with local boba enthusiasts while supporting local boba shops. "/>
    <meta property="og:image"
          content="https://images.unsplash.com/photo-1541696490-8744a5dc0228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://bobati.me/"/>
    <meta property="twitter:title" content="Bobatime - The First Boba Oriented Social Media App"/>
    <meta property="twitter:description"
          content="Explore and connect with local boba enthusiasts while supporting local boba shops. "/>
    <meta property="twitter:image"
          content="https://images.unsplash.com/photo-1541696490-8744a5dc0228?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>
  </Helmet>
)

export default CustomHelmet;
