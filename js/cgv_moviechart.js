window.onload =function(){
    //로그인 확인
    if(window.localStorage?.Loging){
        if(window.localStorage.Loging=='true'){
            document.querySelectorAll('.login_menu li')[0].style.display='none'
            document.querySelectorAll('.login_menu li')[1].style.display='none'
        }else{
            document.querySelectorAll('.login_menu li')[0].style.display='block'
            document.querySelectorAll('.login_menu li')[1].style.display='block'
        }
    }

    //푸터
    document.querySelector('.familysite_list').style.display ='none'
//스크롤
document.querySelector('.familysite_wrap h3').onclick = function(){
    document.querySelector('.familysite_list').style.display =  document.querySelector('.familysite_list').style.display =='none'? 'block' : 'none'
    if(document.querySelector('.familysite_list').style.display =='block'){
        document.querySelector('.familysite_wrap h3 a').style.background='url(../img/arrow_D_up.png) 146px no-repeat'
    }else{
        document.querySelector('.familysite_wrap h3 a').style.background='url(../img/arrow_D.png) 146px no-repeat'
    }
}
let windowYscroll=''
let fixnav = document.querySelector('.fixedNav')
window.onscroll = function(){
    let footertopbtn = document.querySelector('.fixedBtn')
    windowYscroll=window.pageYOffset;
    if(document.querySelector('.adTop').style.display!='none' && windowYscroll > 250){
        fixnav.style.display = 'block'
        fixnav.style.position = 'fixed'
        footertopbtn.style.display = 'flex'
    }else if(document.querySelector('.adTop').style.display=='none' && windowYscroll > 160){
        fixnav.style.display = 'block'
        fixnav.style.position = 'fixed'
        footertopbtn.style.display = 'block'
    }else{
        fixnav.style.display = 'none'
        fixnav.style.position = 'fixed'
        footertopbtn.style.display = 'none'
    }
}
let fixsub = document.querySelectorAll('.fixedNav_wrap .sub_menu,.fixedNav_wrap .nav_bg')
document.querySelectorAll('.fixedNav_wrap .sub_menu,.fixedNav_wrap .nav_bg')[0].style.top='60px'

fixnav.onmouseenter = function(){
    for(let x of fixsub){
        x.style='height:270px'
    } document.querySelectorAll('.fixedNav_wrap .sub_menu,.fixedNav_wrap .nav_bg')[0].style.top='60px'
}
fixnav.onmouseleave=function(){
    for(let x of fixsub){
        x.style='height:0px'
        document.querySelectorAll('.fixedNav_wrap .sub_menu,.fixedNav_wrap .nav_bg')[0].style.top='60px'
    }
}
// 헤더
document.querySelectorAll('a[href=""]').forEach(function(item){
    item.setAttribute('href','#none')
 })
//선택
let ol = document.querySelectorAll('.firstol li')
ol.forEach((item)=>{
    item.onclick=function(){
        window.location = '../html/cgv_movie_cart_detail.html'
    }
})

let moreb =document.querySelector('.moreb'),tim=document.querySelectorAll('.firstol li:not(:nth-child(-n+10))');
moreb.onclick =function(){
    setTimeout(function(){
        for(let x of tim){
         x.style.display = 'block'
        }
        },500)
  
    
}
let btn_gotoTop= document.querySelector('.btn_gotoTop')
btn_gotoTop.onclick =function(){
    window.scrollTo({top : 0,behavior:'smooth'})
}
let btn_close = document.querySelector('.btn_close')
btn_close.onclick=function(e){
    e.target.parentElement.parentElement.parentElement.style.display='none'
}

//정렬 -> 서버에서 데이터가 제공된다고 생각하고 제작해보자
let movie_sort_list=[
    {num_rank:1,img :'../images/no1.jpg',age : 'age12',cgvflex : ['4DX'] , title:'서울의 봄',예매율 : 52.2 ,tomato : 99,runing : '2023.11.22 개봉'},
    {num_rank:2,img :'../images/no2.jpg',age : 'age15',cgvflex : ['4DX','IMAX'],title:'나폴레옹',예매율 : 18.2 ,tomato : 81,runing : '2023.12.06 개봉'},
    {num_rank:3,img :'../images/no3.jpg',age : 'All',cgvflex : ['SCREENX'],title:'3일의 휴가',예매율 : 10.2 ,tomato : 92,runing : '2023.12.06 개봉'},
    {num_rank:4,img :'../images/no4.jpg',age : 'age18',cgvflex : [],title:'엔시티 네이션 : 투 더 월드 인 시네마',예매율 : 8.1 ,tomato : 92,runing : '2023.12.06 개봉'},
    {num_rank:5,img :'../images/no5.jpg',age : 'age12',cgvflex : ['4DX','IMAX'],title:'듄',예매율 : 5.1 ,tomato : 90,runing : '2023.12.06 재개봉'},
    {num_rank:6,img :'../images/no6.jpg',age : 'age18',cgvflex : [],title:'괴물',예매율 : 3.4 ,tomato : 95,runing : '2023.11.26 개봉'},
    {num_rank:7,img :'../images/no7.jpg',age : 'age12',cgvflex : [],title:'괴물',예매율 : 3.4 ,tomato : 95,runing : '2023.11.26 개봉'},
]
movie_sort_list.sort(function(a,b){
   if(a.예매율 > b.예매율) return -1;
   if(a.예매율 == b.예매율) return 0;
   if(a.예매율 < b.예매율) return 1;
})
    console.log(movie_sort_list, '예매율 순으로 정렬')
    // sort값중에 a와 b를 비교했을때  리턴값이 0보다 작은경우 a가 b보다 앞으로 옴,  0이면 움직이지 않음  0보다 큰경우 b가 a앞으로 옴
    // 서버에서 저런식으로 자료 받아와서 파싱후  템플릿 태그에 적용후 배열의 리스트 내용만큼 복사해서 뿌리고 정렬하면 될 것 같음


}