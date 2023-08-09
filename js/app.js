const build = document.querySelector('#build');

build.addEventListener('click', () => {
    const apiKey = '5catGVmV260Au6Q+TvVyCw==sNQddxS39E8qg8xu';
    let searchBar = document.querySelector('#searchBar').value;

    if (searchBar !== "") {
        let url = `https://api.api-ninjas.com/v1/exercises?muscle=${encodeURIComponent(searchBar)}`;

        fetch(url, {
            method: 'GET',
            headers: {'X-Api-Key': apiKey} 
        })

        .then((res) => {
            return res.json();
        })
        .then((workout) => {
            const randomIndex = Math.floor(Math.random() * workout.length);
            const randomExercise = workout[randomIndex];

            let workoutName = randomExercise.name;
            let workoutM = randomExercise.muscle;
            let workoutI = randomExercise.instructions;
            let result = document.querySelector('#result');
                result.innerHTML =
                `<h1>${workoutName}</h1>
                <h2>${workoutM}</h2>
                <p class="parrafos"><strong></strong>${workoutI}</p> `
        })
        .catch((err) => {
            console.log(err);
        });
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Select A Image</a>',
            customClass: {
                confirmButton: 'custom-confirm-button'
              }
          })
    }
});






//5catGVmV260Au6Q+TvVyCw==sNQddxS39E8qg8xu
//https://api.api-ninjas.com/v1/exercises?muscle=