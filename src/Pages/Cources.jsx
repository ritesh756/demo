import Header from "../Components/Header/Header";

const Cources =() =>{
  return(
    <div>
       <Header/>
               <h2 id="a">Our Academic Programs</h2>
        <p id="f">Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the <br></br>knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and<br></br> academic advancements.</p>
  <h1 align="left">Discover Campus Life</h1>
  <video src="/videos/clgcampus.mp4" controls></video>
          <h2 id="f">Undergraduate Programs (UG)</h2>

        <ul id="f">  
          <li>Bachelor of Science (B.Sc.)**
            <ul>
              <li>Computer Science (3 years)*</li>
              <li>Information Technology (3 years)</li>
              <li>Biotechnology (3 years)</li><br></br>
        
            </ul>
            
          </li>

          <li>
            *Bachelor of Commerce (B.Com)*
            <ul>
              <li>Accounting & Finance (3 years)</li>
              <li>Banking & Insurance (3 years)</li><br></br>

            </ul>
          </li>

          <li>Bachelor of Arts (B.A.)*
            <ul>
              <li>English Literature (3 years)</li>
              <li>Psychology (3 years)</li>
            </ul>


          </li>

        </ul>

        <h2 id="f">Postgraduate Programs (PG) (UG)</h2>
      
          <ul id="f">
            <li>*Master of Science (M.Sc.)*
              <ul>
                <li>Computer Science (2 years)</li>
                <li>Information Technology (2 years)</li>
              </ul>

            </li>
            <li>Master of Commerce (M.Com)* (2 years)</li>
            <li>Master of Arts (M.A.)* (2 years)</li>
          </ul>
          <h1>Program Details & Fee Structure (Annual)</h1>
          <table border="solid 2px">
            <caption>Monthly Expenses Report</caption>
            <thead>
                <tr>
                    <th>Program Type</th>
                    <th>Course Name</th>
                    <th>Duration</th>
                    <th>Annual Fee (INR)</th>
                    <th>Eligibility</th>
                </tr>
            </thead>
              <tbody>
                <tr>
                    <td>UG</td>
                    <td>B.Sc. Computer Science</td>
                    <td>3 Years</td>
                    <td>₹ 85,000</td>
                    <td>10+2 with PCM (50%)</td>
                </tr>
                <tr>
                    <td>UG</td>
                    <td>	B.Com. Accounting & Finance</td>
                    <td>3 Years</td>
                    <td>₹ 70,000</td>
                    <td>10+2 Commerce (45%)</td>
               
                </tr>
                <tr>
                    <td>PG</td>
                    <td>M.Sc. Information Technology</td>
                    <td>2 Years</td>
                    <td>	₹ 95,000</td>
                    <td>B.Sc. IT/CS (50%)</td>
                </tr>
            </tbody>
               </table>
               <h2 id="f">Specialized & Vocational Courses</h2>

        <p id="f">In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web<br></br> Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
            <h4 align="center">Have questions about a specific course?</h4>
             <div>
      <button id="btn">
         Inquire About Courses </button>
      </div>
      
    
    </div>
  )
}
export default Cources;