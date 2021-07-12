document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.steps__btn').forEach(function(stepsBtn) {
        stepsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.how-we-works__content').forEach(function(howWeWorksContent) {
                howWeWorksContent.classList.remove('how-we-works__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how-we-works__content-active')
        })
    })
})
