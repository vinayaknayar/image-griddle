import React, { useContext, useState } from 'react';
import { ImageContext } from '../App';
import Normal from './layout/Normal';
import Masonry from './layout/Masonry'
import Triplet from './layout/Triplet';
import '../App.css';

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  const [layoutOption, setLayoutOption] = useState(2);
  const layoutOptions = {
    1: 'Normal',
    2: 'Masonry',
    3: 'Triplet',
  };

  const toggleLayout = () => {
    setLayoutOption(prevOption => (prevOption === 3 ? 1 : prevOption + 1));
  };

  const renderLayoutOption = () => {
    switch (layoutOption) {
      case 1:
        return <Normal response={response} isLoading={isLoading} />;
      case 2:
        return <Masonry response={response} isLoading={isLoading} />;
      case 3:
        return <Triplet response={response} isLoading={isLoading} />;
      default:
        return null;
    }
  };

  return (
    <>
      <h1 className="text-center mt-6 underline text-2xl">Results for "{searchImage || 'Food'}"</h1>
      <div className="flex justify-between align-center m-4">
        <p className="text-lg font-semibold text-cyan-900 ">
          Current Layout: <span className="underline">{layoutOptions[layoutOption]}</span>
        </p>
        <button
          className="bg-[#083344] px-2.5 py-2 text-slate-100 font-semibold rounded-md focus:ring-1 focus:ring-cyan-900 disabled:bg-gray-400"
          onClick={toggleLayout}
        >
          Toggle Layout
        </button>
      </div>
      {renderLayoutOption()}
    </>
  );
};

export default Images;
