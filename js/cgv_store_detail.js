window.onload= function(){
    document.querySelector('.familysite_list').style.display ='none'
    let gettext,getsrc,splitdot=/,/g;
    // 처음 로딩시 로컬저장소에서 자료 받아오는 버튼임
    function getlocalsave(){
        if(!window.localStorage.src){
            return window.history.back();
        }
        let find = window.localStorage.getItem('text')
        gettext = find.split(splitdot)
        getsrc =  `../${window.localStorage.getItem('src')}`
    };
    document.querySelectorAll('a[href=""]').forEach(function(item){
        item.setAttribute('href','#none')
     })
    getlocalsave()
    // console.log(gettext,getsrc)
    let mainmenus = window.localStorage.getItem('part')
    let changetitle = document.querySelector('#changetitle')
    let changeimg=document.querySelector('#changeimg')
    let price = document.querySelector('.pricewrap p')
    let calcul_result_box = document.querySelector('#calcul_result_box')
    let total_result =document.querySelector('.total_result')
    changetitle.innerHTML = gettext[0]
    let fil =  gettext.length > 2 ?  gettext[1]+gettext[2] : '10000'
    let defaultprice = Number(fil.replace(/원/g,''))
    price.innerHTML = gettext.length > 2 ? gettext[1]+','+gettext[2] : gettext[1]
    changeimg.src = getsrc 
    let cacul = defaultprice
    let resultwindow = document.querySelector('.result')
    total_result.innerHTML = price.innerHTML
    let resultview = Number(document.querySelector('.result a').innerHTML)
    document.querySelector('.clacul').onclick=function(e){
        let selector = e.target.parentElement.classList.value || e.target.classList.value
        console.log(resultview)
        switch (selector){
            case 'minus':
                if(resultview == 1){
                    resultview = 1
                    resultwindow.innerHTML=resultview
                    total_result.innerHTML = defaultprice + '원'
                    calcul_result_box.innerHTML =cacul + '원';
                }else{
                    resultview--
                    resultwindow.innerHTML=resultview
                    cacul = defaultprice * resultview
                    total_result.innerHTML = cacul + '원'
                }
                break;
            case 'plus':
                if(resultview == 4){
                    resultview = 4
                    resultwindow.innerHTML=resultview
                    cacul = defaultprice * resultview
                    total_result.innerHTML = cacul + '원'
                    alert('4개 이상 구매 불가능합니다.')
                }else{
                    resultview++
                    resultwindow.innerHTML=resultview
                    cacul = defaultprice * resultview
                    total_result.innerHTML = cacul + '원'
                }
               
                break;
        }
    }
    calcul_result_box.innerHTML =cacul + '원';
    let itemtext = document.querySelector('#item_name')
    let itemdate = document.querySelector('#item_date')
    itemtext.innerHTML = gettext[0]
    itemdate.innerHTML = gettext[0] + ' 구매일로부터 12개월 이내'
     switch(mainmenus){
        case 'giftcard': 
        document.querySelectorAll('.storetapmenu ul li a')[2].classList.add('font_red')
        break;
        case 'package':
            document.querySelectorAll('.storetapmenu ul li a')[0].classList.add('font_red')
        break;
        case 'ticket' :
            document.querySelectorAll('.storetapmenu ul li a')[1].classList.add('font_red')
        break;
        case 'snack' :
            document.querySelectorAll('.storetapmenu ul li a')[5].classList.add('font_red')
        break;
        case 'pop' :
            document.querySelectorAll('.storetapmenu ul li a')[4].classList.add('font_red')
        break;
        case 'combo' :
            document.querySelectorAll('.storetapmenu ul li a')[3].classList.add('font_red')
        break;

     }
    // 헤더배너 끄기버튼과  하단 슬라이더버튼 
    let leftnum = 0;
    window.onclick = function(e){
        let packslideli = document.querySelector('.storemainwrapbox li').getBoundingClientRect().width    
        let idchecker = e.target.id || e.target.classList.value;
        // console.log(leftnum)

        switch (idchecker){
            case 'btn_close' :
                document.querySelector('.adTop').style.display = 'none'
            break;
            case 'rightb' :
                // console.log(leftnum)
                leftnum -= (packslideli-30) 
                document.querySelector('.storemainwrapbox ul').style.transform = `translateX(${leftnum}px)`
            break;
            case 'leftb' :
                // 여백이 없는 상황인데 총 갯수가 애매해서 이상하게 움직임 개선여부 고민해봐야할듯함
                leftnum +=(packslideli+30)
                document.querySelector('.storemainwrapbox ul').style.transform = `translateX(${leftnum}px)`
            break;
        
        }
    }

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
    let btn_gotoTop= document.querySelector('.btn_gotoTop')
    btn_gotoTop.onclick =function(){
        window.scrollTo({top : 0,behavior:'smooth'})
    }
    let btn_close = document.querySelector('.btn_close')
    btn_close.onclick=function(e){
        e.target.parentElement.parentElement.parentElement.style.display='none'
    }

}