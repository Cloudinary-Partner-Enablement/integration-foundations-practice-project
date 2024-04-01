////////////////////////////////////
//// VIDEO PLAYER CODE
////////////////////////////////////
const demoplayer = cloudinary.videoPlayer("cld-video-player", {
  cloudName: "cloudName",
  autoplay: true,
  loop: true,
  controls: false,
});
demoplayer.source("a_video_file_publicID");
