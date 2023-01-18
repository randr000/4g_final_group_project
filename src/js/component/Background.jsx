import { isIndexedDBAvailable } from '@firebase/util';
import React, { useState, useEffect } from 'react';

const Background = () => {

    const [isVideoLoading, setIsVideoLoading] = useState(true);

    function onLoadedData() {
        setIsVideoLoading(false);
    }

    useEffect(() => {
      console.log(isVideoLoading);
    }, [isVideoLoading])

    return (
      <div className="video">

        {
          isVideoLoading &&
          <div className="text-primary text-center fs-1"> Loading... 
            <span className="spinner-border" role="status"></span>
          </div>
        }
          <video  
                muted
                autoPlay={"autoplay"}
                preload="auto"
                loop
                onLoadedData={onLoadedData}
                style={{
                    position:"flex",
                    width: "100%",
                }} 
          >
            <source src="https://sharedby.blomp.com/Kwhdlx" type="video/mp4"/>
          </video>
        
      </div>
  );
};

export default Background;