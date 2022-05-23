// 맨처음 화면

var bannerLeft=0;
var first=1;
var last;
var imgCnt=0;
var $img = $(".tri_images");
var $first;
var $last;

$img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
    $(this).css("top",bannerLeft);
    bannerLeft += $(this).height()+0;
    $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
});

if( imgCnt > 3){                //배너 9개 이상이면 이동시킴
    last = imgCnt;
    setInterval(function() {
        $img.each(function(){
            $(this).css("top", $(this).position().top-1); // 1px씩 왼쪽으로 이동
        });
        $first = $("#banner"+first);
        $last = $("#banner"+last);
        if($first.position().top < -253) {    // 제일 앞에 배너 제일 뒤로 옮김
            $first.css("top", $last.position().top + $last.height()+0 );
            first++;
            last++;
            if(last > imgCnt) { last=1; }   
            if(first > imgCnt) { first=1; }
        }
    }, 10);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면 깔끔하게 변경가능하다     
} 