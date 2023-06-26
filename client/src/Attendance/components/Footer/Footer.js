import React from 'react'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='sb_footer section_padding'>
            <div className='sb_footer-links'>
          
            </div>
            <hr></hr>
            <div className='sb_footer-below'>
                <div className='description'>
                    <p>
                    The Faculty of Engineering of University of Ruhuna
                     was established on 1st July 1999 at Hapugala, Galle.  Admission to the Faculty of Engineering, University of Ruhuna, is subject to the University Grants Commission policy on university admissions.
                    </p>
                </div>
                
                <div className='sb_footer-below-links'>
                    <h1>DEPARTMENTS</h1>
                    <div className='links'>
                    <a href="http://eie.eng.ruh.ac.lk/"><div><p>Electrical and Information Engineering</p></div></a>
                    <a href="http://www.dcee.ruh.ac.lk/"><div><p>Civil and Environmental Engineering</p></div></a>
                    <a href="http://www.eng.ruh.ac.lk/dmme/"><div><p>Mechanical and Manufacturing Engineering</p></div></a>
                    <a href="http://www.eng.ruh.ac.lk/is/"><div><p>Interdisciplinary Studies</p></div></a>
                    </div>
                </div>
                <div className='useful-links'>
                    <h1>USEFUL LINKS</h1>
                    <div className='links'>
                    <a href="https://www.ruh.ac.lk/index.php/en/"><div><p>University of Ruhuna</p></div></a>
                    <a href="http://www.eng.ruh.ac.lk/"><div><p>Faculty of Engineering</p></div></a>
                    <a href="http://www.lib.ruh.ac.lk/Eng/index.php"><div><p>Library</p></div></a>
                    <a href="https://www.iesl.lk/index.php?lang=en"><div><p>IESL</p></div></a>
                    </div>
                </div>
                <div className='contact-us'>
                    <h1>CONTACT US</h1>
                    <div className='links'>
                    <a href="/terms"><div><p>Faculty of Engineering,Hapugala,Galle,Sri Lanka.</p></div></a>
                    <a href="/Privacy"><div><p>Phone: +(94)0 91 2245765/6</p></div></a>
                    <a href="/Secutiy"><div><p>E-mail: webmaster@eng.ruh.ac.lk</p></div></a>
                    </div>
                </div>
               
            </div>
        </div>
    </div>

    
  )
}
