/* =========================================================
   皇統パワー株式会社 — 共通スクリプト
   ・スマホのハンバーガーメニュー開閉
   ・スマホの「事業案内」サブメニュー開閉
   ========================================================= */
(function () {
  'use strict';

  var navbtn = document.querySelector('.navbtn');
  var gnav   = document.querySelector('.gnav');
  var subbtn = document.querySelector('.subbtn');
  var subnav = document.querySelector('.subnav');

  /* ハンバーガーメニュー */
  if (navbtn && gnav) {
    navbtn.addEventListener('click', function () {
      var isOpen = gnav.classList.toggle('is-open');
      navbtn.classList.toggle('is-open', isOpen);
      navbtn.setAttribute('aria-expanded', isOpen);
      navbtn.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* サブメニュー（スマホ時のみボタンが表示される） */
  if (subbtn && subnav) {
    subbtn.addEventListener('click', function () {
      var isOpen = subnav.classList.toggle('is-open');
      subbtn.classList.toggle('is-open', isOpen);
      subbtn.setAttribute('aria-expanded', isOpen);
    });
  }

  /* Escキーでメニューを閉じる */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && gnav && gnav.classList.contains('is-open')) {
      navbtn.click();
    }
  });

  /* 画面をPCサイズに戻したときに状態をリセット */
  var mq = window.matchMedia('(min-width: 821px)');
  mq.addEventListener('change', function (e) {
    if (e.matches && gnav) {
      gnav.classList.remove('is-open');
      navbtn.classList.remove('is-open');
      navbtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      if (subnav) { subnav.classList.remove('is-open'); }
      if (subbtn) { subbtn.classList.remove('is-open'); }
    }
  });
})();
