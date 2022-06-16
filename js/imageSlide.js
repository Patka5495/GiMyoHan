var bannerLeft = 0;
var first = 1;
var last;
var imgCnt = 0;
var $img = $(".tri_images");
var $first;
var $last;

$img.each(function () {
  $(this).css("top", bannerLeft);
  bannerLeft += $(this).height() + 0;
  $(this).attr("id", "banner" + ++imgCnt);
});
if (imgCnt > 3) {
  last = imgCnt;
  setInterval(function () {
    $img.each(function () {
      $(this).css("top", $(this).position().top + 1);
    });
    $first = $("#banner" + first);
    $last = $("#banner" + last);
    if ($last.position().top > 760) {
      $last.css("top", $first.position().top - $last.height() + 0);
      first--;
      last--;
      if (last == 0) {
        last = 4;
      }
      if (first == 0) {
        first = 4;
      }
    }
  }, 10);
}
