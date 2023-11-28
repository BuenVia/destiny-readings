import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Section */}
      <div className='section'>
        <div className='bg-text card'>
          <h1 className='heading'>Destiny Reading's</h1>
          <p className='scroll'>Tarot, Oracle Readings</p>
          <p className='scroll'>Afternoon Tarot Tea Parties</p>
          <div className='dr__ltr scroll'>
            <span className='d__ltr'>D</span>
            <span className='r__ltr'>R</span>
          </div>
          <a href='#contact'><button>CONTACT US</button></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='section contact' id='contact'>
        <div className='bg-text'>
          <p className='contact__details'><span className='bold'>tel:</span> 07946 806655</p>
          <p className='contact__details'><span className='bold'>email:</span> hello@destinyreadings.co.uk</p>
          <div className='dr__ltr scroll'>
            <span className='d__ltr'>D</span>
            <span className='r__ltr'>R</span>
          </div>
          <p className='scroll'>"Bring me your concerns and together we will find a way forward"</p>
        </div>
      </div>

    </div>
  );
}

export default App;
