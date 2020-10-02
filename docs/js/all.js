var Sc;

Sc = {
  resize: function() {},
  scroll: function() {
    if (Sc.Win.scrollTop() > 30) {
      return $('#head').addClass('bgc-color');
    } else {
      return $('#head').removeClass('bgc-color');
    }
  },
  initPerfectScrollBar: function() {
    var r;
    r = $('._roller');
    return $.each(r, function() {
      var $t;
      $t = $(this);
      if (Sc.Win.width() < 760) {
        return $t.stopPropagation();
      } else {
        return $t.perfectScrollbar();
      }
    });
  },
  init: function() {
    Sc.Win = $(window);
    Sc.initPerfectScrollBar();
    //open popoup
    $('._open-popup').click(function() {
      var lp, p, t;
      t = $(this);
      lp = t.attr('data-link-to-popup');
      $('._popup-box').addClass('show');
      p = $('._popup-box').find('._popup-item[data-popup=' + lp + ']');
      p.addClass('show');
      return $('html, body').addClass('ov-hidden');
    });
    $('._popup-cls').click(function() {
      $('._popup-box, ._popup-item').removeClass('show');
      return $('html, body').removeClass('ov-hidden');
    });
    //open submenu
    $('._nav-angel-open-submenu').click(function() {
      var p, sub, t;
      t = $(this);
      p = t.closest('._nav-menu-parent');
      sub = p.find('._sub-nav-menu');
      if (p.hasClass('open')) {
        sub.slideUp(300);
        return p.removeClass('open');
      } else {
        sub.slideDown(300);
        return p.addClass('open');
      }
    });
    //select
    $('._select:not(.inited)').addClass('inited').click(function() {
      var a;
      a = $(this);
      a.toggleClass('open');
      $('*').click(function(e) {
        var div;
        div = a;
        if (!div.is(e.target) && div.has(e.target).length === 0) {
          return div.removeClass('open');
        }
      });
      return a.find('._option').click(function() {
        var f, t;
        t = $(this).text();
        f = $(this).closest('._select').find('._i');
        if (f.is('div')) {
          return f.text(t);
        } else if (f.is('input')) {
          return f.val(t);
        }
      });
    });
    Sc.scroll();
    Sc.Win.scroll(function() {
      return Sc.scroll();
    });
    Sc.scroll();
    //$("input[name=custom_phone]").mask("+7 (999) 999-99-99");
    Sc.Win.resize(function() {
      return Sc.resize();
    });
    return Sc.resize();
  }
};

$(window).ready(function() {
  return Sc.init();
});

$(window).scroll(function() {
  return Sc.scroll();
});
