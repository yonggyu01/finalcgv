window.onload = function(){
//푸터
document.querySelector('.familysite_wrap h3').onclick = function(){
    document.querySelector('.familysite_list').style.display =  document.querySelector('.familysite_list').style.display =='none'? 'block' : 'none'
}

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
// store detail화면으로 가기위한  저장용 스크립트
    document.querySelector('.storemainwrapbox').onclick =function(e){
        let title,price,urlsrc,targetselect, urlresult,part;
        let selector = e.target.dataset.id || e.target.classList.value

        let achecker = e.target.nodeName == 'A' ?  'A' : selector;
      switch (achecker) {
        case 'hoverbox1':
            targetselect=e.target.previousElementSibling
            urlsrc =targetselect.attributes[0].nodeValue
            urlresult = urlsrc.replace(/^.../, '')
            price= (e.target.parentElement.parentElement.children.length > 3 ?  e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].textContent : e.target.parentElement.nextElementSibling.nextElementSibling.childNodes[0].textContent).replace(/원/,'')
            part=e.target.previousElementSibling.dataset.id
            title = e.target.parentElement.nextElementSibling.innerText
            title = title + ',' + price
        break;
        case 'hoverbox':
            urlsrc=e.target.parentElement.previousElementSibling.attributes[0].nodeValue
            urlresult = urlsrc.replace(/^.../, '')
            part=e.target.parentElement.previousElementSibling.dataset.id
            price= (e.target.previousElementSibling.childNodes[0].textContent).replace(/원/,'')
            title=e.target.parentElement.children[0].innerText
            title = title + ',' + price
        break;
        case 'hoverbox3' : 
        urlsrc=e.target.previousElementSibling.attributes[0].nodeValue
        urlresult = urlsrc.replace(/^.../, '')
        part=e.target.previousElementSibling.dataset.id
        price= (e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.childNodes[0].textContent).replace(/원/,'')
        title=e.target.parentElement.nextElementSibling.innerText
        title = title + ','+price
        break;
        case 'ticket':
        case 'pop' :
        case 'giftcard':
        case 'snack':
            targetselect=e.target
            urlsrc=e.target.attributes[0].nodeValue
            urlresult = urlsrc.replace(/^.../, '')
            part=e.target.dataset.id
            price= (e.target.nextElementSibling.children[2].innerText).replace(/원/,'')
            title = e.target.nextElementSibling.children[0].innerText
            title = title +','+ price;
        break; 
        case 'A' :
        window.location='../html/CGV_store.html'
        alert('회원가입이 필요한 서비스입니다.')
        break;
        }
        savelocal(urlresult,title,part)
        function savelocal(a1,b1,c1){
            window.localStorage.setItem ('src',a1)
            window.localStorage.setItem ('text',b1)
            window.localStorage.setItem ('part',c1)
        }
    }
    document.querySelectorAll('.hoverbox1,.hoverbox,.storemainwrapbox img,.hoverbox3').forEach(function(item){
        item.onclick = function(){
            console.log(item)
            window.location='../html/CGV_store_pack_detail.html'
        }
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