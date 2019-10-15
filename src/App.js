import React, { Component } from 'react';
import './scss/App.scss';


class App extends Component {
  render() {
    return (
      <div id="portfolio">
        <div className="portfolio-left" role="main" aria-label="Introduction and Contact Info">
          <div className="innards">
            <h1>Cameron Omiccioli</h1>
            <h2>front-end developer</h2>
          </div>
          <div className="contact-details">
            <ul>
              <li><a href="tel:+5088176770">+1 (508)-817-6770</a></li>
              <li><a href="https://www.linkedin.com/in/caomicc" target="_blank">linkedin <i className="fas fa-external-link-alt" aria-hidden="true"></i><span className="sr-only">(opens in new tab)</span></a></li>
              <li><a href="mailto:caomicc@gmail.com">caomicc@gmail.com</a></li>
            </ul>
          </div>
        </div>


        <div class="portfolio-right in" role="main" aria-label="Introduction and Resume">
          <div class="text" id="animate-two">
            <span>Hi There! &#x1F44B;</span>
            <p class="opener">
              I'm Cameron and I'm a front-end developer from Holliston, MA. <br /> Currently, I write code for <a href="https://membersfirst.com" target="_blank">MembersFirst  <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>. I'm experienced in html, scss, node, sketch, js, and wcag/accesibility.
              Often, I am described as a hard working, fast learning, and "pixel perfect". I strive to make the integration between design and code fluid and seamless, while also keeping all audiences in mind.
              <br /><br />
              When I'm not working, I'm often hanging out with my pet chinchilla Simon, binging a show on Netflix, or enjoying a brew with my friends.
            </p>
            <br />
            <div class="separator"> ------------------------------------------------------------------------------------------------------------------------------------------------------ </div>
            <br />
            <div class="project_section">
              > recent projects<br />

              <div class="entry">
                <div class="project">
                  <h3>
                  $ cd <a href="https://www.myersparkcc.com" target="_blank" title="Link to Myers Park">Myers Park Country Club <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>
                </h3>
                  <div class="indent">
                    <p><span class="title_attr">role</span> : lead developer,</p>
                    <p><span class="title_attr">utilities</span> : [git, sketch, atom, cms, bootstrap],</p>
                    <p><span class="title_attr">languages</span> : [html, scss, jquery], </p>
                    <p><span class="title_attr">link(s)</span> : [<a href="/projects/myerspark" class="bye">learn more</a>, <a href="https://www.myersparkcc.com" target="_blank">visit site <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>],</p>
                    <p><span class="title_attr">launched</span> : 2018 </p>
                  </div>
                </div>
              </div>

              <div class="entry">
                <div class="project">
                  <h3>
                  $ cd <a href="https://itunes.apple.com/us/app/the-club-at-neptune-cove/id1156910282" target="_blank" title="Link to Mobile App iTunes store page"  target="_blank">Mobile App 2.0 <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>
                </h3>
                  <div class="indent">
                    <p><span class="title_attr">role</span> : developer / designer,</p>
                    <p><span class="title_attr">utilities</span> : [cordova, git, sketch, atom, webpack],</p>
                    <p><span class="title_attr">languages</span> : [html, scss, js], </p>
                    <p><span class="title_attr">link(s)</span> : [<a href="/projects/mobileapp" class="bye">learn more</a>, <a href="https://itunes.apple.com/us/app/the-club-at-neptune-cove/id1156910282" target="_blank">itunes <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>]                  </p>
                    <p><span class="title_attr">launched</span> : 2017 </p>
                  </div>

                </div>
              </div>

              <div class="entry">
                <div class="project">
                  <h3>
                  $ cd <a href="http://www.clubatibis.com" target="_blank" title="Link to Club at Ibis">
                    The Club at Ibis <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>
                </h3>
                  <div class="indent">
                    <p><span class="title_attr">role</span> : lead developer,</p>
                    <p><span class="title_attr">utilities</span> : [git, sketch, atom, cms, bootstrap],</p>
                    <p><span class="title_attr">languages</span> : [html, scss, jquery] </p>
                    <p><span class="title_attr">link(s)</span> : [<a href="/projects/ibis" class="bye">learn more</a>, <a href="https://www.clubatibis.com" target="_blank">visit site <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>],</p>
                    <p><span class="title_attr">launched</span> : 2018 </p>
                  </div>
                </div>
              </div>

              <div class="entry">
                <div class="project">
                  <h3>
                  $ cd <a href="https://www.manchestercountryclub.com" target="_blank" title="Link to Manchester Country Club">
                    Manchester Country Club <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>
                </h3>
                  <div class="indent">
                    <p><span class="title_attr">role</span> : lead developer,</p>
                    <p><span class="title_attr">utilities</span> : [git, photoshop, atom, cms, bootstrap],</p>
                    <p><span class="title_attr">languages</span> : [html, scss, jquery], </p>
                    <p><span class="title_attr">link(s)</span> : [<a href="/projects/manchester" class="bye">learn more</a>, <a href="https://www.manchestercountryclub.com" target="_blank">visit site <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>], </p>
                    <p><span class="title_attr">launched</span> : 2017 </p>
                    <p><span class="title_attr">award(s)</span> : [<a href="http://interactivemediaawards.com/winners/certificate.asp?param=767809&cat=1" target="_blank">IMA Best in Class <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>], </p>
                  </div>
                </div>
              </div>

              <div class="entry">
                <div class="project">
                  <h3>
                  $ cd <a href="https://www.colletonriverclub.com" target="_blank" title="Link to Neptune Cove">
                    Colleton River Club</a>
                </h3>
                  <div class="indent">
                    <p><span class="title_attr">role</span> : lead developer,</p>
                    <p><span class="title_attr">utilities</span> : [git, photoshop, atom, cms, bootstrap],</p>
                    <p><span class="title_attr">languages</span> : [html, scss, jquery], </p>
                    <p><span class="title_attr">link(s)</span> : [<a href="/projects/colleton" class="bye">learn more</a>, <a href="https://www.colletonriverclub.com" target="_blank">visit site <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>],</p>
                    <p><span class="title_attr">launched</span> : 2017 </p>
                    <p><span class="title_attr">award(s)</span> : [<a href="http://interactivemediaawards.com/winners/certificate.asp?param=767816&cat=1" target="_blank">IMA Best in Class <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a>], </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="separator"> ------------------------------------------------------------------------------------------------------------------------------------------------------ </div>
            <br />

            <div class="jobs_section">
              > relevant experience
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>front-end web developer</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">employer</span> : <a href="https://membersfirst.com" target="_blank">MembersFirst <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
                    <p><span class="title_attr">description</span> : develop websites from mockups, creating efficiencies within our internal process to decrease amount of time needed for site development and productivity, mantinence of CDN which covers over 300 sites, and solving tickets through the JIRA bug tracking software</p>
                    <p><span class="title_attr">duration</span> : Jan 2018 – present</p>
                    <p><span class="title_attr">location</span> : Wayland, Massachusetts</p>
                  </div>
                </div>
              </div>
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>interactive designer</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">employer</span> : <a href="https://membersfirst.com" target="_blank">MembersFirst <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
                    <p><span class="title_attr">description</span> : develop websites from mockups, creating mockups, giving design feedback to based on personal experience developing websites, and leading the responsive global email template project</p>
                    <p><span class="title_attr">duration</span> : May 2016 – Dec 2017</p>
                    <p><span class="title_attr">location</span> : Wayland, Massachusetts</p>
                  </div>
                </div>
              </div>
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>design intern</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">employer</span> : <a href="https://membersfirst.com" target="_blank">MembersFirst <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
                    <p><span class="title_attr">description</span> : provided support to design team with various projects include creating email templates, skinning mobile sites</p>
                    <p><span class="title_attr">duration</span> : Sep 2015 – May 2016</p>
                    <p><span class="title_attr">location</span> : Wayland, Massachusetts</p>
                  </div>
                </div>
              </div>
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>web developer & administrative intern</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">employer</span> : <a href="http://mwrta.com/" target="_blank">Metrowest Regional Transit Authority <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
                    <p><span class="title_attr">description</span> : designed a bus tracking interface used by the Metrowest region, developed and designed a high traffic website, and graphic design</p>
                    <p><span class="title_attr">duration</span> : Jun 2014 – Sep 2015</p>
                    <p><span class="title_attr">location</span> : Framingham, Massachusetts</p>
                  </div>
                </div>
              </div>
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>web developer & designer</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">employer</span> : <a href="https://downtownframinghaminc.org/" target="_blank">Framingham Downtown Renaissance <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
                    <p><span class="title_attr">description</span> : used squarespace developer mode to create an easy to use website for a community involvment</p>
                    <p><span class="title_attr">duration</span> : Jan 2014 – Jun 2014</p>
                    <p><span class="title_attr">location</span> : Framingham, Massachusetts</p>
                  </div>
                </div>
              </div>
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>web designer</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">employer</span> : <a href="https://wellesley.edu" target="_blank">Wellesley College <i class="fas fa-external-link-alt" aria-hidden="true"></i><span class="sr-only">(opens in new tab)</span></a></p>
                    <p><span class="title_attr">description</span> : provided website assistance to the human resources department at Wellesley College</p>
                    <p><span class="title_attr">duration</span> : Oct 2011 – Dec 2012</p>
                    <p><span class="title_attr">location</span> : Wellesley, Massachusetts</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="separator"> ------------------------------------------------------------------------------------------------------------------------------------------------------ </div>
            <br />
            <div class="school_section">
              > education
              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>BS Computer Science and Information System</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">institution</span> : Framingham State University</p>
                    <p><span class="title_attr">years attended</span> : 2012 – 2016</p>
                    <p><span class="title_attr">research study</span> : computer and information security through password protection, use of biometrics, and physical keys in terms of cost and ease of use.</p>
                  </div>
                </div>
              </div>

              <div class="entry">
                <div class="job">
                  <h3> $ cd <span>High School Diploma</span></h3>
                  <div class="indent">
                    <p><span class="title_attr">institution</span> : Natick High School</p>
                    <p><span class="title_attr">years attended</span> : 2009 – 2012</p>
                    <p><span class="title_attr">research study</span> : web design and development programs, web & graphic design, and training for adobe certification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            Like what you see? I'm available for freelance work and friendly conversation! <a href="mailto:caomicc@gmail.com">Send me an email!</a>
            <div class="contact-details">
              <ul>
                <li>Copyright &copy; 2018 by yours truly.</li>
                <li>Made with &#x1F49C; and &#x2728;</li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
