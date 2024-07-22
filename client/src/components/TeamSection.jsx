function TeamSection() {
    return (
      <section className="team-section">
          <h2 className="section-title">About Team</h2>
          <hr className="section-divider" />
          <div className="row">
            <TeamMember
              name="นาย จีรพัฒน์ ขยายเสียง"
              englishName="Mr. Jeerapat Kahyaisiang"
              image="assets/phatnarin.jpg"
              education="ระดับการศึกษาปริญญาตรี สาขาวิศวกรรมคอมพิวเตอร์"
              faculty="คณะวิศวกรรมศาสตร์ มหาวิทยาลัยนเรศวร"
              email="jeerapat5870@gmail.com"
              tel="+66 656089783"
            />
          </div>
      </section>
    );
  }
  
  function TeamMember({ name, englishName, image, education, faculty, email, tel }) {
    return (
      <div className="team-member">
        <img src={image} alt={name} className="member-image" />
        <h3>{name}</h3>
        <p>{englishName}</p>
        <hr />
        <p>{education}</p>
        <p>{faculty}</p>
        <hr />
        <h4>ช่องทางการติดต่อ</h4>
        <p>Email: {email}</p>
        <p>Telephone: {tel}</p>
      </div>
    );
  }

export default TeamSection;