$(document).ready(function(){ 
    /*css에서 효과 다 넣은 상태라 제이쿼리에서는 넣었다 뺏다만 해주면 됨*/
    //일반함수 사용

// index - main visual    이미지 전환효과 함수 생성 -> 이미지 따로

showImg=0;
nextImg=0;

function changeImg(){  //일반함수

    nextImg++;
    ImgCount=$(".mainvisual .visual_image li").length;

    if(nextImg==ImgCount){  //마지막 이미지일때 다시 첫번째 이미지로
        nextImg=0;
    }

    //실제 움직이는,,,
    $(".mainvisual .visual_image li").eq(showImg).removeClass("imgVisible"); //비주얼    imgVisible->css에서꾸민거 
    $(".mainvisual .visual_image li").eq(nextImg).addClass("imgVisible"); //비주얼
    $(".mainvisual .btn>span").eq(nextImg).addClass("active");  //선택된 하단 버튼
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");  //기존 하단 버튼
    showImg=nextImg;  //새 이미지는 헌 이미지로,,

}

// setInterval(changeImg,5000); //5000=5초
timer1=setInterval(changeImg,5000);  //timer1 변수 넣어주고


//텍스트 전환효과 함수 생성 -> 텍스트 따로

showText=0;
nextText=0;

function changeText(){  //일반함수

    nextText++;
    TextCount=$(".mainvisual .visual_text li").length;

    if(nextText==TextCount){  //마지막 텍스트일때 다시 첫번째 텍스트로
        nextText=0;
    }

    $(".mainvisual .visual_text li .Vtext").eq(showText).removeClass("textVisible"); //비주얼    imgVisible->css에서꾸민거 
    $(".mainvisual .visual_text li .Vtext").eq(nextText).addClass("textVisible"); //비주얼
    $(".mainvisual .btn>span").eq(nextText).addClass("active");  //선택된 하단 버튼
    $(".mainvisual .btn>span").eq(showText).removeClass("active");  //기존 하단 버튼
    showText=nextText;  //새 이미지는 헌 이미지로,,

}

timer2=setInterval(changeText,5000);  


// index - main visual 좌측 상단 버튼 클릭시,,,
$(".mainvisual .btn>span").click(function(){

    clearInterval(timer1);  //버튼 클릭시 자동함수 해지
    clearInterval(timer2);

    nextImg=$(this).index();  //0,1,2,,,,,,,,
    nextText=$(this).index();

    $(".mainvisual .visual_image li").eq(showImg).removeClass("imgVisible"); 
    $(".mainvisual .visual_image li").eq(nextImg).addClass("imgVisible");
    $(".mainvisual .btn>span").eq(nextImg).addClass("active");  //선택된 하단 버튼
    $(".mainvisual .btn>span").eq(showImg).removeClass("active");  //기존 하단 버튼
    showImg=nextImg;

    $(".mainvisual .visual_text li .Vtext").eq(showText).removeClass("textVisible");
    $(".mainvisual .visual_text li .Vtext").eq(nextText).addClass("textVisible");
    $(".mainvisual .btn>span").eq(nextText).addClass("active");  //선택된 하단 버튼
    $(".mainvisual .btn>span").eq(showText).removeClass("active");  //기존 하단 버튼
    showText=nextText;

    timer1=setInterval(changeImg,5000);
    timer2=setInterval(changeText,5000);
});


    // index - main menu     스크롤 시 내려오는 고정된 탑메뉴,,,,,★★★
    $(window).scroll(function(){

        if ($(this).scrollTop()>300){
            $(".nav_fix").css("margin-top","0px");
        }else{
            $(".nav_fix").css("margin-top","-120px");
        }

    });




    // beer - tab menu          ★★
    $(document).ready(function(){

        $(".panel li:not(:first)").hide();   //$(".panel>li:not(:first)").hide(); 적용안될때,,,시도,,,
        //첫번째 제외한 나머지 내용 숨기기
    
        $(".tab li a").click(function(){
            $(".tab li a").removeClass("selected"); //기존에 선택된(활성화시킨) selected 클래스 삭제
            $(this).addClass("selected");         //새로 선택된 selected 클래스 생성
            $(".panel li").hide();                  //기존에 보여진 내용 숨기기
            $($(this).attr("href")).show();         //새로 선택된 내용 href에 연결된 내용 보여주기
    
            return false; //a태그 기능 차단
    
        });
    
    });





    



    // about - typing txt ~~~~~~~
    var typingBool=false; 
    var typingIdx=0; 
    var liIndex=0;
    var liLength=$(".typing-txt>ul>li").length;

    // 타이핑될 텍스트를 가져온다 
    var typingTxt=$(".typing-txt>ul>li").eq(liIndex).text(); 
    //liIndex 인덱스로 구분해 한줄씩 가져옴

    typingTxt=typingTxt.split(""); // 한글자씩 잘라 배열로만든다

    if(typingBool==false){ // 타이핑이 진행되지 않았다면 
        typingBool=true; 
        var tyInt = setInterval(typing,100); // 반복동작 
    } 

    function typing(){ 
        $(".typing ul li").removeClass("on");
        $(".typing ul li").eq(liIndex).addClass("on");
    //현재 타이핑되는 문장에만 커서 애니메이션을 넣어준다.

    if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
        $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
        typingIdx++; 
    } else{ //한문장이끝나면
        if(liIndex<liLength-1){
        //다음문장으로  가기위해 인덱스를 1증가
            liIndex++; 
        //다음문장을 타이핑하기위한 셋팅
            typingIdx=0;
            typingBool = false; 
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
        
        //다음문장 타이핑전 1초 쉰다
            clearInterval(tyInt);
            //타이핑종료
        
            setTimeout(function(){
            //1초후에 다시 타이핑 반복 시작
                tyInt = setInterval(typing,100);
            },1000);
            } else if(liIndex==liLength-1){
            
            //마지막 문장까지 써지면 반복종료
            clearInterval(tyInt);
            
            //1초후
            setTimeout(function(){
                //사용했던 변수 초기화
                typingBool = false; 
            liIndex=0;
            typingIdx=-0;
                
                //첫번째 문장으로 셋팅
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
                //타이핑 결과 모두 지우기
            $(".typing ul li").html("")
                
                //반복시작
                tyInt = setInterval(typing,100);
            }, 1000);
            
            
            }
        } 
    }  // about - typing txt 



});