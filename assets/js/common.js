(function(){
  var FOOTER_TEXT = "@mpi-mtk-smp-pakgun-2026";
  var f = document.getElementById("mpi-footer");
  if (f) f.textContent = FOOTER_TEXT;
  document.querySelectorAll("[data-toggle]").forEach(function(btn){
    btn.addEventListener("click", function(){
      var el = document.getElementById(btn.getAttribute("data-toggle"));
      if (!el) return;
      var open = el.classList.toggle("hidden") === false;
      btn.textContent = open ? "Sembunyikan Pembahasan" : "Lihat Pembahasan";
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
})();
