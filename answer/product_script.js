////////////////////////////////////
//// PRODUCT GALLERY CODE
////////////////////////////////////
const myGallery = cloudinary.galleryWidget({
  container: "#my-gallery",
  cloudName: "cloudName",
  mediaAssets: ["publicID1", "publicID2", "publicID3"],
  carouselStyle: "indicators",
  indicatorProps: {
    shape: "radius",
  },
  themeProps: {
    primary: "#680E4B",
    onPrimary: "#42033D",
    active: "#7C72A0",
  },
});

myGallery.render();

////////////////////////////////////
//// UPLOAD WIDGET CODE
////////////////////////////////////
const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: "cloudName",
    uploadPreset: "practice_preset",
    maxFileSize: 5500000,
    cropping: true,
    folder: "upload_widget_practice",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
    }
  }
);

document.getElementById("upload-widget").addEventListener(
  "click",
  function () {
    myWidget.open();
  },
  false
);
