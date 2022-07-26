// Setup player and plugin
(function () {
  const player = window.videojs('the_video', {
    controlBar: {
      volumePanel: { inline: false }
    }
  });
  player.muted(true);
  player.annotationComments({
    annotationsObjects: window.demoAnnotations,
    bindArrowKeys: true,
    meta: {
      user_id: 3,
      user_name: 'Guest'
    }
  });
})();

// Intercept VAC logs and port them to console UI
(function () {
  window.VAC_DEBUG = true;
  const $console = document.querySelector('.console');
  // eslint-disable-next-line no-console
  const consoleLog = console.log;

  // eslint-disable-next-line no-console
  console.log = function (msg) {
    if (msg === '::VAC::') {
      let output = '';

      for (let i = 0; i <= arguments.length; i++) {
        output = `${output} ${JSON.stringify(arguments[i])}`;
      }

      // Remove extra quotes and any undefined
      output = output.replace(/\"/g, '').trim();
      output = output.replace('undefined', '');
      output = `>> ${output}`;

      const $p = document.createElement('<p/>');
      $p.textContent = output;
      $console.appendChild($p);
      $console.scrollTop = $console[0].scrollHeight;
    }
    consoleLog.apply(console, arguments);
  };
})();

document.querySelector('.clear-console-btn').addEventListener('click', function () {
  const console = document.querySelector('.console');
  while(console.firstChild)
    console.removeChild(console.firstChild);
});
