
    /* -- a태그 화면 올라감 방지 -- 
    const click=document.querySelectorAll('a');
    for(let k=0; k<click.length; k++){
        click[k].addEventListener('click',function(e){
            e.preventDefault();
        });
    }
*/
    /* -- 로딩화면 -- */
    const loading=document.querySelector('.loading_bg');
    const body=document.querySelector('body')
    setTimeout(function(){
        loading.style.display='none';
        body.style.overflowY='scroll'
    },1500);

    /* -- slider -- */
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect : 'fade',
        speed: 400,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '0' + (+index + 1) + "</span>";
            }
          },
        
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          
      });
    
    /* -- slide3 색 반전 --*/
    const slides=document.querySelectorAll('.container .slide')
    const slide3=document.querySelector('#section1 .s3');
    const logo=document.querySelector('#header h1 a')
    const btn=document.querySelectorAll('#header #btn span')
    const prev=document.querySelector('#section1 .swiper-button-prev');
    const next=document.querySelector('#section1 .swiper-button-next');
    const menuBtn=document.querySelector('#btn');
    const menu=document.querySelector('.menu_wrap');
    
    for(let t=0; t<slides.length; t++){
        slides[t].addEventListener('transitionstart',chk3);
    }
    function chk3(){
        let num=document.querySelectorAll('#section1 .swiper-pagination-bullet');
        let active=document.querySelector('#section1 .swiper-pagination-bullet-active');
        let menuBtn=document.querySelector('#btn');
        let menu=document.querySelector('.menu_wrap');
        if(slide3.classList.contains('swiper-slide-duplicate-active') || slide3.classList.contains('swiper-slide-active')){
            prev.style.color='#000';
            next.style.color='#000';
            logo.style.filter='invert(100)';
            for(let i=0; i<btn.length; i++){
                btn[i].style.background='#000';
            }
            for(let n=0; n<num.length; n++){
                num[n].style.color="#999";
            }
            active.style.color="#000";
        }else if(!slide3.classList.contains('swiper-slide-duplicate-active') || !slide3.classList.contains('swiper-slide-active')){
            prev.style.color='#fff';
            next.style.color='#fff';
            logo.style.filter='invert(0)';
            for(let i=0; i<btn.length; i++){
                btn[i].style.background='#fff';
            }
            for(let n=0; n<num.length; n++){
                num[n].style.color="#ccc";
            }
            active.style.color="#fff";
        }
        /* section3 출력시 메뉴 버튼 색 반전 */
        menuBtn.addEventListener('click',function(){
            if(menu.classList.contains('on') && slide3.classList.contains('swiper-slide-duplicate-active')){
                for(let i=0; i<btn.length; i++){
                    btn[i].style.background='#fff';
                }
            }else if(!menu.classList.contains('on') && slide3.classList.contains('swiper-slide-duplicate-active')){
                for(let i=0; i<btn.length; i++){
                    btn[i].style.background='#000';
                }
            }
        });
    }

    /* -- menu -- */
   
    menuBtn.addEventListener('click',function(){
        this.classList.toggle('active');
        menu.classList.toggle('on');
        console.log(menuBtn);
    });
    
    
    /* -- scroll event -- */
    document.addEventListener('scroll',function(){
        const scrollT=document.documentElement.scrollTop;
        const section3=document.querySelector('#section3');
        const section4=document.querySelector('#section4'); 
        const section6=document.querySelector('#section6'); 
        const section3T=section3.offsetTop;
        const section4T=section4.offsetTop;
        const section6T=section6.offsetTop;
        const section3Bar=document.querySelector('#section3 .bar');
        const section4Bar=document.querySelector('#section4 .bar');
        const section6txt=document.querySelector('#section6 .txt');
        
        const section3Img=document.querySelector('#section3 > .imgbox');
        const section4Img=document.querySelector('#section4 > .imgbox');
        const section3txt=document.querySelector('#section3 .txt');
        const section4txt=document.querySelector('#section4 .txt');
        /* -- section3 event -- */
        if(scrollT>=section3T-100){
            section3Bar.classList.add('on');
            section3Img.classList.add('on');
            section3txt.classList.add('on');
        }else if(scrollT<section3T-500){
            section3Bar.classList.remove('on');
            section3Img.classList.remove('on');
            section3txt.classList.remove('on');
        } 
        
        /* -- section4 event -- */
        if(scrollT>=section4T-100){
            section4Bar.classList.add('on');
            section4Img.classList.add('on');
            section4txt.classList.add('on');
        }else if(scrollT<section4T-500){
            section4Bar.classList.remove('on');
            section4Img.classList.remove('on');
            section4txt.classList.remove('on');
        } 

        /* -- section6 event -- */
        if(scrollT>=section6T-50){
            section6txt.classList.add('on');
        }else if(scrollT<section6T-400){
            section6txt.classList.remove('on');
        }
    });
    
    /* -- section3 img 변경 -- */
    const sec3img=document.querySelector('#section3 .imgbox img')
    function imgChnage(){
        sec3img.src="images/desktop/oversizepaddingB.png"
    }
    function imgChnage2(){
        sec3img.src="images/desktop/oversizepadding.png"
    }
    sec3img.addEventListener('mouseenter',imgChnage);
    sec3img.addEventListener('mouseleave',imgChnage2);

     /* -- section4 img 변경 -- */
    const sec4img=document.querySelector('#section4 .imgbox img')
    function imgChnage3(){
        sec4img.src="images/desktop/kniitedB.png"
    }
    function imgChnage4(){
        sec4img.src="images/desktop/kniited.png"
    }
    sec4img.addEventListener('mouseenter',imgChnage3);
    sec4img.addEventListener('mouseleave',imgChnage4);

const video=document.querySelectorAll('video');
for(let v=0; v<video.length; v++){
    video[v].play();
}

