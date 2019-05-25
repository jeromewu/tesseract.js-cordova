const doOCR = () => {
  const image = document.getElementById('image');
  const result = document.getElementById('result');

  const { TesseractWorker } = Tesseract;
  const worker = new TesseractWorker({
    workerPath: 'js/worker.min.js',
    corePath: 'js/tesseract-core.wasm.js',
  });

  const engTraineddata = 'file:///android_asset/www/traineddata/eng.traineddata';

  resolveLocalFileSystemURL(engTraineddata, (fileEntry) => {
    fileEntry.file((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {

        const TESSDATA_ENG = {
          code: 'eng',
          gzip: false,
          data: new Uint8Array(reader.result),
        };

        console.log(TESSDATA_ENG.data.length);
        
        worker.recognize(image, [TESSDATA_ENG])
          .progress(p => console.log(JSON.stringify(p)))
          .then(({ text }) => {
            result.innerHTML = `<p>OCR Result:</p><p>${text}</p>`;
          })
      }
      reader.readAsArrayBuffer(file);
    })
  }, (e) => {
    console.log(e.code);
  })

}

const startBtn = document.getElementById('start-btn');
startBtn.onclick = doOCR;

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  const message = document.getElementById('message');
  message.innerText = 'Device is ready. You can now hit the button. :)';
}
