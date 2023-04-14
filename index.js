const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    questions.forEach((q) => {
      if (q !== question) {
        q.nextElementSibling.style.display = 'none';
        q.classList.remove('active');
      }
    });

    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      question.classList.add('active');
    } else {
      answer.style.display = 'none';
      question.classList.remove('active');
    }
  });
});
