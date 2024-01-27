const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: 'pexels-vlada-karpovich-4451711.jpg',
        text: 
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cumque corrupti, neque nulla libero impedit eveniet perferendis earum quas facilis.'
    },
    {
        id: 2,
        name: 'John Mark',
        job: 'Ethical Hacker',
        img: 'pexels-vlada-karpovich-4451711.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cumque corrupti, neque nulla libero impedit eveniet perferendis earum quas facilis.'
    },
    {
        id: 3,
        name: 'Stella Mark',
        job: 'Graphics Designer',
        img: 'pexels-vlada-karpovich-4451711.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cumque corrupti, neque nulla libero impedit eveniet perferendis earum quas facilis.'
    },
    {
        id: 4,
        name: 'John Lock',
        job: 'Penetration Tester',
        img: 'pexels-vlada-karpovich-4451711.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia cumque corrupti, neque nulla libero impedit eveniet perferendis earum quas facilis.'
    }
]

//Select items
var img = document.getElementById('person-img');
var author = document.getElementById('author');
var job = document.getElementById('job');
var info = document.getElementById('info');
var prevBtn = document.querySelector('.prev-btn')
var nextBtn = document.querySelector('.next-btn')
var randomBtn = document.querySelector('.random-btn')

//set starting item 
var currentItem = 0;


function showPerson() {
    var item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

window.onload = () => {
    showPerson()
}

nextBtn.onclick = () => {
    currentItem++;
    if (currentItem > reviews.length -1) {
        currentItem = 0;
    }
    showPerson(currentItem);
}

prevBtn.onclick = () => {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
}

randomBtn.onclick = () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
}