window.onload = function(){

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


    
        let btn_gotoTop= document.querySelector('.btn_gotoTop')
        btn_gotoTop.onclick =function(){
            window.scrollTo({top : 0,behavior:'smooth'})
        }
        let btn_close = document.querySelector('.btn_close')
        btn_close.onclick=function(e){
            e.target.parentElement.parentElement.parentElement.style.display='none'
        }
    
    }