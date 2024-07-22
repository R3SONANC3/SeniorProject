function AboutSection() {
    return (
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="col-image">
              <img src="assets/about-us.jpg" alt="About us" />
            </div>
            <div className="col-text">
              <h1>เกี่ยวกับเรา</h1>
              <h2>
                TPQI Competency Profile System หรือ ระบบเทียบเคียงสมรรถนะของบุคคลกับเกณฑ์มาตรฐาน
                <a href="https://www.tpqi.go.th/th/standard/rQNWewEb3Q" target="_blank" rel="noopener noreferrer">
                  สถาบันคุณวุฒิวิชาชีพ (องค์การมหาชน)
                </a> 
                เป็นแพลตฟอร์มที่ออกแบบมาเพื่อวิเคราะห์ทักษะ และความรู้ของแต่ละบุคคลตามมาตรฐานของ TPQI
                เพื่อให้ทราบเกี่ยวกับทักษะ และความรู้ ที่สอดคล้องกับอาชีพอะไร อยู่ในระดับไหน
                เพิ่มโอกาสในการตัดสินใจในการสมัครงานอาชีพที่ตรงกับทักษะ และความรู้ ของตนเองได้
              </h2>
            </div>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;