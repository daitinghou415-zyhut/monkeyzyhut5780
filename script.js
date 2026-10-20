// Screenshot slider: the Prev / Next buttons move one screenshot at a time.
// It works for every <div class="slides"> on the page.
document.querySelectorAll('.slides').forEach(function (slides) {
  var track = slides.querySelector('.track');
  var prev = slides.querySelector('.prev');
  var next = slides.querySelector('.next');
  var count = slides.querySelector('.count');
  var total = track.children.length;

  // Which screenshot is showing now (0 = the first one)
  function current() {
    return Math.round(track.scrollLeft / track.clientWidth);
  }

  // Update "1 / 5" and switch off the button at each end
  function update() {
    var i = current();
    count.textContent = (i + 1) + ' / ' + total;
    prev.disabled = i === 0;
    next.disabled = i === total - 1;
  }

  prev.addEventListener('click', function () {
    track.scrollBy({ left: -track.clientWidth });
  });
  next.addEventListener('click', function () {
    track.scrollBy({ left: track.clientWidth });
  });
  track.addEventListener('scroll', update);   // also updates after a swipe on a phone
  update();
});
