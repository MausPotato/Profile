const adButtons = document.querySelectorAll('.adDemoButtons button');
const adFrame = document.getElementById('adPreviewFrame');
const adTitle = document.getElementById('activeAdTitle');
const adCategory = document.getElementById('activeAdCategory');
const adLink = document.getElementById('activeAdLink');

adButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const { title, category, url } = button.dataset;

    adButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');

    adTitle.textContent = title;
    adCategory.textContent = category;
    adLink.href = url;
    adFrame.title = `${title} mobile preview`;
    adFrame.src = url;
  });
});
