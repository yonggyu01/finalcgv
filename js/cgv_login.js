window.onload = function(){
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

// 헤더
document.querySelectorAll('a[href=""]').forEach(function(item){
item.setAttribute('href','#none')
})

//끄기버튼
let btn_gotoTop= document.querySelector('.btn_gotoTop')
btn_gotoTop.onclick =function(){
    window.scrollTo({top : 0,behavior:'smooth'})
}
let btn_close = document.querySelector('.btn_close')
btn_close.onclick=function(e){
    e.target.parentElement.parentElement.parentElement.style.display='none'
}
// 로그인버튼

const loginbtn = document.getElementById('loginbtn'),logininput=document.getElementById('user_loginID'),loginpass=document.getElementById('user_loginPass')
let notpa=0;
loginbtn.onclick=function(){
    if(window.localStorage[logininput.value] && window.localStorage[`${logininput.value}_pass`] ){
        if((logininput.value==window.localStorage[logininput.value])&&(loginpass.value==window.localStorage[`${logininput.value}_pass`])){
            document.querySelector('.login_wrap').style.display ='none'
            document.querySelector('.login_wrap2').style.display ='flex'
            document.querySelector('.login_wrap2').innerHTML=`<h2>${logininput.value}님 로그인에 성공하셨습니다.</h2>`
            setTimeout(function(){
                location.href= '../index.html'
            },1500)
        }else if((logininput.value==window.localStorage[logininput.value])&&(loginpass.value!=window.localStorage[`${logininput.value}_pass`])){
            if(notpa<3){
                alert('비밀번호가 틀렸습니다.')
                loginpass.value='';
                notpa++
            }else{
                alert('비밀번호 입력 초과로 회원가입페이지로 넘어갑니다.')
                loginpass.value='';
                setTimeout(function(){
                    location.href= '../html/CGV_sign.html'
                },1500)
            }
        }
        
        
    }else{
        alert('없는 아이디 입니다. 회원가입화면으로 이동합니다.')
        location.href = "../html/CGV_sign.html"
    }

}
}