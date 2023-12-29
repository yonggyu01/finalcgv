window.onload=function(){
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
let citylist = document.querySelectorAll('.city_tit>li')
let area = document.querySelectorAll('.area')
document.querySelector('.familysite_list').style.display ='none'
area[0].style.display = 'block'
document.querySelector('.grade_popup').style.display='none'
citylist.forEach(function(item,idx){
    item.onclick = function(){
        for(let i = 0; i<citylist.length; i++){
            if(idx == i){
                area[idx].style.display = 'block'
            }else{
                area[i].style.display = 'none'
            }
        }
    }
})
document.querySelectorAll('a[href=""]').forEach(function(item){
    item.setAttribute('href','#none')
 })
let areaul = document.querySelectorAll('.area ul>li')
let maxnum=-1;
areaul.forEach(function(item,idx){
    item.onclick=function(){
        maxnum++
        switch(maxnum%5){
            case 0 :
            case 1 :   
            case 2 :
            case 3 :
            case 4 :
            document.querySelectorAll('.favorite_theater li a')[maxnum%5].innerHTML=`<em>${item.innerText}</em>`
            break;
        }
    }
})


let date = new Date()
let getdate = date.getDate()
let getday = date.getDay()
function daymaker(num){
    let date ='';
    switch (num%7){
        case 0 :
        date= '일'
        break;
        case 1 :
        date='월'
        break;
        case 2 :
       date= '화'
        break;
        case 3 :
        date='수'
        break;
        case 4 :
       date= '목'
        break;
        case 5 :
       date= '금'
        break;
        case 6 :
        date='토'
        break;
    }
    return date;
}
let getmonth = date.getMonth()+1 // +1 시켜야함
// console.log(date.getDay()) // 0 일 1 월 2 화 3 수 4 목 5 금 6 토
let day_list = document.querySelectorAll('.day_list')
day_list.forEach(function(item,idx){
    console.log(daymaker(getday+idx))
    item.children[0].childNodes[2].innerHTML=daymaker(getday+idx)
    if(getdate+idx <= 31){
        item.children[1].innerHTML = getdate + idx
        item.children[0].childNodes[0].textContent = getmonth +'월'
    }else if(getdate+idx > 31){
        item.children[1].innerHTML = getdate-31+idx 
        item.children[0].childNodes[0].textContent = (getmonth-11) +'월'
    }
   
    item.onmouseenter=function(){
        item.classList.add('on')
        for(i=0;i<day_list.length;i++){
            if(idx!=i){
                day_list[i].classList.remove('on')
            }
        }
    }
})
// day_list에 날짜 변경 구현
// 현재 날짜는 8개 있음 여기에 변경해야하는 것은 3개 항목임  요일 (한글)
// 현재 월은 한번만 구해서 뿌려주면됨 ,   strong 부분에 현재 날짜를 뿌려야함 

document.querySelector('.grade').onclick =function(){   
    document.querySelector('.grade_popup').style.display = document.querySelector('.grade_popup').style.display== 'none' ?  'block' : 'none'
}
document.querySelector('.grade_close').onclick=function(){
    document.querySelector('.grade_popup').style.display='none'
}

//minimap_area 가 지속적으로 움직여야함 내가 원하는 위치에 포지션에서 표시되어야함
// 좌표를 받아와야하는데 현재 내가 움직일 요소의 고정 좌표를 받아오기만 하면됨
// 
let minimap_area= document.querySelector('.minimap_area')
let page
let info_time = document.querySelectorAll('.info_time>li')
let npix = /\n/g
let txt2 =document.querySelector('.txt2')
info_time.forEach(function(item,idx){
    item.onmouseenter=function(e){
        let title =(e.target.parentElement.previousElementSibling.innerText).replace(npix,' ')
        txt2.innerText = title
        // minimap_area.style.display = 'block'
        // minimap_area.style.top= (e.pageY+item.getBoundingClientRect().height+180-timetable.getBoundingClientRect().height)+'px'
        /*기존 함수 구성으로는 위 수식으로 해야 그나마 비슷한 느낌이 남,  태그와 css좀 수정했음 이제 offsettop으로 상대좌표가 변동하도록 해놨음 부모 하나에게만 포지션이 있어서 아래의 요소들이  좌표를 정상적으로 주도록 바꿈  */
        minimap_area.style.display = 'block'
        minimap_area.style.top=info_time[idx].offsetTop-(minimap_area.getBoundingClientRect().height/4)+'px'
    }
    item.onmouseleave=function(){
        minimap_area.style.display= 'none'
    }
})
// 글자를 가져와서 뿌려줘야함 minimap에 내용을 바꿔가며 뿌려줘야함
//document.querySelector('.minimap_area').style.top=document.querySelectorAll('.info_time>li')[3].offsetTop-(document.querySelector('.minimap_area').getBoundingClientRect().height/4)+'px'
// 태그를 좀 손봐서 부모요소중에 최상위의 딱 한개에만  포지션 relate..를 줘서 내가 지정한 
//요소의 offsetTop값을 상대값으로 받아올 수 있어야함 -> 기존태그 구성으로는 불가능함 
// 태그 구성 및 css를 손봐서 조정했음   다시 함수를 구성하면 

window.onscroll=function(){
page = window.pageYOffset
}
// wrapboxinf   -> info 를 여러개로 만들게되면   wrapboxinf높이값도 강제로 바꿔줘야함  날짜 클릭해서 바뀔때마다  
let info = document.querySelectorAll('.info')
let wrapboxheight = document.querySelector('.wrapboxinf')
info[0].style.display = 'block'
document.querySelectorAll('.day>li').forEach(function(item,idx){
    item.onmouseenter = function(){
        info[idx].style.display = 'block'
        console.log(info[idx].children.length,info[idx].children[0].getBoundingClientRect().height)
        wrapboxheight.style.height = (info[idx].children.length * info[idx].children[0].getBoundingClientRect().height) + 'px'
        // 이거 높이가 다른 li가 있어서 (180도 있고 260도 있음 근데 나는 260으로 일괄 적용해서
        // 실제 결과값이 더 높게 적용됨, 해결방안은 li들의 높이를 전부 배열로 받아서)
        // 해당배열을 일일이 순회하면서 곱해주면 되는데.. 그냥 이대로 가자... 크게 차이가 없으니
        for(i=0; i<info.length; i++){
            if(idx != i){
             info[i].style.display = 'none'
            }
        }
    }
    item.onmouseleave=function(){
        for(i=0; i<info.length; i++){
            if(idx != i){
             info[i].style.display = 'none'
            }
        }
    }
})

    //푸터
    document.querySelector('.familysite_wrap h3').onclick = function(){
        document.querySelector('.familysite_list').style.display =  document.querySelector('.familysite_list').style.display =='none'? 'block' : 'none'
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
    // 헤더
    let btn_gotoTop= document.querySelector('.btn_gotoTop')
    btn_gotoTop.onclick =function(){
        window.scrollTo({top : 0,behavior:'smooth'})
    }
    let btn_close = document.querySelector('.btn_close')
    btn_close.onclick=function(e){
        e.target.parentElement.parentElement.parentElement.style.display='none'
    }

}