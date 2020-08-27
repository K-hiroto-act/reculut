$(function(){
    var topBtn = $('.page-top');
    topBtn.hide();
    $(window).scroll(function () {
      $(this).scrollTop() > 100 ? topBtn.fadeIn() : topBtn.fadeOut();
    });
    topBtn.click(function () {
      $('body,html').animate({ scrollTop: 0 }, 500);
      return false;
    });
  });

  gsap.to('.Concept_wrap', {
    duration: 1, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.picture img', {
    duration: 2, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.Corporate_information', {
    duration: 2, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.mission', {
    duration: 3, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });

  gsap.to('.Position', {
    duration: 2, // 右側に2秒かけて移動するモーションを指定する
    y:'0px',
    opacity:1,
    stagger: {
        each:0.5,
    }
  });



