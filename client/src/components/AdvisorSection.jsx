import advisorImg from '../assets/advisor.png'

function AdvisorSection() {
  return (
    <section className="advisor-section">
      <div className="advisor-card">
        <img src={advisorImg} alt="ดร.สุรเดช จิตประไพกุลศาล" className="advisor-image" />
        <h3>อาจารย์ที่ปรึกษา</h3>
        <h4>ดร.สุรเดช จิตประไพกุลศาล</h4>
        <p>DR. Suradet Jitprapaikulsarn</p>
        
        <div className="advisor-info">
          <a href="http://www.ecpe.nu.ac.th/web/" target="_blank" rel="noopener noreferrer">ภาควิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์ (ECPE)</a>
          <a href="http://www.eng.nu.ac.th/eng2022/index.php" target="_blank" rel="noopener noreferrer">คณะวิศวกรรมศาสตร์</a>
          <a href="https://www.nu.ac.th/" target="_blank" rel="noopener noreferrer">มหาวิทยาลัยนเรศวร</a>
        </div>
        
        <div className="advisor-contact">
          <h4>ช่องทางการติดต่อ:</h4>
          <p>สุรเดช จิตประไพกุลสาร</p>
          <p>ภาควิชาวิศวกรรมไฟฟ้าและคอมพิวเตอร์ มหาวิทยาลัยนเรศวร</p>
          <p>99 หมู่ 9 ตำบลท่าโพธิ์ อำเภอเมือง พิษณุโลก พิษณุโลก 65000 ประเทศไทย</p>
        </div>
        
        <div className="advisor-details">
          <p><strong>Appointment:</strong> <a href="http://tinyurl.com/SJ-appointment" target="_blank" rel="noopener noreferrer">http://tinyurl.com/SJ-appointment</a></p>
          <p><strong>Email:</strong> suradet.j@gmail.com or suradet@nu.ac.th</p>
          <p><strong>Facebook:</strong> <a href="https://www.facebook.com/suradetj" target="_blank" rel="noopener noreferrer">Suradet Jitprapaikulsarn</a></p>
          <p><strong>Blog:</strong> <a href="https://suradetj.wordpress.com/" target="_blank" rel="noopener noreferrer">suradetj.wordpress.com</a> AND <a href="https://suradetj.blogspot.com/" target="_blank" rel="noopener noreferrer">suradetj.blogspot.com</a></p>
          <p><strong>Telephone:</strong> (Office) 055-96-4391 (Mobile) 089-451-8144</p>
          <p><strong>Fax:</strong> (66) 55-96-4500</p>
          <p><strong>Office:</strong> EE - 408, Electrical and Computer Engineering Building, Faculty of Engineering.</p>
        </div>
      </div>
    </section>
  );
}

export default AdvisorSection;