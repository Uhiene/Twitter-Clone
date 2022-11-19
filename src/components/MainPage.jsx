import React from 'react'

const MainPage = () => {
  return (
    <div>
        <Header />
        <Post />
        <Tweets />
    </div>
  )
}

const Header = () => {
  return (
    <div>Home</div>
  );
}

const Post = () => {
  return (
    <div className='border-b-2 border-slate-500'>
      <img src="" alt="" />
      <div>
        <p>Whats Happeneing</p>
        <div>
          <div></div>
          <button className="px-4 p-2 bg-blue-500 text-white rounded-2xl">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};
const Tweets = () => {
  return (
    <div className='border-b-2 border-slate-500'>
      <img src="" alt="" />
      <div>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, voluptatibus.</p>
        <div></div>
      </div>
    </div>
  );
};

export default MainPage