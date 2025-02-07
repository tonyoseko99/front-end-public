import React, { useState } from "react";
import styles from "../../styles/SignUpfreelancer.module.css";
import freelanceLogo from "../../public/images/canadaFreelanceLogo.png";
import Link from "next/link";
import Image from "next/image";
import Dropdown3 from "../../Components/Signups/Dropdown3";
import FreelancerImage from "../HeaderImage/FreelancerImage";



function SignUpfreelancer() {
    

    return (
        <section className={styles["section_container"]}>
        <nav className={styles["nav_container"]}>
        <Image src={freelanceLogo} width={130} height={60} /> 
        <Link href="/SignUpFreePage">Looking for talent?</Link>
        <Link href="/SignUpFreePage">Join as a client</Link>       
       </nav> 
       <div className={styles["background-image__container"]}>
        <FreelancerImage />  
            <fieldset className={styles["fieldset_container"]}>
            <div className={styles["signup_container"]}>
             <h1>Sign up as a freelancer </h1>       
             <form className={styles["form_container"]}>
             <button className={styles["google_button"]}>Continue with Google</button>
             <button className={styles["apple_button"]}>Continue with Apple</button> 
             <h1>Or</h1> 
             <input type="text" placeholder="First name" name=" First name" className={styles["firstname_input"]} required />   
             <input type="text" placeholder="Last name" name=" Last name" className={styles["lastname_input"]} required/>            
             <input type="email" placeholder="Email address" name="email" className={styles["email_input"]} required />
             <input type="password" placeholder="Password" name="password" className={styles["password_input"]} required />
             <Dropdown3  />  
             <div>          
             <input type="checkbox" className={styles["check1"]} value="coding" required /> 
             </div>   
             <p>send me tips on how to find work that fits my talent</p>   
             <div>          
             <input type="checkbox" name="freelancer" value="agree" className={styles["check-2"]} />
             </div> 
             <span>Yes i understand and agree to the CanadaFreelancers terms of service,<br/>also the User Agreement and Privacy policy.</span>  
             <button className={styles["signup_button"]}>Create Account</button>          
             </form>      
            </div>
         </fieldset>    
         </div>
        </section>
    );  
}
export default SignUpfreelancer;