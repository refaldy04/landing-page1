import ReactFullpage from '@fullpage/react-fullpage';
import './App.css';
import ControlledCarousel from './components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IconContext } from 'react-icons';
import { SiMcdonalds } from 'react-icons/si';
import { SiStarbucks } from 'react-icons/si';
import { SiKfc } from 'react-icons/si';
import { SiPremierleague } from 'react-icons/si';
import { SiReactivex } from 'react-icons/si';

function App() {
  return (
    <>
      {/* navbar navbar-expand-lg bg-body-tertiary */}
      {/* <nav class='navbar navbar-expand-lg fixed-top my-navbar'>
        <div class='container-fluid'>
          <a class='navbar-brand' href='#'>
            Navbar
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse ' id='navbarSupportedContent'>
            <ul class='navbar-nav'>
              <li class='nav-item active'>
                <a class='nav-link' href='#'>
                  Home <span class='sr-only'>(current)</span>
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Features
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link' href='#'>
                  Pricing
                </a>
              </li>
              <li class='nav-item'>
                <a class='nav-link disabled' href='#'>
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <ReactFullpage
        //fullpage options

        licenseKey={'YOUR_KEY_HERE'}
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <>
              <ReactFullpage.Wrapper>
                <div className='section section1 text-center d-flex flex-column align-items-center justify-content-center h-100 pt-5'>
                  <div class='container mt-5'>
                    <h1 class='header font-weight-light'>MyWebsite</h1>
                    <p class='lead fw-bold mt-3'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam in dui mauris.
                    </p>

                    <button
                      onClick={() => fullpageApi.moveSectionDown()}
                      className='btn btn-dark btn-lg mt-3'>
                      Click me to move down
                    </button>
                  </div>
                  <div className='d-flex justify-content-center gap-3 align-items-center mt-5'>
                    <p className='orange-text fs-3 fw-semibold mt-2'>
                      Trusted by:
                    </p>
                    <IconContext.Provider
                      value={{ size: '2.5em', color: '#fec401' }}>
                      <div>
                        <SiMcdonalds />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ size: '2.5em', color: '#fec401' }}>
                      <div>
                        <SiStarbucks />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ size: '2.5em', color: '#fec401' }}>
                      <div>
                        <SiKfc />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ size: '2.5em', color: '#fec401' }}>
                      <div>
                        <SiPremierleague />
                      </div>
                    </IconContext.Provider>
                    <IconContext.Provider
                      value={{ size: '2.5em', color: '#fec401' }}>
                      <div>
                        <SiReactivex />
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
                <div className='section section2 mt-0'>
                  <ControlledCarousel />
                </div>
                <div className='section section3 mt-0'>
                  <Container>
                    <Row>
                      <Col className='d-flex flex-column justify-content-center align-items-start'>
                        <h1 className='header text-light'>Quality</h1>
                        <p className='text-light fw-bold fs-3 text-start'>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Qui, dolor!
                        </p>
                      </Col>
                      <Col>
                        <div class='card' style={{ width: '100%' }}>
                          <img
                            src='../public/sample1.jpg'
                            class='card-img-top'
                            alt='...'
                          />
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className='section section4 mt-0'>
                  <h1 className='header text-light'>Buy Now!</h1>
                  <p className='text-light fw-bol fs-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque, amet?
                  </p>
                </div>
              </ReactFullpage.Wrapper>
            </>
          );
        }}
      />
    </>
  );
}

export default App;
