import React from 'react';
import BannerSlider from '../../components/BannerSlider';
import CreateStoreForm from '../../components/CreateStoreForm';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
   
      <BannerSlider /> 
      
  
      <div className="container mx-auto px-4 py-12">
        <CreateStoreForm />
      </div>
    </div>
  );
};

export default Home;