import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./images";
import LeftSideGallery from "../leftSideGallery/LeftSideGallery"
import "./photo.css"

export default function Photo() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
          <Gallery photos={photos} onClick={openLightbox} id="maingallery" />
          <ModalGateway>
          {viewerIsOpen ? 
                    <Modal onClose={closeLightbox} >
                           { viewerIsOpen ?     
                                  <div className="modal-gallery" > 
                                      <div className="corosel">
                                          <Carousel
                                              currentIndex={currentImage}
                                              views={photos.map((x) => ({
                                                ...x,
                                                srcset: x.srcSet,
                                                caption: x.title
                                              }))}
                                              />   
                                      </div>
                                      <div className="comment-section">
                                          <LeftSideGallery/>
                                      </div>
                                  </div>  
                                  : null
                                  }
                    </Modal>
                : null}
           </ModalGateway>
    {/* { viewerIsOpen ?     
       <div className="modal-gallery" > 
          <div className="corosel">
              <Carousel
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                  />   
          </div>
          <div className="comment-section">
              <LeftSideGallery/>
          </div>
      </div>  
      : null
      } */}
    </div>
    
  );
}

