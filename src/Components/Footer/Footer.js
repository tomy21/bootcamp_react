import React from 'react'
import "./footer.css"


export default function Footer() {
  return (
    <>
      <div className="footer-content">
        <div className="content">
            <div className="circle"></div>
          <div className="tagline">
            <div className="tagline-title">TAGLINE edspert disini</div>
            <div className="address">
              Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta 55581
            </div>
          </div>
          <div className="right-footer">
            <div className="right-footer-up">
              <div className="program">
                <li className="header-footer">Program</li>
                <li>Online Course</li>
                <li>Mini Bootcamp</li>
                <li>Bootcamp</li>
              </div>
              <div className="bidang">
                <li className="header-footer">Bidang Ilmu</li>
                <li>Digital Marketing</li>
                <li>Product Management</li>
                <li>English</li>
                <li>Programming</li>
              </div>
              <div className="tentang">
                <li className="header-footer">Tentang Edspert</li>
                <li>Bantuan</li>
                <li>Kontak Kami</li>
                <li>Media Sosial</li>
              </div>
            </div>
            <div className="right-footer-down">
              Edspert, copyright. Alamat boleh ditaruh disini apabila
              diinginkan.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
