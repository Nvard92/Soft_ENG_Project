import React, { Component } from 'react';
import {ImagesUploader} from 'react-images-uploader';



class Profile extends Component {
   

  render() {
     
    return (
      
<div className="profilePhoto">
 <ImagesUploader
                url="http://localhost:9090/notmultiple"
                optimisticPreviews
                multiple={false}
                onLoadEnd={(err) => {
                    if (err) {
                        console.error(err);
                    }
                }}
                label="Upload a picture"
                />
                </div>

                

      
    );
  }
}

export default Profile;
