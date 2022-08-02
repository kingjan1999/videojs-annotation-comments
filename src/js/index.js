/*
    Load plugin and register to global videojs
*/

const AnnotationComments = require('./annotation_comments.js');

if (window.videojs) {
  ((videojs) => {
    videojs.registerPlugin('annotationComments', AnnotationComments(videojs));
  })(window.videojs);
}

module.exports = AnnotationComments;