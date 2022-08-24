export const setFontSize = `
const WIDTH = 375; //设计稿尺寸
//  由于安卓取的宽高有时未必是有效值，所以此处取最大的(用于遮罩层)
function getMaxValue(num1, num2, num3) {
  var value = 0;
  if (num1 >= num2) {
    value = num1;
  } else {
    value = num2;
  }
  // if (value < num3) {
  //   value = num3;
  // }
  return value;
}
const setView = () => {
  setTimeout(function () {
    // var scrollHeight = getMaxValue(
    //   document.documentElement.clientHeight,
    //   document.body.clientHeight,
    //   window.screen.height,
    // );
    var scrollwidth = getMaxValue(
      document.documentElement.clientWidth,
      window.screen.width,
    );
    console.log(scrollwidth, 'scrollwidth');

    document.documentElement.style.fontSize =
      (100 * scrollwidth) / WIDTH + 'px';
  }, 300);
};
setView();
window.addEventListener(
  'onorientationchange' in window ? 'orientationchange' : 'resize',
  setView,
  false,
);

`;
