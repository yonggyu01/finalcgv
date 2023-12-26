window.onload =function(){
    //푸터

//스크롤
document.querySelector('.familysite_wrap h3').onclick = function(){
    document.querySelector('.familysite_list').style.display =  document.querySelector('.familysite_list').style.display =='none'? 'block' : 'none'
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

let moreb =document.querySelector('.moreb')
moreb.onclick =function(){
    setTimeout(function(){
        let disp = document.querySelectorAll('.firstol li:not(:nth-child(-n+10))')
            for(let x of disp){
              x.style.display='block'
          }
    },500)
}

}