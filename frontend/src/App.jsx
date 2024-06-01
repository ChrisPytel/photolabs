import React from 'react';

import './App.scss';
// import PhotoListItem from './components/PhotoListItem';
// import TopicListItem from 'components/TopicListItem';
// import PhotoList from './components/PhotoList';
// import TopicList from 'components/TopicList';
// import TopNavigation from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import topics from 'mocks/topics';
import photos from 'mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">
      <HomeRoute topicData={topics} photoData={photos}/>
    </div>
  );
};

export default App;
