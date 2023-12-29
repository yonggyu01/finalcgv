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
    {num_rank:7,img :'../images/no7.jpg',age : 'age12',cgvflex : [],title:'싱글 인 서울',예매율 : 3.4 ,tomato : 95,runing : '2023.11.26 개봉'},
    {num_rank:8,img :'../images/no8.jpg',age : 'All',cgvflex : ['IMAX','SCREENX'],title:'노량-죽음의 바다',예매율 : 2.7 ,tomato : 93,runing : '2023.12.20 개봉'},
    {num_rank:9,img :'../images/no9.jpg',age : 'All',cgvflex : [],title:'SEVENTEEN TOUR ‘FOLLOW’ TO JAPAN ： LIVE VIEWING',예매율 : 2.6 ,tomato : 99,runing : '2023.12.13 개봉'},
    {num_rank:10,img :'../images/no10.jpg',age : 'All',cgvflex : [],title:'뽀로로 극장판 슈퍼스타 대모험',예매율 : 2.4 ,tomato : 97,runing : '2023.12.13 개봉'},
    {num_rank:11,img :'../images/no11.jpg',age : 'age15',cgvflex : [],title:'마에스트로 번스타인',예매율 : 1 ,tomato : 87,runing : '2023.12.06 개봉'},
    {num_rank:12,img :'../images/no12.jpg',age : 'All',cgvflex : [],title:'매직 프린세스-얼음 괴물과 사라진 열쇠의 비밀',예매율 : 0.9 ,tomato : 94,runing : '2023.12.07 개봉'},
    {num_rank:13,img :'../images/no13.jpg',age : 'All',cgvflex : [],title:'매직 프린세스-얼음 괴물과 사라진 열쇠의 비밀',예매율 : 0.9 ,tomato : 94,runing : '2023.12.07 개봉'},
    {num_rank:14,img :'../images/no14.jpg',age : 'All',cgvflex : [],title:'매직 프린세스-얼음 괴물과 사라진 열쇠의 비밀',예매율 : 0.9 ,tomato : 94,runing : '2023.12.07 개봉'}
]
let ul = document.querySelector('.firstol'),indexnum=1
function soltany(action){
    if(action==0){//예매율
        movie_sort_list.sort(function(a,b){
           if(a.예매율 > b.예매율) return -1;
           if(a.예매율 == b.예매율) return 0;
           if(a.예매율 < b.예매율) return 1;
        })
    }else if(action==1){//평점
        movie_sort_list.sort(function(a,b){
            if(a.tomato > b.tomato) return -1;
            if(a.tomato == b.tomato) return 0;
            if(a.tomato < b.tomato) return 1;
         })
    }// 관람객순이 정보가 없음

}
document.querySelector('#sortitem').onchange=function(){
    //document.querySelector('#sortitem').value
    indexnum=1
    soltany(document.querySelector('#sortitem').value)
    movie_sort_list.forEach(function(item,idx){
        // ul.innerHTML=''
        clonemaker(item,idx)  
        ul.append(cloneli[idx])
    })
  

}
    console.log(movie_sort_list, '예매율 순으로 정렬')
    // sort값중에 a와 b를 비교했을때  리턴값이 0보다 작은경우 a가 b보다 앞으로 옴,  0이면 움직이지 않음  0보다 큰경우 b가 a앞으로 옴
    // 서버에서 저런식으로 자료 받아와서 파싱후  템플릿 태그에 적용후 배열의 리스트 내용만큼 복사해서 뿌리고 정렬하면 될 것 같음
    let litemplate =document.querySelector('.litemplate').content.cloneNode(true)
    console.log(litemplate)
    let cloneli = document.querySelectorAll('.firstol li');
    // for(let i = 0; i<movie_sort_list.length; i++){
    //     cloneli.push(litemplate.querySelector('.template_item'))
    // }

    /** 
     *객체를 넣으면 노드를 생성시켜줄것임
    */ 
     ul.innerHTML=''

      
    // for(let i = 0; i<newclone.length; i++){
    //     ul.append(newclone[1])
    // }

    movie_sort_list.forEach(function(item,idx){
        clonemaker(item,idx)  
        ul.append(cloneli[idx])
    })
    function clonemaker(object,idx){
    let {num_rank,img,age,cgvflex,title,예매율,tomato,runing}=object;
    // console.log(cloneli.children)
    cloneli[idx].children[0].innerHTML='no'+indexnum 
    cloneli[idx].children[1].children[0].src=img
    switch (age){
        case 'age12':
            cloneli[idx].children[1].children[1].className='age12'
            cloneli[idx].children[1].children[1].innerHTML = 12
        break;
        case 'age15':
            cloneli[idx].children[1].children[1].className='age15'
            cloneli[idx].children[1].children[1].innerHTML = 15
        break;
        case 'age18':
            cloneli[idx].children[1].children[1].className='age18'
            cloneli[idx].children[1].children[1].innerHTML = 18
        break;
        case 'All':
            cloneli[idx].children[1].children[1].className='ageAll'
            cloneli[idx].children[1].children[1].innerHTML = 'All'
        break;
    }
    
    if(cgvflex.length>0){
        cloneli[idx].children[1].children[2].innerHTML=''
        for(let i=0; i<cgvflex.length; i++){
            let newp=document.createElement('p')
            newp.className=cgvflex.length[i]
            newp.innerHTML=cgvflex[i]
            cloneli[idx].children[1].children[2].append(newp)
        }
    }else{  
        cloneli[idx].children[1].children[2].innerHTML=''
    }
    cloneli[idx].children[2].children[0].innerHTML=title
    cloneli[idx].children[2].children[1].children[0].children[0].innerHTML=예매율+'%'
    cloneli[idx].children[2].children[1].children[1].children[0].children[1].innerHTML=tomato+'%'
    cloneli[idx].children[2].children[2].innerHTML=runing
    indexnum++
 
}

   

  
    



}