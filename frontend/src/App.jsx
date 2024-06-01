import React from 'react';

import './App.scss';
// import PhotoListItem from './components/PhotoListItem';
// import TopicListItem from 'components/TopicListItem';
// import PhotoList from './components/PhotoList';
// import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';


// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute/>
    </div>
  );
};

export default App;
