import './App.css';

function App() {
  return (
    <div className="App">
      {/* Top Section */}
      <div className='section'>
        <div className='bg-text'>
          <h1>Destiny Reading's</h1>
          <p>Tarot, Oracle Readings</p>
          <p>Afternoon Tarot Tea Parties</p>
          <div className='dr__ltr'>
            <span className='d__ltr'>D</span>
            <span className='r__ltr'>R</span>
          </div>
          <a href='#contact'><button>CONTACT US</button></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='section' id='contact'>
        <div className='bg-text'>
          <p><span className='bold'>TEL:</span> 07946 806655</p>
          <p><span className='bold'>EMAIL:</span> hello@destinyreadings.co.uk</p>
          <div className='dr__ltr'>
            <span className='d__ltr'>D</span>
            <span className='r__ltr'>R</span>
          </div>
          <p>"Bring me your concerns and together we will find a way forward"</p>
        </div>
      </div>

    </div>
  );
}

export default App;
