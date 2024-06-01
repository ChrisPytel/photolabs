import React, { useState } from 'react';

//Imported Styles
import './App.scss';

//Imported Datasets
import topics from 'mocks/topics';
import photos from 'mocks/photos';

//Imported Components
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [activeModal, setActiveModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute topicData={topics} photoData={photos} setActiveModal={setActiveModal}/>
      {activeModal ? <PhotoDetailsModal/> : <></>}
    </div>
  );
};

export default App;
