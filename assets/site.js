/* 홈페이지 공용 설정 읽기 — 내용은 /data/site.json 하나에 있고, 관리자 화면(/admin.html)에서 고칩니다. */
(function(){
  var PREVIEW_KEY = 'mokyang-site-preview';
  function applyTheme(t){
    if(!t) return;
    var r = document.documentElement.style;
    if(t.accent)  r.setProperty('--brand', t.accent);
    if(t.accent2) r.setProperty('--brand-2', t.accent2);
    if(t.soft)    r.setProperty('--brand-soft', t.soft);
    if(t.paper)   r.setProperty('--brand-paper', t.paper);
    setSkin(t.skin || 'mono');
  }
  var SKIN_KEY = 'mokyang-skin';
  function setSkin(skin){
    var h = document.documentElement;
    h.className = h.className.replace(/\bskin-[a-z]+\b/g,'').trim();
    h.classList.add('skin-'+skin);
    var old = document.getElementById('site-skin'); if(old) old.remove();
    if(skin !== 'mono' && skin !== 'original'){
      var l = document.createElement('link'); l.id='site-skin'; l.rel='stylesheet'; l.href='/assets/skins/'+skin+'.css';
      document.head.appendChild(l);
      if(skin === 'editorial' && !document.getElementById('site-serif')){
        var f = document.createElement('link'); f.id='site-serif'; f.rel='stylesheet';
        f.href='https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@600&display=swap'; document.head.appendChild(f);
      }
    }
    try{ if(new URLSearchParams(location.search).get('preview')!=='1') localStorage.setItem(SKIN_KEY, skin); }catch(e){}
  }
  // 지난번 스타일을 먼저 입혀 깜빡임을 줄임
  try{ var last = localStorage.getItem(SKIN_KEY); if(last) setSkin(last); }catch(e){}
  function load(){
    var q = new URLSearchParams(location.search);
    if(q.get('preview') === '1'){
      try{ var raw = localStorage.getItem(PREVIEW_KEY); if(raw) return Promise.resolve(JSON.parse(raw)); }catch(e){}
    }
    return fetch('/data/site.json', {cache:'no-cache'}).then(function(r){ if(!r.ok) throw 0; return r.json(); });
  }
  var ready = load().then(function(d){ applyTheme(d.theme); return d; }).catch(function(){ return null; });
  window.SITE = { ready: ready, applyTheme: applyTheme, PREVIEW_KEY: PREVIEW_KEY };
  if(new URLSearchParams(location.search).get('preview') === '1'){
    document.addEventListener('DOMContentLoaded', function(){
      var b = document.createElement('div');
      b.textContent = '미리 보기 중 · 아직 저장되지 않은 화면입니다';
      b.style.cssText = 'position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:999;background:#111113;color:#fff;font:600 13px/1 Pretendard,system-ui,sans-serif;padding:11px 16px;border-radius:99px;box-shadow:0 10px 30px -10px rgba(0,0,0,.5);white-space:nowrap';
      document.body.appendChild(b);
    });
  }
})();
