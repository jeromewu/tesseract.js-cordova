# tesseract.js-cordova

> Still Work In Progress...

An example to run tesseract.js in Cordova

## Install

Need to install Android environment first: https://cordova.apache.org/docs/en/9.x/guide/platforms/android/index.html

```shell
$ npm install
```

## Usage

```
$ npm start
```

Then you can check the app in emulator or physical phone.

## Issues

I think the code is right,  but the devices I have cannot complete the OCR, it always end up with memory issue:

```
05-25 20:44:44.399 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"loading tesseract core","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:44:44.605 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"loading tesseract core","progress":1}", source: file:///android_asset/www/js/main.js (25)
05-25 20:44:44.607 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"initializing tesseract","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:44:46.160 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"initialized tesseract","progress":1}", source: file:///android_asset/www/js/main.js (25)
05-25 20:44:46.162 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"loading language traineddata","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:44:50.436 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"loaded language traineddata","progress":1}", source: file:///android_asset/www/js/main.js (25)
05-25 20:44:50.437 31097 31097 I chromium: [INFO:CONSOLE(25)] "{"status":"initializing api","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:45:21.363 31097 31097 I chromium: [INFO:CONSOLE(8)] "Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value 268435456, (2) com
pile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ", sou
rce: file:///android_asset/www/js/tesseract-core.wasm.js (8)
05-25 20:45:21.366 31097 31097 I chromium: [INFO:CONSOLE(8)] "Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value 268435456, (2) com
pile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ", sou
rce: file:///android_asset/www/js/tesseract-core.wasm.js (8)
05-25 20:45:21.370 31097 31097 I chromium: [INFO:CONSOLE(0)] "Uncaught (in promise) abort("Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the cur
rent value 268435456, (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with
  -s ABORTING_MALLOC=0 "). Build with -s ASSERTIONS=1 for more info.", source: blob:file:///f726705a-c88a-47ce-8d23-a6ae0c15005c (0)
```

If we follow the suggest and build with `ALLOW_MEMORY_GROWTH`, the output message is:

```
05-25 20:46:45.231 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"loading tesseract core","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:46:45.457 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"loading tesseract core","progress":1}", source: file:///android_asset/www/js/main.js (25)
05-25 20:46:45.458 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"initializing tesseract","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:46:47.088 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"initialized tesseract","progress":1}", source: file:///android_asset/www/js/main.js (25)
05-25 20:46:47.089 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"loading language traineddata","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:46:49.481 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"loaded language traineddata","progress":1}", source: file:///android_asset/www/js/main.js (25)
05-25 20:46:49.482 32098 32098 I chromium: [INFO:CONSOLE(25)] "{"status":"initializing api","progress":0}", source: file:///android_asset/www/js/main.js (25)
05-25 20:47:20.868 32098 32098 I chromium: [INFO:CONSOLE(77)] "Uncaught (in promise) RuntimeError: memory access out of bounds", source: wasm-0088e9b2 (77)
```

No solution, so pending for now.
