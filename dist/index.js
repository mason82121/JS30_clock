'use strict';

(function () {
    var hourHand = document.querySelector('.hand-hour'),
        minHand = document.querySelector('.hand-min'),
        secHand = document.querySelector('.hand-sec');
    function clock() {
        var now = new Date();
        var nowSec = now.getSeconds(),
            nowMin = now.getMinutes(),
            nowHour = now.getHours();
        // console.log(now.getSeconds());
        var secDegree = 360 / 60 * nowSec,
            minDegree = 360 / 60 * nowMin + 360 / 60 / 60 * nowSec,
            hourDegree = 360 / 12 * (nowHour % 12) + 360 / 12 / 60 * nowMin;
        secHand.style.transform = 'rotate(' + secDegree + 'deg)';
        minHand.style.transform = 'rotate(' + minDegree + 'deg)';
        hourHand.style.transform = 'rotate(' + hourDegree + 'deg)';
    }

    clock(); //初始化畫面
    setInterval(clock, 1000);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2luZGV4LmpzIl0sIm5hbWVzIjpbImhvdXJIYW5kIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWluSGFuZCIsInNlY0hhbmQiLCJjbG9jayIsIm5vdyIsIkRhdGUiLCJub3dTZWMiLCJnZXRTZWNvbmRzIiwibm93TWluIiwiZ2V0TWludXRlcyIsIm5vd0hvdXIiLCJnZXRIb3VycyIsInNlY0RlZ3JlZSIsIm1pbkRlZ3JlZSIsImhvdXJEZWdyZWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBSTtBQUNILFFBQU1BLFdBQVdDLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7QUFBQSxRQUNNQyxVQUFVRixTQUFTQyxhQUFULENBQXVCLFdBQXZCLENBRGhCO0FBQUEsUUFFTUUsVUFBVUgsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixDQUZoQjtBQUdBLGFBQVNHLEtBQVQsR0FBZ0I7QUFDYixZQUFJQyxNQUFNLElBQUlDLElBQUosRUFBVjtBQUNBLFlBQUlDLFNBQVNGLElBQUlHLFVBQUosRUFBYjtBQUFBLFlBQ0lDLFNBQVNKLElBQUlLLFVBQUosRUFEYjtBQUFBLFlBRUlDLFVBQVVOLElBQUlPLFFBQUosRUFGZDtBQUdBO0FBQ0EsWUFBSUMsWUFBWSxNQUFNLEVBQU4sR0FBV04sTUFBM0I7QUFBQSxZQUNJTyxZQUFZLE1BQU0sRUFBTixHQUFXTCxNQUFYLEdBQW9CLE1BQU0sRUFBTixHQUFXLEVBQVgsR0FBZ0JGLE1BRHBEO0FBQUEsWUFFSVEsYUFBYSxNQUFNLEVBQU4sSUFBWUosVUFBVSxFQUF0QixJQUE0QixNQUFNLEVBQU4sR0FBVyxFQUFYLEdBQWdCRixNQUY3RDtBQUdBTixnQkFBUWEsS0FBUixDQUFjQyxTQUFkLGVBQW9DSixTQUFwQztBQUNBWCxnQkFBUWMsS0FBUixDQUFjQyxTQUFkLGVBQW9DSCxTQUFwQztBQUNBZixpQkFBU2lCLEtBQVQsQ0FBZUMsU0FBZixlQUFxQ0YsVUFBckM7QUFDRjs7QUFFRFgsWUFsQkcsQ0FrQk07QUFDVGMsZ0JBQVlkLEtBQVosRUFBbUIsSUFBbkI7QUFFRCxDQXJCRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKT0+e1xyXG4gIGNvbnN0IGhvdXJIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbmQtaG91cicpLFxyXG4gICAgICAgIG1pbkhhbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGFuZC1taW4nKSxcclxuICAgICAgICBzZWNIYW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhhbmQtc2VjJyk7XHJcbiAgZnVuY3Rpb24gY2xvY2soKXtcclxuICAgICBsZXQgbm93ID0gbmV3IERhdGUoKTtcclxuICAgICBsZXQgbm93U2VjID0gbm93LmdldFNlY29uZHMoKSxcclxuICAgICAgICAgbm93TWluID0gbm93LmdldE1pbnV0ZXMoKSxcclxuICAgICAgICAgbm93SG91ciA9IG5vdy5nZXRIb3VycygpO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKG5vdy5nZXRTZWNvbmRzKCkpO1xyXG4gICAgIGxldCBzZWNEZWdyZWUgPSAzNjAgLyA2MCAqIG5vd1NlYyxcclxuICAgICAgICAgbWluRGVncmVlID0gMzYwIC8gNjAgKiBub3dNaW4gKyAzNjAgLyA2MCAvIDYwICogbm93U2VjLFxyXG4gICAgICAgICBob3VyRGVncmVlID0gMzYwIC8gMTIgKiAobm93SG91ciAlIDEyKSArIDM2MCAvIDEyIC8gNjAgKiBub3dNaW47XHJcbiAgICAgc2VjSGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7c2VjRGVncmVlfWRlZylgO1xyXG4gICAgIG1pbkhhbmQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke21pbkRlZ3JlZX1kZWcpYDtcclxuICAgICBob3VySGFuZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7aG91ckRlZ3JlZX1kZWcpYDtcclxuICB9XHJcblxyXG4gIGNsb2NrKCk7IC8v5Yid5aeL5YyW55Wr6Z2iXHJcbiAgc2V0SW50ZXJ2YWwoY2xvY2ssIDEwMDApO1xyXG5cclxufSkoKSJdfQ==