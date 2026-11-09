// 移动端侧边栏
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menu');
  var sidebar = document.getElementById('sidebar');
  if (btn && sidebar) {
    btn.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    sidebar.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') sidebar.classList.remove('open');
    });
  }

  // 代码高亮
  if (window.hljs) {
    document.querySelectorAll('pre code').forEach(function (block) {
      if (!block.classList.contains('language-mermaid')) {
        hljs.highlightElement(block);
      }
    });
  }

  // Mermaid：把 fenced code 换成 mermaid 容器
  if (window.mermaid) {
    var blocks = document.querySelectorAll('pre code.language-mermaid');
    if (blocks.length) {
      mermaid.initialize({ startOnLoad: false, theme: 'default' });
      blocks.forEach(function (block, i) {
        var div = document.createElement('div');
        div.className = 'mermaid';
        div.textContent = block.textContent;
        div.id = 'mermaid-' + i;
        block.parentElement.replaceWith(div);
      });
      mermaid.run({ querySelector: '.mermaid' }).catch(function () {});
    }
  }
});
