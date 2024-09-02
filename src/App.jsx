import profile from './assets/profile.jpg';
function App() {
  return (
    <div>
      <div className='main-left'>
      </div>
      <div className="border-page">
        <div className="content-page">
          <div className='profile-img'>
            <img src={profile}/>
          </div>
          <div className='format-text'>
            <h1>
              The Jadiupheu
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad id, dolores ipsa, rem accusamus porro debitis iste nihil veritatis odit consequatur asperiores veniam doloremque incidunt quod nesciunt corporis molestiae. Impedit!</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt natus animi illum, culpa placeat odit sapiente consequuntur ipsam tempora sunt nam quae numquam inventore voluptatibus doloribus dolorum, est iste atque?</p>
            <div className='format-button'>
              <button>
                Follow
              </button>
              <button>
                ver mas
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-page">
        <div className="content-page">
          <div className='format-text size-content-text'>
            <h1 className='subtitle'>Welcome to Jadiupheu</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus reprehenderit iure, numquam velit doloremque voluptatum saepe magnam laudantium, impedit quisquam vero ipsum dicta, officia quos quam. Pariatur est impedit illum?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est debitis neque cumque voluptatum quod ex sint nihil rem autem, nobis qui aspernatur ratione illo deserunt quas, cum aliquam perspiciatis eaque?
            </p>
          </div>
          <div className='content-form'>
            <div className='border-form'>
             <form action="">
                <h2 className='color-skin-title'>Welcome</h2>
                <div className='border-color-skin'>
                  <p className='color-skin'>nombre</p>
                </div>
                <label></label>
                <div className='border-color-skin'>
                  <p className='color-skin'>apellido</p>
                  <p className='color-skin-line'></p>
                </div>
                <label></label>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='main-right'>
      </div>
    </div>
  );
}

export default App;
