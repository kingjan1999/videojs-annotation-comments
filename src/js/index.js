/*
    Load plugin and register to global videojs
*/

if (window.videojs) {
  ((videojs) => {
    const AnnotationComments = require('./annotation_comments.js');
    videojs.registerPlugin('annotationComments', AnnotationComments(videojs));
  })(window.videojs);
}
