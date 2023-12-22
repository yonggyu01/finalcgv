window.onload=function(){
let citylist = document.querySelectorAll('.city_tit>li')
let area = document.querySelectorAll('.area')
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
    item.children[0].childNodes[2].innerHTML=daymaker(getday+idx)
    item.children[1].innerHTML = getdate + idx
    item.children[0].childNodes[0].textContent = getmonth +'월'
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


window.onclick=function(e){
    
    console.log(e)
}
document.querySelector('.grade').onclick =function(){   
    document.querySelector('.grade_popup').style.display = document.querySelector('.grade_popup').style.display== 'none' ?  'block' : 'none'
}
document.querySelector('.grade_close').onclick=function(){
    document.querySelector('.grade_popup').style.display='none'
}

//minimap_area 가 지속적으로 움직여야함 내가 원하는 위치에 포지션에서 표시되어야함
let minimap_area= document.querySelector('.minimap_area')
let timetable= document.querySelector('.timetable')
let page
let info_time = document.querySelectorAll('.info_time')
let npix = /\n/g
let txt2 =document.querySelector('.txt2')
info_time.forEach(function(item,idx){
    item.onmouseenter=function(e){
        console.log(e.pageY,page)
        let title =(e.target.previousElementSibling.innerText).replace(npix,' ')
        txt2.innerText = title
        minimap_area.style.display = 'block'
        minimap_area.style.top= (e.pageY+item.getBoundingClientRect().height+700-timetable.getBoundingClientRect().height)+'px'
        // minimap_area.style.top= (e.pageY-page -330 )+'px' 
    }
    item.onmouseleave=function(){
        minimap_area.style.display= 'none'
    }
})
// 글자를 가져와서 뿌려줘야함 minimap에 내용을 바꿔가며 뿌려줘야함

window.onscroll=function(){
page = window.pageYOffset
}




}