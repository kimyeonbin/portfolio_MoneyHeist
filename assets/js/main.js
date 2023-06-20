$(function(){

    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.saveStyles(".mobile, .desktop");
    
    ScrollTrigger.matchMedia({
        "(min-width: 1281px)": function() {
            /**
             * @헤더로고_위치크기
             */
            gsap.from('.header .logo',{
                scrollTrigger:{
                    trigger:'.sc-visual',
                    start:'0% 0%',
                    end:'100% 0%',
                    // markers:true,
                    scrub:0.3,
                },
                scale:4.5,
                top: '75vh'
            });
            /** 
             * @헤더푸터레이아웃_사라짐나타남
             */
            const hideLayout = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-collage',
                    start:'0% 50%',
                    end:'100% 80%',
                    // markers:true,
                    scrub:1,
                }
            });
            hideLayout
            .addLabel('a')
            .to('.header',{
                yPercent:-100,
                opacity:0,
            },'a')
            .from('.footer',{
                yPercent:100,
                opacity:0,
            },'a+=0.2');
            /**
             * @스크롤텍스트_나타남
             */
            document.querySelectorAll('[data-scroll=up]').forEach(element => {
                gsap.from(element.children[0],{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 85%",
                        end:"100% 65%",
                        scrub:0.3,
                        // markers:true,
                    },
                    yPercent:100
                });
            });
            /**
             * @이미지_상하움직임
             */
            document.querySelectorAll('[data-parallax-scroll]').forEach(element => {
                windowStart = element.dataset.start ? element.dataset.start : '0%';
                yVal = element.dataset.parallaxScroll;
                gsap.to(element.children[0],{
                    scrollTrigger:{
                        trigger:element,
                        start:`${windowStart} 100%`,
                        end:"100% 0%",
                        scrub:1,
                        // markers:true,
                    },
                    yPercent:yVal
                });
            });
        },

        
        "(min-width: 1025px) and (max-width: 1280px)": function() {
            /**
             * @헤더로고_위치크기
             */
            gsap.from('.header .logo',{
                scrollTrigger:{
                    trigger:'.sc-visual',
                    start:'0% 0%',
                    end:'100% 0%',
                    // markers:true,
                    scrub:0.3,
                },
                scale:3.5,
                top: '75vh'
            });
            /** 
             * @헤더푸터레이아웃_사라짐나타남
             */
            const hideLayout = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-collage',
                    start:'0% 50%',
                    end:'100% 80%',
                    // markers:true,
                    scrub:1,
                }
            });
            hideLayout
            .addLabel('a')
            .to('.header',{
                yPercent:-100,
                opacity:0,
            },'a')
            .from('.footer',{
                yPercent:100,
                opacity:0,
            },'a+=0.2');
            /**
             * @스크롤텍스트_나타남
             */
            document.querySelectorAll('[data-scroll=up]').forEach(element => {
                gsap.from(element.children[0],{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 85%",
                        end:"100% 65%",
                        scrub:0.3,
                        // markers:true,
                    },
                    yPercent:100
                });
            });
            /**
             * @이미지_상하움직임
             */
            document.querySelectorAll('[data-parallax-scroll]').forEach(element => {
                windowStart = element.dataset.start ? element.dataset.start : '0%';
                yVal = element.dataset.parallaxScroll;
                gsap.to(element.children[0],{
                    scrollTrigger:{
                        trigger:element,
                        start:`${windowStart} 100%`,
                        end:"100% 0%",
                        scrub:1,
                        // markers:true,
                    },
                    yPercent:yVal
                });
            });
        },


        "(min-width: 768px) and (max-width: 1024px)": function() {
            /**
             * @헤더로고_위치크기
             */
            gsap.from('.header .logo',{
                scrollTrigger:{
                    trigger:'.sc-visual',
                    start:'0% 0%',
                    end:'100% 0%',
                    // markers:true,
                    scrub:0.3,
                },
                scale:2.7,
                top: '75vh'
            });
            /** 
             * @헤더푸터레이아웃_사라짐나타남
             */
            const hideLayout = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-collage',
                    start:'0% 50%',
                    end:'100% 80%',
                    // markers:true,
                    scrub:1,
                }
            });
            hideLayout
            .addLabel('a')
            .to('.header',{
                yPercent:-100,
                opacity:0,
            },'a')
            .from('.footer',{
                yPercent:100,
                opacity:0,
            },'a+=0.2');
            /**
             * @스크롤텍스트_나타남
             */
            document.querySelectorAll('[data-scroll=up]').forEach(element => {
                gsap.from(element.children[0],{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 85%",
                        end:"100% 65%",
                        scrub:0.3,
                        // markers:true,
                    },
                    yPercent:100
                });
            });
             /**
             * @이미지_상하움직임
             */
            document.querySelectorAll('[data-parallax-scroll]').forEach(element => {
                windowStart = element.dataset.start ? element.dataset.start : '0%';
                yVal = element.dataset.parallaxScroll;
                gsap.to(element.children[0],{
                    scrollTrigger:{
                        trigger:element,
                        start:`${windowStart} 100%`,
                        end:"100% 0%",
                        scrub:1,
                        // markers:true,
                    },
                    yPercent:yVal
                });
            });
         },


        "(max-width: 767px)": function() {
           /**
            * @헤더로고_위치크기
            */
            gsap.from('.header .logo',{
                scrollTrigger:{
                    trigger:'.sc-visual',
                    start:'0% 0%',
                    end:'100% 0%',
                    // markers:true,
                    scrub:0.3,
                },
                // scale:2.4,
                top: '70vh'
            });
            /** 
             * @헤더푸터레이아웃_사라짐나타남
             */
            const hideLayout = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-collage',
                    start:'0% 50%',
                    end:'100% 80%',
                    // markers:true,
                    scrub:0,
                }
            });
            hideLayout
            .addLabel('a')
            .to('.header',{
                yPercent:-100,
                opacity:0,
            },'a')
            .from('.footer',{
                yPercent:100,
                opacity:0,
            },'a+=0.2');
        },


        "all": function() {
            /**
             * @가로스크롤_텍스트
             */
            const highlightTxt = new SplitType('.sc-highlight .headline', { types: 'words, chars' });
            gsap.set('.sc-highlight .h-overlay',{opacity:0});
            gsap.set('.sc-highlight img',{scale:1.2});
            gsap.set('.sc-highlight .headline',{xPercent:80});
            gsap.set(highlightTxt.chars,{opacity:0,yPercent:25});

            highlightTxtHori = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc-highlight",
                    start:"0% 0%",
                    end:"100% 0%",
                    // markers:true,
                    scrub:1,
                }
            });

            highlightTxtHori
            .addLabel('a')
            .to('.sc-highlight img',{scale:1},'a')
            .to('.sc-highlight .h-overlay',{opacity:1},'a')
            .to('.sc-highlight .headline',{xPercent:-60},'a');

            gsap.to('.sc-highlight .headline .char',{
                scrollTrigger:{
                    trigger:".sc-highlight",
                    start:"0% 0%",
                    end:"100% 0%",
                    scrub:1,
                },
                opacity:1, yPercent:0, stagger:0.05
            });
            /**
             * @하단텍스트_좌우나타남
             */
            const showText = gsap.timeline({
                scrollTrigger:{
                    trigger:'.sc-collage',
                    start:'10% 100%',
                    end:'95% 100%',
                    // markers:true,
                    scrub:1,
                }
            });
            showText
            .addLabel('a')
            .fromTo('.sc-collage .left',{x:-250,},{x:0, opacity:1,},'a')
            .fromTo('.sc-collage .right',{x:250,}, {x:0, opacity:1,},'a');
            /**
             * @헤더_색상
             */
            document.querySelectorAll('[data-theme=black]').forEach(element => {
                            
                ScrollTrigger.create({
                    trigger:element,
                    start: `0% 40%`,
                    end:`100% 0%`,
                    // markers:true,
                    toggleClass:{targets:'.header',className:'on'},
                });
            });
            /**
             * @스크롤_조각나는박스
             */
            document.querySelectorAll('[data-parallax-bar]').forEach(element => {
                heightVal = element.dataset.parallaxBar
                gsap.to(element,{
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 150%",
                        end:"100% 60%",
                        scrub:0.3,
                        // markers:true,
                    },
                    height:heightVal
                });
            });
            /**
             * @영역_상하움직임
             */
            gsap.to('.sc-awards',{
                scrollTrigger:{
                    trigger:'.sc-awards',
                    start:`5% 100%`,
                    end:"20% 100%",
                    scrub:1,
                    // markers:true,
                },
                yPercent:-6
            });
        }
    });
});
