## Work accomplished

* Work files located in the `App` folder
* Ready project is in `Dist` folder

#### Build insctructions

1. Download
2. Unzip
3. Open terminal and `cd` to projects folder
  ``` bash
  $> cd /your/local-path/to-project
  ```
4. Install gulp:

  ``` bash
  $> npm install gulp
  ```
5. You can use `gulp clean` to erase entire `Dist` directory

  ``` bash
  $> gulp clean
  ```

6. And `gulp` to build new one from `App` folder

  ``` bash
  $> gulp
  ```
7. **Enjoy!**


#### Index.html optimization

1. Replaced remote images with optimized local
2. Replaced full size pizza image with optimized preview image
3. Added async tag to `analytics.js`
4. Updated inlined analytics script with registered id
5. Used Web Font Loader for loading google fonts https://github.com/typekit/webfontloader
6. Moved all scripts to bottom of the file
7. Minified all

**Got 93/100 on mobile 95/100 on desktop**

#### Pizza.html optimization

1. Optimized `pizzeria.jpg`
2. Inlined `style.css`
3. Removed scrollTop calculation outside for-in loop in `updatePositions()` to avoid extra calculations
4. Moved dx and newwidth variables outside for-in loop in `changePizzaSizes()` to avoid extra calculations
5. Replaced `querySelectorAll` by `getElementsByClassName`, because its faster - https://jsperf.com/getelementsbyclassname-vs-queryselectorall
6. Changed the number of generated moving pizzas based on viewport height instead of plain number
7. Added "will-change: transform" to `.mover` class

**Got 89/100 on mobile 95/100 on desktop**

*p.s. not sure about inlining bootstrap-grid.css, to get higher score on speed insight. its too big.*

*Live version:*
[https://rakhmanovr.github.io/mobile-portfolio-optimization/dist/views/pizza.html]]
