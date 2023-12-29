  //이름 => 영문 혹은 한글만 숫자불가
        // 아이디  => db에 중복된 아이디가 있는지 확인필요
        // 비밀번호 윗항목과 아래 항목이 일치해야함 == 대소문자  + 특수문자 최소 한개 입력해야함
        // 전화번호 숫자만 입력되었는지 확인필요
        // 생년월일  숫자만 입력되었는지
        // 주소는 시 군구 입력시 팝업창 활성화
        // 회원가입버튼 클릭시 모든 항목에 이상이 없는지 체크하는 기능 이상이 있다면 
        // 이상있는 부분에 값을 입력하라는 경고창 활성화 and 붉은 밑줄, 이전으로 버튼 누르면 다음 화면으로 이동필요
        
        window.onload = function(){
            const user_name = document.getElementById('user_name')
            const user_id = document.getElementById('user_id')
            // const user_id_check = document.getElementById('id_check')
            const user_pass = document.getElementById('user_pass')
            const user_passcheck = document.getElementById('user_passcheck')
            const user_phone = document.getElementById('user_phone')
            const user_email = document.getElementById('user_email')
            const user_emailaddress = document.getElementById('user_emailaddress')
            const mailaddress = document.getElementById('mailaddress')
            const birth = document.getElementById('birth')
            const joinbtn = document.getElementById('joinbtn')
            const backbtn = document.getElementById('backbtn')
            let user_select = document.querySelector('#user_select')
            const nonevalue = document.querySelectorAll('#user_name,#user_id,#user_pass,#user_passcheck,#user_phone,#user_email,#user_emailaddress,#birth,#user_address1,#user_address2,#user_address3')
// 정규식 문자열 변수.search( /패턴/i g ...)
// 변경 변수.replace(/패턴/i g...  , '바꿀 문자열')

// preventDefault 속성은 기본기능을 제한하는 기능임
//함수 function은 파라메터로 기본적으로 마지막 인자를 이벤트를 받아오기로 되어있음
// e를 인자로 받아서 콘솔로 찍어보면 태그으 ㅣ다양한 정보가 출력됨
// 유효성검사 순서는 html 작성된 순서대로 작성하자.
// 글자수 제한은 html태그에 작성해서 maxlength  이런식으로 제한하는경우.. 브라우저에서 제한을 해주는거라서..  하위버전 브라우저에서 사용불가 할수도 있어서...가급적 스크립트로 하자
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
            joinbtn.onclick = function(e){
                e.preventDefault();
                for(let x of nonevalue){
                   if(!x.value){
              
                    e.preventDefault();
                    x.focus()
                    return alert(`${x.placeholder}에 내용이 없습니다.`);
                    }
                }
                if(!(user_id.value.length>=4&&user_id.value.length<=12)){
                    alert('아이디는 4~12글자 입력해줘')
                    return false;
                              
                }
                if(user_pass.value.length<4 || user_pass.value.length>8){
                    alert('비밀번호는 4~8글자 이상 입력해줘')
                    return false;
                }
                if(user_pass.value!=user_passcheck.value){
                    e.preventDefault();
                    return alert('비밀번호가 틀렸습니다.')
                }
                let tt = user_phone.value
                const reg1 = /^\d+$/g; // 아래와 같은 뜻임
                const reg = /^[0-9]{10,11}$/g;  // 중괄호 는 범위지정인데  띄어쓰기 하면안됨, 띄어쓰기는 글자임..  그리고 띄어쓰기는 범위지정임 
                if(!reg1.test(tt)){
                    alert('전화번호 숫자만 입력해줘')
                    return false;
                }
                if(!user_select.checked){
                    alert('약관동의 필요함')
                    return false;
                }else{
                    window.localStorage.setItem(user_id.value,user_id.value)
                    window.localStorage.setItem(`${user_id.value}_pass`,user_pass.value)
                    document.querySelector('#joinpage').style.display='none'
                    document.querySelector('.sign_succ').innerHTML = `<h2 style=" display: flex;text-align:center;font-size : 30px;padding-top : 150px;margin:0 auto 100px;width:980px;justify-content:center;" >${user_id.value} 님 회원가입에 성공하였습니다.</h2>`
                    setTimeout(function(){
                        location.href= '../html/CGV_login.html'
                    },2000)
                }
            }
            mailaddress.onchange = function(){
                let tta = mailaddress.value
                switch(tta){
                    case 'usertext' : 
                    user_emailaddress.value = '';
                    user_emailaddress.removeAttribute('readonly')
                    break;
                    case 'naver.com' :
                    user_emailaddress.value = 'naver.com'; 
                    user_emailaddress.setAttribute('readonly','text')
                    break;
                    case 'daum.net' :
                    user_emailaddress.value = 'daum.net'; 
                    user_emailaddress.setAttribute('readonly','text')
                    break;
                    case "nate.com" :
                    user_emailaddress.value = "nate.com"; 
                    user_emailaddress.setAttribute('readonly','text')
                    break;
                    case "google.com" :
                    user_emailaddress.value = "google.com"; 
                    user_emailaddress.setAttribute('readonly','text')
                    break;
                }
            }
            // 위와같이 작성한거 말고 함수를 넣고 mailaddress에 직접 함수로  실행시키는 방법도 있음
            
          //  select태그에 직접 onchange = 'selectedaddress()'>  추가해서 
           /* function selectedaddress(){
            let user_emailaddress = document.getElementById('user_emailaddress')
            let mailaddress = document.getElementById('mailaddress')
            console.log(mailaddress.options.selectedIndex) // -> 인덱스가 나옴
            let idx = mailaddress.options.selectedIndex
            console.log(idx)
            let selected = mailaddress.options[idx].value
            user_emailaddress.value =selected;
            if(idx==0){
                user_emailaddress.readOnly = false;
            }else{
                 user_emailaddress.readOnly = true;
            }
           // 이런방식도 구현해도 됨. 좀더 짧긴한데  ... 단 내가 윈도우 온로드 걸어놔서
           // 온로드 이벤트 밖에서 실행해야 정상 작동됨 
            } 
*/


                
// 이벤트 끌때 방법중하나로 form태그에 직접 onsubmit 입력하고  return을  같이 작성하면 summit상황에서만 이벤트가 발생됨
//<form action="insert.php" method="get" name="join" id="joinform" onsubmit="return namecheck()">
// 함수 속에 return false를 넣어주면 이벤트가 비활성화됨.
    // return false; 로 전달하게 if문ㅇ 속에 넣으면  이벤트가 실행이 안됨.  이벤트 비활성화 하는 방법중 하나임;
// 

document.querySelector('#user_id').onkeyup =()=>{
    if(document.querySelector('#user_id').value.length > 4){
        searchid(document.querySelector('#user_id').value)
    }else{
        document.querySelector('.idresultbox').innerHTML = `<span style="margin-left : 5px; color:red">아이디를 4글자 이상 입력해주세요</span>`
    }
    setTimeout(function(){
        document.querySelector('.idresultbox').innerHTML=''
    },10000)
}
function searchid(idvalue){
        if(!window.localStorage[idvalue]){
          document.querySelector('.idresultbox').innerHTML = `<span style="margin-left : 5px; color:blue">사용가능</span>`
        }else{
            document.querySelector('.idresultbox').innerHTML = `<span style="margin-left : 5px; color:red">사용불가</span>`
        }
    }



    // 팝업창 띄우는 방법
    // window.open('팝업될 문서의 url','팝업된 문서의 이름','옵션 (위치-> 보조모니터에서는 작동안한다기 보다는 주모니터길이  + 보조모니터 길이까지 계산한 값을 넣어야 보조모니터에서도 보임  보통은 주모니터에서만 작동함,크기,bar표시등)')
// window.open('검색할 페이지.html','아이디검색','width=800,height=400,left=300,top=50')
        //옵션에 위치는 지원안하는 브라우저가 있을 수 있음

            // history 가 윈도우창에 뒤로가기 앞으로가기 버튼 부분이다 . history.back 뒤로가기 history.forward .. 버튼
            // history에서는 뒤로가기 꾹 누르면 목록이 뜨는데 이걸 histroy.go(-값 뒤로여러칸  or +값 앞으로여러페이지); 라고 쓰면됨
            // location 은 주소입력창을 나타냄
            // 새로고침의 경우  history.go(0)  , 혹은  location.reload()  둘다 같은말임
            // window.onload = funtion(){ location.href = "http:// www.naver.com"} 이런식으로 바로 이동할수있음
            // 브라우저에 navigator라는 객체가 있음 여기에 navigator.userAgent 눌러보면 무슨 환경으로 사용중인지 나옴
            // window.onload = function(){
            //     let navigator = document.querySelector('.whitebox')
            //     // navigator = window.navigator.userAgent
            //     navigator.innerHTML = window.navigator.userAgent
            // }
            
            backbtn.onclick = function(){
                history.back()
                //혹시 브라우저에서 작동을 안하는 경우에는
                // 태그에 직접 onclick="javascript:histoy.back()"  자바스크립트라고 입력해주면 작동한다.
            }

            

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






}
        


