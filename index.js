const button = document.getElementById("button");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const genre = document.getElementById("genre");

const matrix = [];
matrix.length = 50;


button.addEventListener("click", function() {
    if (genre.value == "Electronic") {
        Stripes();
    }

    else if (genre.value == "Classical/Ambient") {
        Plaid();
    }

    else if (genre.value == "Hip-Hop/Pop") {
        Web();
    }
});

function Stripes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    matrix.fill(0);

    for(var i = 0; i < matrix.length; i++) {
        var x = Math.random()
        if (x < .5) {
        matrix[i] = 1
        }
    }

    for(var i = 0; i < matrix.length; i++) {
        var rectData = {
            "x": i,
            "y": 0,
            "width": 1,
            "height": 50
        };

        var huel = Math.floor(Math.random() * (360));

        canvas.style.backgroundColor = 'black';
        ctx.fillStyle = `hsl(${huel}, ${100}%, 50%)`;

        if (matrix[i] == 1) {
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
    }

    console.log(matrix);
}

function Plaid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    matrix.fill(0);

    for(var i = 0; i < matrix.length; i++) {
        var x = Math.random()
        if (x < .2) {
        matrix[i] = 1
        }
    }

    for(var i = 0; i < matrix.length; i++) {
        var rectData = {
            "x": i,
            "y": 0,
            "width": 1,
            "height": 50
        };

        canvas.style.backgroundColor = 'wheat';
        ctx.fillStyle = 'rgb(143, 56, 56)';

        if (matrix[i] == 1) {
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
    }

    matrix.fill(0);

    for(var i = 0; i < matrix.length; i++) {
        var x = Math.random()
        if (x < .2) {
        matrix[i] = 1
        }
    }

    for(var i = 0; i < matrix.length; i++) {
        var rectData = {
            "x": 0,
            "y": i,
            "width": 50,
            "height": 1
        };

        ctx.fillStyle = 'rgb(32, 47, 78)';

        if (matrix[i] == 1) {
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
    }

    console.log(matrix);
}

function Web() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    matrix.fill(0);

    for(var i = 0; i < matrix.length; i++) {
        var x = Math.random()
        if (x < .2) {
        matrix[i] = 1
        }
    }

    for(var i = 0; i < matrix.length; i++) {
        var rectData = {
            "x": i,
            "y": 0,
            "width": 1,
            "height": 50
        };

        canvas.style.backgroundColor = 'black';
        ctx.fillStyle = 'white';

        if (matrix[i] == 1) {
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
    }

    matrix.fill(0);

    for(var i = 0; i < matrix.length; i++) {
        var x = Math.random()
        if (x < .2) {
        matrix[i] = 1
        }
    }

    for(var i = 0; i < matrix.length; i++) {
        var rectData = {
            "x": 0,
            "y": i,
            "width": 50,
            "height": 1
        };

        if (matrix[i] == 1) {
        ctx.beginPath();
        ctx.fillRect(rectData.x,rectData.y, rectData.width, rectData.height);
        ctx.closePath();
       }
    }

    console.log(matrix);
}
